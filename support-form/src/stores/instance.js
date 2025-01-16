import axios from "axios";

const baseURL = "https://support.cotankw.com/api"; //Prod
//const baseURL = "http://localhost:8000/support"; //Dev

const instance = axios.create({
  baseURL: baseURL,
});

export { instance, baseURL };
