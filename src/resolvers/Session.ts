import { Resolver, Mutation, Arg } from 'type-graphql'
import { Users } from 'src/entities/Users'
import { SessionLoginInput } from 'src/models/Session'
import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken'

@Resolver()
export class SessionResolver {
  @Mutation(() => Users, { nullable: true })
  async login (
    @Arg('input', () => SessionLoginInput) input: SessionLoginInput
  ) {
    // fetch user
    const user = await Users.findOne({ where: { email: input.email } })

    // user don't exist
    if (!user) {
      return null
    }

    // validate password
    const passwordValid = bcrypt.compare(input.password, user.password)
    if (!passwordValid) { return null }

    const acessToken = sign({
      userId: user.id
    }, 'abc123', { expiresIn: '15min' })

    // return user
    return user
  }
}
