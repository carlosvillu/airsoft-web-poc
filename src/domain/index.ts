const interOP = (fn: Function, name: string) => () => fn().then((mod: Record<string, any>) => mod[name])
const UCs = {
  CurrentUserUseCase: interOP(() => import('./user/UseCases/CurrentUserUseCase.js'), 'CurrentUserUseCase'), // eslint-disable-line
  SignUpUserUseCase: interOP(() => import('./user/UseCases/SignUpUserUseCase.js'), 'SignUpUserUseCase'), // eslint-disable-line
  SignInUserUseCase: interOP(() => import('./user/UseCases/SignInUserUseCase.js'), 'SignInUserUseCase'), // eslint-disable-line
  SignOutUserUseCase: interOP(() => import('./user/UseCases/SignOutUserUseCase.js'), 'SignOutUserUseCase') // eslint-disable-line
}

type UseCasesNames = keyof typeof UCs

export class Airsoft {
  static create () {
    return new Airsoft()
  }

  get (uc: UseCasesNames) {
    return {
      async execute () {
        const klass = await UCs[uc]()
        return klass.create().execute(...arguments)
      }
    }
  }
}
