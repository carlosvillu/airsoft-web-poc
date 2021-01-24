import { InMemoryUserRepository } from '../Repositories/InMemoryUserRepository.js'
import { UserEntity } from '../Models/UserEntity.js'
import { PasswordValueObject } from '../Models/PasswordValueObject.js'

export class SignUpUserUseCase {
  static create () {
    const repository = InMemoryUserRepository.create()
    return new SignUpUserUseCase({ repository })
  }

  constructor ({ repository }) {
    this._repository = repository
  }

  async execute ({ userName, password } = {}) {
    const user = UserEntity.create({ userName })
    const passwordVO = PasswordValueObject.create({ password })
    const userCreated = await this._repository.signup({
      user,
      password: passwordVO
    })

    return userCreated.toJSON()
  }
}
