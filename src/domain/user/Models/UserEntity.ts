import { InvalidUserError } from '../Errors/InvalidUserError.js'

export type UserEntityJSON = {
  id: string,
  userName: string
}

const UUIDGeneratorBrowser = () =>
  // @ts-ignore
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  )

export class UserEntity {
  private _id: UserEntityJSON['id']
  private _userName: UserEntityJSON['userName']

  static validate ({ id, userName }: UserEntityJSON) {
    if (!id || !userName) {
      throw InvalidUserError.create(
        `Invalid User id(${id}) userName(${userName})`
      )
    }
  }

  static create ({ id, userName }:UserEntityJSON) {
    UserEntity.validate({ id, userName })
    return new UserEntity({ id, userName })
  }

  static createFromName ({ userName }: Omit<UserEntityJSON, 'id'>): UserEntity {
    const newID = UUIDGeneratorBrowser()
    UserEntity.validate({ id: newID, userName })

    return new UserEntity({ id: newID, userName })
  }

  constructor ({ id, userName }: UserEntityJSON) {
    this._id = id
    this._userName = userName
  }

  id (): UserEntityJSON['id'] {
    return this._id
  }

  userName (): UserEntityJSON['userName'] {
    return this._userName
  }

  toJSON (): UserEntityJSON {
    return {
      id: this._id,
      userName: this._userName
    }
  }
}
