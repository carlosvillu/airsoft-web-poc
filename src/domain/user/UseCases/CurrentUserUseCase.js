import {InMemoryUserRepository} from '../Repositories/InMemoryUserRepository.js'
export class CurrentUserUseCase {
  static create() {
    const repository = InMemoryUserRepository.create()
    return new CurrentUserUseCase({repository})
  }

  constructor({repository}) {
    this._repository = repository
  }

  async execute() {
    try {
      const user = await this._repository.current()

      return user?.toJSON()
    } catch {
      return null
    }
  }
}
