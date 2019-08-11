import get from "lodash.get";
import { isValidUrl } from "../../utils/helpers";
import {fetchInstaImages, fetchYouTubeVideos} from "../../utils";

const engines = {
  youtube: {
    fetchData: (...args) => fetchYouTubeVideos(...args)
      .then(response => response.items.map(({ id, snippet }) => ({
        id: id.videoId,
        snippet
      })))
  },
  instagram: {
    fetchData: (...args) => {
      const url = get(args, '[0].q', '');

      if (isValidUrl(url)) {
        return Promise.resolve([
          {
            originalUrl: url,
            previewURL: url,
            id: `direct_image_${Date.now()}`
          }
        ]);
      }

      return fetchInstaImages(...args)
        .then(response => response.hits.map(({ largeImageURL, previewURL, id }) => ({
          originalUrl: largeImageURL,
          previewURL,
          id: id.toString()
        })));
    }
  }
};

export const searchEngines = engines;
export const sources =  Object.keys(engines);
