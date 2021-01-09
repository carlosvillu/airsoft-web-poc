import {InMemoryUserRepository} from '../Repositories/InMemoryUserRepository.js'
export class SignOutUserUseCase {
  static create() {
    const repository = InMemoryUserRepository.create()
    return new SignOutUserUseCase({repository})
  }

  constructor({repository}) {
    this._repository = repository
  }

  async execute() {
    const status = await this._repository.signout()

    return status?.toJSON()
  }
}
