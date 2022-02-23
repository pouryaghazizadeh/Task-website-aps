import React, { useEffect } from "react";
// for redux
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./homesSlice";

function Homes() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  console.log("it is data ", data);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <div className="card-main">
      {data.card.map(({ title, id, desc, img }) => {
        return (
          <div className="card-home" key={id}>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Homes;
