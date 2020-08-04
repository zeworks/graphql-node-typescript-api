import { InputType, Field } from 'type-graphql'

@InputType()
export class UserInput {
    @Field()
    firstName: string;

    @Field(() => String, { nullable: true })
    lastName?: string;
}
