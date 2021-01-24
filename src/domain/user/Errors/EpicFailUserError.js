export class EpicFailUserError extends Error {
  static create(msg) {
    return new EpicFailUserError(msg)
  }
}
