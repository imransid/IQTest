import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Question {
  @Field(() => Int)
  id: number;

  @Field()
  questionText: string;

  @Field(() => [Answer])
  answers: Answer[];
}

@ObjectType()
export class Answer {
  @Field(() => Int)
  id: number;

  @Field()
  answerText: string;

  @Field(() => Int)
  questionId: number;
}
