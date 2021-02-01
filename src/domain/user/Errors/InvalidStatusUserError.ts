export class InvalidStatusUserError extends Error {
  static create (msg: string) {
    return new InvalidStatusUserError(msg)
  }
}
