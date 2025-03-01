import { InputType, Int, Field } from '@nestjs/graphql';
import { Upload } from '../../../../../scalars/upload.scalar';
import { pathFinderMiddleware } from 'middleware/pathFinderMiddleware';

@InputType()
export class CreateImportantDatesInput {
  @Field()
  term: string;

  @Field()
  tag: string;

  @Field()
  category: string;

  @Field()
  date: string;

  @Field()
  day: string;

  @Field()
  event: string;

  @Field(() => Upload, {
    nullable: true,
    description: 'Input for the attachment files.',
    middleware: [pathFinderMiddleware],
  })
  attachmentFile: Upload;
}
