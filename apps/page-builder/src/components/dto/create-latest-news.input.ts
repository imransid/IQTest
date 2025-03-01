import { InputType, Int, Field } from '@nestjs/graphql';
import { Publish } from '../../prisma/publish-type.enum';
import { IsAlpha, Length } from 'class-validator';

@InputType()
export class CreateLatestNewsInput {
  @Field()
  @IsAlpha()
  @Length(0, 255)
  label: string;

  @Field((type) => Int)
  pageId: number;

  @Field()
  link: string;

  @Field(() => Publish, { defaultValue: Publish.NO })
  isPublished: keyof typeof Publish;

  @Field()
  entryDate: Date;
}
