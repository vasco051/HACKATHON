import { makeRequest } from '../../makeRequest';

import {
  TFetchAdminQuestionCreateResponse,
  TFetchAdminQuestionsResponse
} from '../../../types/api/admin/IAdminQuestionService';
import { TAdminQuestionCreate } from '../../../types/entities/admin/TAdminQuestion';


class AdminCourseService {
  fetchQuestions(courseId: string | number) {
    return makeRequest<TFetchAdminQuestionsResponse>({
      url: `courses/${courseId}/questions`
    });
  }

  createQuestion(courseId: string | number, question: TAdminQuestionCreate) {
    return makeRequest<TFetchAdminQuestionCreateResponse>({
      url: `courses/${courseId}/questions`,
      method: 'post',
      data: question
    });
  }

  deleteQuestion(categoryId: string | number, courseId: string | number) {
    return makeRequest<never>({
      url: `categories/${categoryId}/courses/${courseId}`,
      method: 'delete'
    });
  }

}

export default new AdminCourseService();
