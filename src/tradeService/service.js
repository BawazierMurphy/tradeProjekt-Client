import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const url = `${API_BASE_URL}/trade`;

const headers = {
  "Content-Type": "application/json",
  Authorization: process.env.REACT_APP_API_KEY,
};

export const createTrade = async (newData) => {
  try {
    const response = await axios.post(url, newData, { headers });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTrade = async () => {
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.log("error here: ", error);
  }
};
