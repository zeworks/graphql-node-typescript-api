import { Resolver, Query, Mutation, Arg, UseMiddleware, Ctx } from 'type-graphql'
import { Users } from 'src/entities/Users'
import { UserInput } from 'src/models/User'
import { Auth } from '../middlewares/auth'
import { BaseContext } from '../context/base'

@Resolver()
export class UserResolver {
  /**
   * Create User
   */
  @Mutation(() => Users)
  async createUser (
    @Arg('input', () => UserInput) input: UserInput
  ) {
    const hasUser = await Users.find({
      where: {
        email: input.email
      }
    })

    if (hasUser.length > 0) {
      return
    }

    const user = await Users.create(input).save()
    return user
  }

  /**
   * Fetch Users
   */
  @Query(() => [Users])
  // TODO: Middleware is WIP
  // @UseMiddleware(Auth)
  users (@Ctx() { payload }: BaseContext) {
    console.log(payload)

    return Users.find()
  }
}
