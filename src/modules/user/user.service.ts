import { UserModel } from './user.module';

export async function createUser(user) {
  return UserModel.create(user);
}
