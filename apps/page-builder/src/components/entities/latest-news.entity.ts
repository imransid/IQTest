import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Publish } from '../../prisma/publish-type.enum';

@ObjectType()
export class LatestNews {
  @Field(type => Int)
  id: number;

  @Field(type => Int)
  pageId: number;

  @Field()
  label: string;

  @Field() 
  link: string;

  @Field(() => Publish,{ defaultValue: Publish.NO })
  isPublished: keyof typeof Publish;

  @Field() 
  entryDate: Date;

  @Field()
  createdAt: Date;
  
  @Field({ nullable: true })
  updateAt?: Date;
  
 
}
