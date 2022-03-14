import React from "react";
// import { Grid, Paper, Typography, Box } from "@mui/material";
import { Grid, Container, Typography, Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataHome } from "../../redux/homeSlice";

const Home = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.home);

  //Call API
  useEffect(() => {
    dispatch(getDataHome());
  }, [dispatch]);
  console.log(photos);

  return (
    <div>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {photos.map((photo) => {
              return (
                <Grid item columns={4} key={photo.id}>
                  <img
                    key={photo.id}
                    src={photo.img}
                    alt={photo.title}
                    // className="img"
                  />
                  
                  <Box paddingX={1}>
                    <Typography variant="subtitle1" component="h2">
                      {photo.title}
                    </Typography>;

                    <Box sx={{ alignItems: "center" }}>
                      <Typography variant="body2" component="p">
                        {photo.desc}
                      </Typography>
                    </Box>

                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </div>
  );

  // return (
  //   <Grid item xs={3}>
  //     <Paper elevation={3}>
  //       {photos.map((photo) => (
  //         <img
  //           key={photo.id}
  //           src={photo.img}
  //           alt={photo.title}
  //           className="img"
  //         />
  //       ))}

  //       <Box paddingX={1}>
  //         {photos.map((title) => {
  //           <Typography variant="subtitle1" component="h2">
  //             {title.title}
  //           </Typography>;
  //         })}
  //         <Box sx={{ alignItems: "center" }}>
  //           {photos.map((desc) => {
  //             <Typography variant="body2" component="p">
  //               {desc.desc}
  //             </Typography>;
  //           })}
  //         </Box>
  //       </Box>
  //     </Paper>
  //   </Grid>
  // );
};

export default Home;
