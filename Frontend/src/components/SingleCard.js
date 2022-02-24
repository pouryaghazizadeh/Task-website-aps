import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

const SingCard = ({ card }) => {
  const { title, desc, img } = card;
  console.log(card);
  return (
    <>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia component="img" height="140" image={img} alt={`${title}`} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default SingCard;
