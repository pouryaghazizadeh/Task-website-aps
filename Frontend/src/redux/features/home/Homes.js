import React, { useEffect } from "react";
// for redux
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./homesSlice";
import Container from "@mui/material/Container";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardContent, Typography } from "@mui/material";
function Homes() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  console.log(data);
  console.log("it is data ", data);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <Container>
      <Typography
        marginTop={20}
        variant="h1"
        component="h1"
        sx={{ background: "pink", textAlign: "center" }}
      >
        Home page
      </Typography>
      <Box
        elevation={4}
        square
        sx={{
          display: "flex",
          padding: 5,
          paddingLeft: 25,
          textAlign: "center",
          flexWrap: "wrap",
        }}
      >
        {data.card.map(({ title, id, desc, img }) => {
          return (
            <Card
              sx={{
                maxWidth: 345,
                justifyContent: "space-between",
                margin: 1,
              }}
              key={id}
            >
              <CardMedia component="img" height="200" image={img} alt={title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography variant="body2">{desc}</Typography>
              </CardContent>
            </Card>
          );
        })}{" "}
      </Box>
    </Container>
  );
}
export default Homes;
