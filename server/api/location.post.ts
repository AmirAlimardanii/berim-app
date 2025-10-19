import { DrizzleError } from 'drizzle-orm'
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

  try {
     const [created] = await db.insert(location).values({
    ...result.data,
    slug: result.data.name.replaceAll(' ', '-').toLowerCase(),
    userId: event.context.user.id
  }).returning();
   return created;

  } catch (e) {
    const error = e as DrizzleError
    if(error.message === 'SQLITE_CONSTRAINT: SQLite error: UNIQUE constraint failed: location.slug'){
       return sendError(event, createError({
      statusCode: 409,
      statusMessage: 'Slug Should be Unique (please enter a unique name)'
    }))
    }
    throw error
  }

 
})