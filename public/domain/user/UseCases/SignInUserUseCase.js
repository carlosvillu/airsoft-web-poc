import {InMemoryUserRepository} from '../Repositories/InMemoryUserRepository.js'
import {PasswordValueObject} from '../Models/PasswordValueObject.js'
import {UserEntity} from '../Models/UserEntity.js'

export class SignInUserUseCase {
  static create() {
    const repository = InMemoryUserRepository.create()
    return new SignInUserUseCase({repository})
  }

  constructor({repository}) {
    this._repository = repository
  }

  async execute({userName, password} = {}) {
    const user = UserEntity.create({userName})
    const passwordVO = PasswordValueObject.create({password})
    const userCreated = await this._repository.signin({
      user,
      password: passwordVO
    })

    return userCreated.toJSON()
  }
}
