import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Card from "./Card";
import { useSelector } from "react-redux";

const Cards = () => {
  const cards = useSelector((state) => state.cards);

  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {cards &&
              cards.map((card) => {
                return (
                  <Grid item columns={3} key={card.id}>
                    <Card card={card} />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Cards;
