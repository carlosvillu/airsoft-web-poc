export class InvalidUserError extends Error {
  static create (msg) {
    return new InvalidUserError(msg)
  }
}
