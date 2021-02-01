export class InvalidUserError extends Error {
  static create (msg: string) {
    return new InvalidUserError(msg)
  }
}
