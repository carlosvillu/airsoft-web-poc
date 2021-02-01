export class NotFoundUserError extends Error {
  static create (msg: string) {
    return new NotFoundUserError(msg)
  }
}
