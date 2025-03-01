import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateImportantDatesInput } from './create-important-dates.input';

@InputType()
export class UpdateImportantDatesInput extends PartialType(
  CreateImportantDatesInput,
) {
  @Field(() => Int)
  id: number;
}
