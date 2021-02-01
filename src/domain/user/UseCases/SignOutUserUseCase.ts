import type { StatusValueObjectJSON } from '../Models/StatusValueObject'
import type { UserRepository } from '../Repositories/UserRepository'
import type { ReturnDomain } from 'types/domain'

import { InMemoryUserRepository } from '../Repositories/InMemoryUserRepository.js'

export class SignOutUserUseCase {
  private _repository: UserRepository
  static create () {
    const repository = InMemoryUserRepository.create()
    return new SignOutUserUseCase({ repository })
  }

  constructor ({ repository }: {repository: UserRepository}) {
    this._repository = repository
  }

  async execute ():ReturnDomain<StatusValueObjectJSON> {
    const status = await this._repository.signout()

    return status?.toJSON()
  }
}
