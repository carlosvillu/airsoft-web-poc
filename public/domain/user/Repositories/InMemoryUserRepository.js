import {UserEntity} from '../Models/UserEntity.js'
import {UserRepository} from './UserRepository.js'
import {EpicFailUserError} from '../Errors/EpicFailUserError.js'
import {InvalidUserError} from '../Errors/InvalidUserError.js'
import {NotFoundUserError} from '../Errors/NotFoundUserError.js'
import {StatusValueObject} from '../Models/StatusValueObject.js'

const USERS_DB_KEY = '__USERS_DB__'
const CURRENT_USER_KEY = '__USERS_DB_CURRENT_USER__'
const EMPTY_DB = '{}'

export class InMemoryUserRepository extends UserRepository {
  static create() {
    // TODO: Pasar la dependencias por el metodo create y al constructor
    // userEntityCreator: UserEntity.create
    return new InMemoryUserRepository({storage: window.localStorage})
  }

  constructor({storage}) {
    super()
    this._storage = storage
  }

  async signin({user, password}) {
    try {
      const userDBJSON = this._storage.getItem(USERS_DB_KEY) ?? EMPTY_DB
      const userDB = JSON.parse(userDBJSON)

      const userJSON = Object.values(userDB).find(
        u => u.userName === user.userName()
      )

      if (!userJSON) {
        throw NotFoundUserError.create(`User with userName(${user.userName()})`)
      }

      if (password.value() !== userJSON.password) {
        throw NotFoundUserError.create(`Invlaid password(${password.value()})`)
      }

      const nextUserDB = {
        ...userDB,
        [CURRENT_USER_KEY]: user.toJSON()
      }

      const nextUserDBJSON = JSON.stringify(nextUserDB)
      this._storage.setItem(USERS_DB_KEY, nextUserDBJSON)

      return UserEntity.create(userJSON)
    } catch (error) {
      if (error instanceof NotFoundUserError) {
        throw error
      }
      throw EpicFailUserError.create(error.message)
    }
  }

  async signup({user, password}) {
    try {
      const userDBJSON = this._storage.getItem(USERS_DB_KEY) ?? EMPTY_DB
      const userDB = JSON.parse(userDBJSON)

      if (Object.values(userDB).find(u => u.userName === user.userName())) {
        throw InvalidUserError.create(
          `Forbidden create user with userName(${user.userName()})`
        )
      }

      const nextUserDB = {
        ...userDB,
        [user.id()]: {
          ...user.toJSON(),
          password: password.value()
        }
      }

      const nextUserDBJSON = JSON.stringify(nextUserDB)
      this._storage.setItem(USERS_DB_KEY, nextUserDBJSON)

      return user
    } catch (error) {
      if (error instanceof InvalidUserError) {
        throw error
      }

      throw EpicFailUserError.create(error.message)
    }
  }

  async signout() {
    try {
      const userDBJSON = this._storage.getItem(USERS_DB_KEY) ?? EMPTY_DB
      const userDB = JSON.parse(userDBJSON)

      if (!userDB[CURRENT_USER_KEY]) {
        throw InvalidUserError.create('Forbidden signout user')
      }

      const nextUserDB = {
        ...userDB,
        [CURRENT_USER_KEY]: null
      }

      const nextUserDBJSON = JSON.stringify(nextUserDB)
      this._storage.setItem(USERS_DB_KEY, nextUserDBJSON)

      return StatusValueObject.create({status: true})
    } catch (error) {
      throw EpicFailUserError.create(error.message)
    }
  }

  async current() {
    try {
      const userDBJSON = this._storage.getItem(USERS_DB_KEY) ?? EMPTY_DB
      const userDB = JSON.parse(userDBJSON)

      const currentUser = userDB[CURRENT_USER_KEY]

      const status = UserEntity.create(currentUser)
      return status
    } catch (error) {
      throw EpicFailUserError.create(error.message)
    }
  }
}
