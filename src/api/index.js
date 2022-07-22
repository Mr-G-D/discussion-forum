import axios from "axios";

export const axiosGet = async (url) => {
  const { data } = await axios.get(process.env.VUE_APP_API + url);
  return data;
};
