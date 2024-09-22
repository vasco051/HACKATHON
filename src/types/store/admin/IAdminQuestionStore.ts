import { APIResponse } from '../../API';
import { TFetchAdminQuestionCreateResponse } from '../../api/admin/IAdminQuestionService';
import { TAdminQuestion, TAdminQuestionCreate } from '../../entities/admin/TAdminQuestion';


export interface IAdminQuestionStore {
  isLoading: boolean;
  questions: readonly TAdminQuestion[];

  setQuestion: (question: TAdminQuestion) => void;

  fetchQuestions: (courseId: number | string) => void;
  createQuestion: (courseId: string | number, question: TAdminQuestionCreate) => APIResponse<TFetchAdminQuestionCreateResponse>;
  deleteQuestion: (categoryId: string | number, courseId: string | number) => void;
}