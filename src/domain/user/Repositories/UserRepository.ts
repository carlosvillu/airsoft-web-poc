import type { UserEntity } from '../Models/UserEntity'
import type { PasswordValueObject } from '../Models/PasswordValueObject'
import type { StatusValueObject } from '../Models/StatusValueObject'

export type ParamsUserAndPassword = {
  user: UserEntity;
  password: PasswordValueObject;
}

export interface UserRepository {
  signin({ user, password }: ParamsUserAndPassword): Promise<UserEntity>;
  signup ({ user, password }: ParamsUserAndPassword): Promise<UserEntity>;
  signout (): Promise<StatusValueObject>;
  current (): Promise<UserEntity>;
}
