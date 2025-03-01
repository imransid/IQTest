import { InputType, Field } from '@nestjs/graphql';
import { Upload } from '../../../../../scalars/upload.scalar';
import { pathFinderMiddleware, pathFinderMiddlewareForArrayOfString } from 'middleware/pathFinderMiddleware';
import { Publish } from '../../prisma/publish-type.enum';

@InputType()
export class CreateLatestNoticeInput {
  @Field()
  category: string;

  @Field()
  label: string;

  @Field()
  description: string;

  @Field()
  date: Date;

  @Field(() => Upload, {
    nullable: true,
    description: 'Input for the attachment files.',
    middleware: [pathFinderMiddleware]
  })
  attachmentUrl?: Upload;

  @Field(() => [Upload], {
    nullable: true,
    description: 'Input for the attachment files.',
    middleware: [pathFinderMiddlewareForArrayOfString]
  })
  photos?: Upload[];


  @Field(() => Upload, {
    nullable: true,
    description: 'Input for the Thumbnail files.',
    middleware: [pathFinderMiddleware]
  })
  thumbnail?: Upload;

  @Field()
  pageId: number;

  @Field({ nullable: true })
  sub_category?: string;

  @Field()
  location: string;

  @Field(() => Publish, { defaultValue: Publish.NO })
  isPublished: keyof typeof Publish;
}

