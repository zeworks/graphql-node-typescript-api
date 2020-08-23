import { InputType, Field } from 'type-graphql'

@InputType()
export class UserInput {
    @Field()
    firstName: string;

    @Field(() => String, { nullable: true })
    lastName?: string;

    @Field()
    email: string;

    @Field()
    password: string;
}

@InputType()
export class UserGet {
    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    accessToken: string;
}
