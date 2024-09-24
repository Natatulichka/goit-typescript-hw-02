import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

const getPhotos = async (query, page) => {
  const { data } = await axios.get(
    `search/photos?client_id=Ew190LwgY_No3l5FNGKkFe9qiQOJQLiEc2c-cvwwNCk&query=${query}&page=${page}`
  );
  return data;
};

export default getPhotos;
