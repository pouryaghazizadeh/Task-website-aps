import axios from "axios";

const url = "http://localhost:6200/";

export const getData = () => axios.get(url);
