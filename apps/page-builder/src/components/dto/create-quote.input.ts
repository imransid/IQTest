import { InputType, Field, PartialType, Int } from '@nestjs/graphql';
import { pathFinderMiddleware } from 'middleware/pathFinderMiddleware';
import { Upload } from 'scalars/upload.scalar';

@InputType()
export class CreateQuote {
  @Field()
  quote: string;

  @Field()
  designation: string;

  @Field()
  name: string;

  @Field(() => Upload, {
    nullable: true,
    description: 'Input for the attachment Image.',
    middleware: [pathFinderMiddleware],
  })
  attachmentImage: Upload;
}

@InputType()
export class CreateDesignation {
  @Field()
  designation: string;
}
@InputType()
export class UpdateDesignation extends PartialType(CreateDesignation) {
  @Field(() => Int)
  id: number;
}
@InputType()
export class UpdateQuote extends PartialType(CreateQuote) {
  @Field(() => Int)
  id: number;
}
