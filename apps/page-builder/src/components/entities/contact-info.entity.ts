import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class ContactInfo {
  @Field(() => ID)
  id: number;

  @Field()
  primaryEmail: string;

  @Field({ nullable: true })
  secondaryEmail?: string;

  @Field()
  primaryPhone: string;

  @Field({ nullable: true })
  officePhone?: string;

  @Field()
  primaryHotline: string;

  @Field({ nullable: true })
  secondaryHotline?: string;

  @Field()
  link: string;

  @Field(() => [ContactContent])
  contents: ContactContent[];

  @Field()
  createdAt: Date;
}

@ObjectType()
export class ContactContent {
  @Field(() => ID)
  id: number;

  @Field()
  text: string;
}
