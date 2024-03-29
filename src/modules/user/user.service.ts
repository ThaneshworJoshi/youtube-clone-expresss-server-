import { User, UserModel } from './user.module';

export async function createUser(user: Omit<User, 'comparePassword'>) {
  return UserModel.create(user);
}

export async function findUserByEmail(email: User['email']) {
  return UserModel.findOne({ email });
}
