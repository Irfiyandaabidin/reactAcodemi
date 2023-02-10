import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "a636c9dac0msh4ed0c384e527e17p1bc41bjsncf1e22f9b5c1",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchApi = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, options);

  return response.data;
};
