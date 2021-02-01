export class EpicFailUserError extends Error {
  static create (msg: string) {
    return new EpicFailUserError(msg)
  }
}
