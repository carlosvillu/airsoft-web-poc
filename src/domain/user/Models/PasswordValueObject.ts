import { InvalidPasswordUserError } from '../Errors/InvalidPasswordUserError.js'

export type PasswordValueObjectJSON = {
  password: string | null
}

export class PasswordValueObject {
  private _value: PasswordValueObjectJSON['password']

  static validate ({ password }: PasswordValueObjectJSON = { password: null }) {
    if (!password || password.length < 4) {
      throw InvalidPasswordUserError.create(`Invalid password(${password})`)
    }
  }

  static create ({ password }: PasswordValueObjectJSON = { password: null }) {
    PasswordValueObject.validate({ password })

    return new PasswordValueObject({ password })
  }

  constructor ({ password }: PasswordValueObjectJSON = { password: null }) {
    this._value = password
  }

  value (): PasswordValueObjectJSON['password'] {
    return this._value
  }

  toJSON (): PasswordValueObjectJSON {
    return { password: this._value }
  }
}
