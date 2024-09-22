export type TQuestion = {
  id: number;
  question: string;
  answers: TAnswer[]
}

export type TAnswer = {
  id: number;
  answer: string;
  isCorrect: boolean
}

export type TAnswerCreate = {
  answer: string;
  isCorrect: boolean
}
