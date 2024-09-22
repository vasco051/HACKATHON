import { makeRequest } from '../makeRequest.ts';

import { TFetchRatingResponse } from '../../types/api/IRatingService.ts';


class RatingService {
  fetchRatings(categoryId: string | number) {
    return makeRequest<TFetchRatingResponse>({
      url: `categories/${categoryId}/top`
    });
  }
}

export default new RatingService();
 