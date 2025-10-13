import db from '~/lib/db'
import { InsertLocation, location } from '~/lib/db/schema'

export default defineEventHandler(async (event) => {

  if(!event.context.user){

    return sendError(event, createError({
      statusCode: 403,
      statusMessage: 'Un Authorized'
    }))

  }


  const result = await readValidatedBody(event, InsertLocation.safeParse)

  if (!result.success){
      return sendError(event, createError({
        statusCode: 422,
        statusMessage: 'Invalid Location Data'
      }))
  }

 const [created] = await db.insert(location).values({
    ...result.data,
    slug: result.data.name.replaceAll(' ', '-').toLowerCase(),
    userId: event.context.user.id
  }).returning();

  return created;
})