import { InvalidUserError } from '../Errors/InvalidUserError.js'

const UUIDGeneratorBrowser = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  )

export class UserEntity {
  static validate ({ id, userName }) {
    if (!id || !userName) {
      throw InvalidUserError.create(
        `Invalid User id(${id}) userName(${userName})`
      )
    }
  }

  static create ({ id, userName } = {}) {
    let newID
    if (!id) {
      newID = UUIDGeneratorBrowser()
    }

    const userID = id || newID

    UserEntity.validate({ id: userID, userName })

    return new UserEntity({ id: userID, userName })
  }

  constructor ({ id, userName }) {
    this._id = id
    this._userName = userName
  }

  id () {
    return this._id
  }

  userName () {
    return this._userName
  }

  toJSON () {
    return {
      id: this._id,
      userName: this._userName
    }
  }
}
