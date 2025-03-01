// src/contact-info/dto/create-contact-info.input.ts
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateContactInfoInput {
  @Field()
  primaryEmail: string;

  @Field({ nullable: true })
  secondaryEmail?: string;

  @Field()
  primaryPhone?: string;

  @Field({ nullable: true })
  officePhone?: string;

  @Field()
  primaryHotline?: string;

  @Field({ nullable: true })
  secondaryHotline?: string;

  @Field()
  link?: string;

  @Field(() => [String], { nullable: true })
  contents?: string[];
}

@InputType()
export class UpdateContactInfoInput extends PartialType(
  CreateContactInfoInput,
) {
  @Field(() => Int)
  id: number;
}
