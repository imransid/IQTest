import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Quote {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  designation: string;

  @Field()
  quote: string;

  @Field()
  imageUrl: string;
}

@ObjectType()
export class Designation {
  @Field(() => Int)
  id: number;

  @Field()
  designation: string;
}
