import { InputType, Field } from 'type-graphql'

@InputType()
export class SessionLoginInput {
  @Field()
  email: string;

  @Field()
  password: string
}
