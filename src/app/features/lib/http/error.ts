export type FetchErrorCause = {
  message: string
  name: string
  rawResponse: Response
  status: Response['status']
  headers: Response['headers']
}

export class FetchError extends Error {
  cause: FetchErrorCause

  constructor(message: string, response: Response) {
    super(message)
    this.cause = {
      rawResponse: response,
      status: response.status,
      headers: response.headers,
      message: message,
      name: 'FetchError',
    }
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
