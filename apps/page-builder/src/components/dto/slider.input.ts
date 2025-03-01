import { InputType, Field, PartialType, Int } from '@nestjs/graphql';
import { pathFinderMiddleware } from 'middleware/pathFinderMiddleware';
import { Upload } from 'scalars/upload.scalar';

@InputType()
export class CreateSlider {
  @Field()
  title: string;

  @Field(() => Upload, {
    nullable: true,
    description: 'Input for the attachment Image.',
    middleware: [pathFinderMiddleware],
  })
  photo: Upload;
}

@InputType()
export class UpdateSlider extends PartialType(CreateSlider) {
  @Field(() => Int)
  id: number;
}
