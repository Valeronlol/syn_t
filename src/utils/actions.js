import HTTP from '../services/http'
import { GOOGL_API_KEY, INSTA_BASE_URL, INSTA_API_KEY } from './constants'

export const fetchYouTubeVideos = ({ q, maxResults = 20, type = 'video' }) => HTTP
  .get('/search', {
    params: {
      part: 'snippet',
      type,
      q,
      maxResults,
      key: GOOGL_API_KEY
    }
  })
  .then(response => response.items.map(({ id, snippet }) => ({
    id: id.videoId,
    snippet
  })));

export const fetchInstaImages = ({ q }) => HTTP
  .get(INSTA_BASE_URL, {
    params: {
      key: INSTA_API_KEY,
      q,
      image_type: 'photo'
    }
  })
  .then(response => response.hits.map(({ largeImageURL, previewURL, id }) => ({
    largeImageURL,
    previewURL,
    id: id.toString()
  })));
