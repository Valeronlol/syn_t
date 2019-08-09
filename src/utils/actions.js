import axios from 'axios'
import { YOUTUBE_BASE_URL, GOOGL_API_KEY } from '../constants'

const HTTP = axios.create({
  baseURL: YOUTUBE_BASE_URL
});

HTTP.interceptors.response.use(
  response => response.data ? response.data : response
);

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
