export class NotFoundUserError extends Error {
  static create (msg) {
    return new NotFoundUserError(msg)
  }
}
