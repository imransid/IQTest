import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Publish } from '../../prisma/publish-type.enum';
import { pathFinderMiddleware } from 'middleware/pathFinderMiddleware';

@ObjectType()
export class ImportantDates {
  @Field((type) => Int)
  id: number;

  @Field()
  tag: string;

  @Field()
  category: string;

  @Field()
  term: string;

  @Field()
  date: Date;

  @Field()
  day: string;

  @Field()
  event: string;

  @Field({middleware: [pathFinderMiddleware], nullable: true})
  attachmentUrl: string;

  @Field()
  attachmentName: string;
}
