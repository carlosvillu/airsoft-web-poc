import { InvalidPasswordUserError } from '../Errors/InvalidPasswordUserError.js'

export class PasswordValueObject {
  static validate ({ password } = {}) {
    if (!password || password.length < 4) {
      throw InvalidPasswordUserError.create(`Invalid password(${password})`)
    }
  }

  static create ({ password } = {}) {
    PasswordValueObject.validate({ password })

    return new PasswordValueObject({ password })
  }

  constructor ({ password }) {
    this._value = password
  }

  value () {
    return this._value
  }

  toJSON () {
    return { password: this._value }
  }
}
