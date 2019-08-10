import axios from "axios";
import {YOUTUBE_BASE_URL} from "../../utils/constants";

const HTTP = axios.create({
  baseURL: YOUTUBE_BASE_URL
});

HTTP.interceptors.response.use(
  response => response.data ? response.data : response
);

export default HTTP;
