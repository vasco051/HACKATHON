import { TRating } from '../entities/TRating.ts';

export interface IRatingStore {
  isLoading: boolean;
  userRating: TRating;
  ratings: readonly TRating[];

  fetchRatings: (categoryId: string | number) => void;
}
