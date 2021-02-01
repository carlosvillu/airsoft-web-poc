export class InvalidPasswordUserError extends Error {
  static create (msg: string) {
    return new InvalidPasswordUserError(msg)
  }
}
