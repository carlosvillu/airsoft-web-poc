import type { UserEntityJSON } from '../Models/UserEntity'
import type { UserRepository } from '../Repositories/UserRepository'
import type { ReturnDomain } from 'types/domain'

import { InMemoryUserRepository } from '../Repositories/InMemoryUserRepository.js'
import { PasswordValueObject } from '../Models/PasswordValueObject.js'
import { UserEntity } from '../Models/UserEntity.js'

type Params = {
  userName: string
  password: string
}

export class SignInUserUseCase {
  private _repository: UserRepository
  static create () {
    const repository = InMemoryUserRepository.create()
    return new SignInUserUseCase({ repository })
  }

  constructor ({ repository }: {repository: UserRepository}) {
    this._repository = repository
  }

  async execute ({ userName, password }: Params): ReturnDomain<UserEntityJSON> {
    const user = UserEntity.createFromName({ userName })
    const passwordVO = PasswordValueObject.create({ password })
    const userCreated = await this._repository.signin({
      user,
      password: passwordVO
    })

    return userCreated.toJSON()
  }
}
