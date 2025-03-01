import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Publish } from '../../prisma/publish-type.enum';
import { pathFinderMiddleware } from 'middleware/pathFinderMiddleware';

@ObjectType()
export class Notice {
  @Field(() => Int)
  id: number;

  @Field()
  category: string;

  @Field()
  label: string;

  @Field()
  description: string;

  @Field()
  date: Date;

  @Field({ nullable: true })
  attachmentUrl?: string;

  @Field(() => [NoticePhoto], { nullable: true })
  photos?: NoticePhoto[];

  @Field({ nullable: true, middleware: [pathFinderMiddleware] })
  thumbnail?: string;

    @Field(() => Publish,{ defaultValue: Publish.NO })
    isPublished: keyof typeof Publish;

  @Field()
  location: string;

  @Field()
  createdAt: Date;

  @Field({ nullable: true })
  updateAt?: Date;

  @Field()
  pageId: number;

  @Field({ nullable: true })
  sub_category?: string;
}

@ObjectType()
export class NoticePhoto {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  noticeId: number;

  @Field({middleware: [pathFinderMiddleware]})
  url: string;

  @Field()
  createdAt: Date;

  @Field({ nullable: true })
  updateAt?: Date;
}

