/**
 * example-api
 */

import axios from '../axios';
export default {
  // get
  getExample(params) {
    return axios.get("/news/getNewsPage", {
      params: params
    });
  },
  // post
  postExample(params) {
    return axios.post(`/example/exampleAPI`, params);
  },

}
