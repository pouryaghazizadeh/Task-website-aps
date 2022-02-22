import React, { useEffect } from "react";
// for redux
import { useDispatch } from "react-redux";
import { getData } from "./homesSlice";
function Homes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <div>
      <h2>Homes</h2>
    </div>
  );
}
export default Homes;
