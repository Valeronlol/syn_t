import HTTP from '../services/http'
import { GOOGL_API_KEY } from './constants'

export const fetchYouTubeVideos = ({ q, maxResults = 5, type = 'video' }) => HTTP
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

export const fetchInstaImages = ({ q, maxResults = 5, type = 'video' }) => HTTP
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
