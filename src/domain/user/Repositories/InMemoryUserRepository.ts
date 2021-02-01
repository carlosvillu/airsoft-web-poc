import { UserEntity, UserEntityJSON } from '../Models/UserEntity.js'
import type { UserRepository, ParamsUserAndPassword } from './UserRepository.js'
import { EpicFailUserError } from '../Errors/EpicFailUserError.js'
import { InvalidUserError } from '../Errors/InvalidUserError.js'
import { NotFoundUserError } from '../Errors/NotFoundUserError.js'
import { StatusValueObject } from '../Models/StatusValueObject.js'

const USERS_DB_KEY = '__USERS_DB__'
const CURRENT_USER_KEY = '__USERS_DB_CURRENT_USER__'
const EMPTY_DB = '{}'

type ExtendedUserEntityJSON = UserEntityJSON & {password: string}

export class InMemoryUserRepository implements UserRepository {
  private storage: Storage

  static create (): InMemoryUserRepository {
    return new InMemoryUserRepository({ storage: window.localStorage })
  }

  constructor ({ storage }: {storage: Storage}) {
    this.storage = storage
  }

  async signin ({ user, password }: ParamsUserAndPassword) {
    try {
      const userDBJSON = this.storage.getItem(USERS_DB_KEY) ?? EMPTY_DB
      const userDB = JSON.parse(userDBJSON)

      const usersJSON = Object.values(userDB) as ExtendedUserEntityJSON[]
      const userJSON = usersJSON.find(
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
      this.storage.setItem(USERS_DB_KEY, nextUserDBJSON)

      return UserEntity.create(userJSON)
    } catch (error) {
      if (error instanceof NotFoundUserError) {
        throw error
      }
      throw EpicFailUserError.create(error.message)
    }
  }

  async signup ({ user, password }: ParamsUserAndPassword) {
    try {
      const userDBJSON = this.storage.getItem(USERS_DB_KEY) ?? EMPTY_DB
      const userDB = JSON.parse(userDBJSON)

      const usersJSON = Object.values(userDB) as ExtendedUserEntityJSON[]
      if (usersJSON.find(u => u.userName === user.userName())) {
        throw InvalidUserError.create(
          `Forbidden create user with userName(${user.userName()})`
        )
      }

      const nextUserDB = {
        ...userDB,
        [user.id()!]: {
          ...user.toJSON(),
          password: password.value()
        }
      }

      const nextUserDBJSON = JSON.stringify(nextUserDB)
      this.storage.setItem(USERS_DB_KEY, nextUserDBJSON)

      return user
    } catch (error) {
      if (error instanceof InvalidUserError) {
        throw error
      }

      throw EpicFailUserError.create(error.message)
    }
  }

  async signout () {
    try {
      const userDBJSON = this.storage.getItem(USERS_DB_KEY) ?? EMPTY_DB
      const userDB = JSON.parse(userDBJSON)

      if (!userDB[CURRENT_USER_KEY]) {
        throw InvalidUserError.create('Forbidden signout user')
      }

      const nextUserDB = {
        ...userDB,
        [CURRENT_USER_KEY]: null
      }

      const nextUserDBJSON = JSON.stringify(nextUserDB)
      this.storage.setItem(USERS_DB_KEY, nextUserDBJSON)

      return StatusValueObject.create({ status: true })
    } catch (error) {
      throw EpicFailUserError.create(error.message)
    }
  }

  async current () {
    try {
      const userDBJSON = this.storage.getItem(USERS_DB_KEY) ?? EMPTY_DB
      const userDB = JSON.parse(userDBJSON)

      const currentUser = userDB[CURRENT_USER_KEY]

      const status = UserEntity.create(currentUser)
      return status
    } catch (error) {
      throw EpicFailUserError.create(error.message)
    }
  }
}
