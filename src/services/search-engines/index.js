import {fetchInstaImages, fetchYouTubeVideos} from "../../utils";

const engines = {
  youtube: {
    fetchData: (...args) => fetchYouTubeVideos(...args)
  },
  instagram: {
    fetchData: (...args) => fetchInstaImages(...args)
  }
};

export const searchEngines = engines;
export const sources =  Object.keys(engines);
