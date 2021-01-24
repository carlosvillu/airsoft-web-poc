export class InvalidPasswordUserError extends Error {
  static create (msg) {
    return new InvalidPasswordUserError(msg)
  }
}
