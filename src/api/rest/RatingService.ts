import { makeRequest } from '../makeRequest.ts';

import { TFetchRatingResponse } from '../../types/api/IRatingService.ts';


class RatingService {
  fetchRatings() {
    return makeRequest<TFetchRatingResponse>({
      url: `categories/1/top`
    });
  }
}

export default new RatingService();
