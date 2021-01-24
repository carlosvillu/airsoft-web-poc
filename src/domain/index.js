const interOP = (fn, name) => () => fn().then(mod => mod[name])
const UCs = {
  CurrentUserUseCase: interOP(() => import('./user/UseCases/CurrentUserUseCase.js'), 'CurrentUserUseCase'), // eslint-disable-line
  SignUpUserUseCase: interOP(() => import('./user/UseCases/SignUpUserUseCase.js'), 'SignUpUserUseCase'), // eslint-disable-line
  SignInUserUseCase: interOP(() => import('./user/UseCases/SignInUserUseCase.js'), 'SignInUserUseCase'), // eslint-disable-line
  SignOutUserUseCase: interOP(() => import('./user/UseCases/SignOutUserUseCase.js'), 'SignOutUserUseCase') // eslint-disable-line
}

export class Airsoft {
  static create () {
    return new Airsoft()
  }

  get (uc) {
    return {
      async execute () {
        const klass = await UCs[uc].call()
        return klass.create().execute(...arguments)
      }
    }
  }
}
