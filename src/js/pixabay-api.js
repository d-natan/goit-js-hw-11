import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "54230749-f3a9f749c9b4d8e3a8cc4a241";

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
}
