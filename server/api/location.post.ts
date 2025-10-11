import { InsertLocation } from '~/lib/db/schema'

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, InsertLocation.safeParse)

  if (!result.success){
      return sendError(event, createError({
        statusCode: 422,
        statusMessage: 'Invalid Location Data'
      }))
  }
  return result.data
})