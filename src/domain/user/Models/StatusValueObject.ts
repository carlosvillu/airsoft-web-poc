import { InvalidStatusUserError } from '../Errors/InvalidStatusUserError.js'

export type StatusValueObjectJSON = {
  status: boolean
}

export class StatusValueObject {
  private _value: StatusValueObjectJSON['status']

  static validate ({ status }: StatusValueObjectJSON) {
    if (typeof status !== 'boolean') {
      InvalidStatusUserError.create(`Forbidden status(${status})`)
    }
  }

  static create ({ status }: StatusValueObjectJSON) {
    StatusValueObject.validate({ status })
    return new StatusValueObject({ status })
  }

  constructor ({ status }: StatusValueObjectJSON) {
    this._value = status
  }

  value (): StatusValueObjectJSON['status'] {
    return this._value
  }

  toJSON (): StatusValueObjectJSON {
    return {
      status: this._value
    }
  }
}
