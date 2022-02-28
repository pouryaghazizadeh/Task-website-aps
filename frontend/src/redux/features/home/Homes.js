import React, { useEffect } from "react";
// for redux
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./homesSlice";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

function Homes() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  console.log("it is data ", data);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <Container>
      {data.card.map(({ title, id, desc, img }) => {
        return (
          <Paper key={id} elevation={3} square>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{desc}</p>
          </Paper>
        );
      })}
    </Container>
  );
}
export default Homes;
