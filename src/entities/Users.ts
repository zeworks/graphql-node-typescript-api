import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class Users extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  lastName: string;

  @Field()
  @Column()
  email: string;

  @Column()
  password: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  token: string;
}
