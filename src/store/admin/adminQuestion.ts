import { makeAutoObservable, observable, values } from 'mobx';

import AdminQuestionService from '../../api/rest/admin/AdminQuestionService';
import { TAdminQuestion, TAdminQuestionCreate } from '../../types/entities/admin/TAdminQuestion';
import { IAdminQuestionStore } from '../../types/store/admin/IAdminQuestionStore';


export class AdminQuestionStore implements IAdminQuestionStore {
  _questions = observable.map<number, TAdminQuestion>();
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get questions() {
    return values(this._questions);
  }

  setQuestion(question: TAdminQuestion) {
    this._questions.set(question.id, question);
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  async fetchQuestions(courseId: string | number) {
    this.setIsLoading(true);
    this._questions.clear();

    const response = await AdminQuestionService.fetchQuestions(courseId);

    if ('data' in response) {
      response.data.forEach((question) => {
        this.setQuestion(question);
      });
    }

    this.setIsLoading(false);
  }

  async createQuestion(courseId: string | number, question: TAdminQuestionCreate) {
    this.setIsLoading(true);

    const response = await AdminQuestionService.createQuestion(courseId, question);

    if ('data' in response) {
      this.setQuestion(response.data);
    }

    this.setIsLoading(false);
    return response;
  }

  async deleteQuestion(courseId: string | number, questionId: string | number) {
    const response = await AdminQuestionService.deleteQuestion(
      courseId,
      questionId
    );

    if (response.status === 200) {
      this._questions.delete(+questionId);
    }
  }
}
