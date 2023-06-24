import { Box, Container } from "@mui/system";
import React from "react";
import theme from "../utility/Theme";
import { Button, TextField, Typography } from "@mui/material";
import "./design.css";

const Banner = () => {
  return (
    <Container>
      <div className="newsletterImage"></div>
      <Box
        sx={{
          width: "100%",
          height: { md: 350, xs: "100%" },
          backgroundColor: theme.palette.secondary.main,
          margin: "100px 0",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="newsletterBanner"
      >
        <Typography
          fontFamily={"Nunito Sans"}
          fontWeight={800}
          variant={"h4"}
          width={{ md: "50%", xs: "90%" }}
          textAlign={"center"}
          pt={{ md: 0, xs: "20px" }}
          color={theme.palette.primary.main}
        >
          Get 20% Off Your First Purchase When You Use Petco Credit Card
        </Typography>
        <Typography
          fontFamily={"Nunito Sans"}
          fontWeight={400}
          variant="body2"
          width={{ md: "45%", xs: "90%" }}
          textAlign={"center"}
          color={theme.palette.primary.main}
          py={2}
        >
          Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.
          Ligula ullamcorper malesuada proin libero nunc consequat interdum
          varius sit.
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: { md: "18vw", xs: "100%" },
            // width: "18vw",
            justifyContent: { md: "space-between", xs: "space-around" },

            padding: { md: 0, xs: "20px" },
          }}
        >
          <TextField
            id="outlined-basic"
            label="Type Your Email"
            variant="outlined"
            color="primary"
          />
          <Button
            size="medium"
            sx={{
              fontWeight: 800,
              backgroundColor: "#FFDA47",
              color: theme.palette.secondary.main,
              height: { md: "100%", xs: "6vh" },
              "&:hover": {
                color: "#FFDA47",
                border: "1px solid #ffDA47",
              },
            }}
            className="serviceButton"
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Banner;
