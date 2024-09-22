import { IRatingStore } from '../types/store/IRatingStore.ts';
import { makeAutoObservable, observable, values } from 'mobx';
import { TRating } from '../types/entities/TRating.ts';
import RatingService from '../api/rest/RatingService.ts';

export class RatingStore implements IRatingStore {
  _ratings = observable.map<string, TRating>();
  _userRating: TRating = {} as TRating;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get ratings() {
    return values(this._ratings);
  }

  get userRating() {
    return this._userRating;
  }

  setRating(rating: TRating) {
    this._ratings.set(rating.id, rating);
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setUserRating(userRating: TRating) {
    this._userRating = userRating;
  }

  async fetchRatings(categoryId: string | number) {
    this.setIsLoading(true);
    this._ratings.clear();

    const response = await RatingService.fetchRatings(categoryId);

    if ('data' in response) {
      this.setUserRating(response.data.you);
      response.data.top.forEach((rating) => {
        this.setRating(rating);
      });
    }

    this.setIsLoading(false);
  }
}
