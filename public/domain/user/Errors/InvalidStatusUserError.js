export class InvalidStatusUserError extends Error {
  static create(msg) {
    return new InvalidStatusUserError(msg)
  }
}
