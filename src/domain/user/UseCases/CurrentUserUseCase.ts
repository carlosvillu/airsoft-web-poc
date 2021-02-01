import type { UserEntityJSON } from '../Models/UserEntity'
import type { UserRepository } from '../Repositories/UserRepository'
import { InMemoryUserRepository } from '../Repositories/InMemoryUserRepository.js'
import type { ReturnDomain } from 'types/domain'
export class CurrentUserUseCase {
  private _repository: UserRepository

  static create () {
    const repository = InMemoryUserRepository.create()
    return new CurrentUserUseCase({ repository })
  }

  constructor ({ repository }: {repository: UserRepository}) {
    this._repository = repository
  }

  async execute (): ReturnDomain<UserEntityJSON> {
    try {
      const user = await this._repository.current()

      return user?.toJSON()
    } catch {
      return undefined
    }
  }
}
