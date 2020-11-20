import { NextApiResponse } from 'next'

class ResponseError extends Error {
  public statusCode: number
  public data: unknown
  public originalError: Error

  constructor(
    message: string,
    statusCode: number,
    data?: unknown,
    originalError?: Error
  ) {
    super(message)
    this.statusCode = statusCode
    this.data = data
    this.originalError = originalError
  }
}

function sendError({
  error,
  res
}: {
  error: Error | ResponseError
  res: NextApiResponse
}): void {
  if (error instanceof ResponseError) {
    if (error.originalError) {
      console.error(error.originalError)
    }
    res.status(error.statusCode)
    res.send({ message: error.message, data: error.data })
  } else {
    console.error(error)
    res.status(500)
    res.send({ message: 'Internal server error.' })
  }
}

export { ResponseError, sendError }
