import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Slider {
  @Field(() => Int)
  id: number;

  @Field()
  photo: string;

  @Field()
  title: string;
}
