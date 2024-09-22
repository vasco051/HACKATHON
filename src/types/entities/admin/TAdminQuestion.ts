export type TAdminQuestion = {
  id: number;
  question: string;
  answers: TAdminAnswer[]
}

export type TAdminAnswer = {
  id: number;
  answer: string;
  isCorrect: boolean
}

export type TAdminQuestionCreate = {
  question: string;
  answers: TAdminAnswerCreate[]
}

export type TAdminAnswerCreate = {
  answer: string;
  isCorrect: boolean
}
