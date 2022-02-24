import { getData } from "../../api/api";
import { dataAdded } from "../reducer";

export const fetchData = () => async (dispatch) => {
  try {
    const { data } = await getData();

    dispatch({ type: dataAdded.type, payload: data });
  } catch (error) {
    console.log(error);
  }
};
