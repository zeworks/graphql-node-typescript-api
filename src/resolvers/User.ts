import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { User } from 'src/entities/User'
import { UserInput } from 'src/models/User'

@Resolver()
export class UserResolver {
  /**
   * Create User
   */
  @Mutation(() => User)
  async createUser (@Arg('input', () => UserInput) input: UserInput) {
    const user = await User.create(input).save()
    return user
  }

  /**
   * Fetch Users
   */
  @Query(() => [User])
  users () {
    return User.find()
  }
}
