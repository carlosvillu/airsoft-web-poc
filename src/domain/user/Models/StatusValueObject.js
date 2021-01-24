import { InvalidStatusUserError } from '../Errors/InvalidStatusUserError.js'

export class StatusValueObject {
  static validate ({ status }) {
    if (typeof variable !== 'boolean') {
      InvalidStatusUserError.create(`Forbidden status(${status})`)
    }
  }

  static create ({ status }) {
    StatusValueObject.validate({ status })
    return new StatusValueObject({ status })
  }

  constructor ({ status }) {
    this._value = status
  }

  value () {
    return this._value
  }

  toJSON () {
    return {
      status: this._value
    }
  }
}
