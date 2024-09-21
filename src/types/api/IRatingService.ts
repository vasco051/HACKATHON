import { TRating } from '../entities/TRating.ts';

export type TFetchRatingResponse = {
  you: TRating;
  top: TRating[];
}