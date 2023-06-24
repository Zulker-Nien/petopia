import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Cards from "../design/Cards";
import theme from "../utility/Theme";
import ServiceData from "../data/ServiceData";

const ServiceHome = () => {
  return (
    <Container>
      <Typography textAlign={"center"} color={theme.palette.secondary.main}>
        OUR SERVICES
      </Typography>
      <Typography
        textAlign={"center"}
        fontFamily={"Nunito Sans"}
        variant="h3"
        fontWeight={800}
        mb={4}
      >
        All Pet Care Services
      </Typography>
      <Grid
        container
        md={12}
        rowGap={4}
        columnGap={1}
        justifyContent={"space-between"}
      >
        <Grid item md={3.8} xs={12}>
          <Cards
            icon={ServiceData.item1.icon}
            heading={ServiceData.item1.heading}
            description={ServiceData.item1.description}
            price={ServiceData.item1.price}
          />
        </Grid>
        <Grid item md={3.8} xs={12}>
          <Cards
            icon={ServiceData.item2.icon}
            heading={ServiceData.item2.heading}
            description={ServiceData.item2.description}
            price={ServiceData.item2.price}
          />
        </Grid>
        <Grid item md={3.8} xs={12}>
          <Cards
            icon={ServiceData.item3.icon}
            heading={ServiceData.item3.heading}
            description={ServiceData.item3.description}
            price={ServiceData.item3.price}
          />
        </Grid>
        <Grid item md={3.8} xs={12}>
          <Cards
            icon={ServiceData.item4.icon}
            heading={ServiceData.item4.heading}
            description={ServiceData.item4.description}
            price={ServiceData.item4.price}
          />
        </Grid>
        <Grid item md={3.8} xs={12}>
          <Cards
            icon={ServiceData.item5.icon}
            heading={ServiceData.item5.heading}
            description={ServiceData.item5.description}
            price={ServiceData.item5.price}
          />
        </Grid>
        <Grid item md={3.8} xs={12}>
          <Cards
            icon={ServiceData.item6.icon}
            heading={ServiceData.item6.heading}
            description={ServiceData.item6.description}
            price={ServiceData.item6.price}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServiceHome;
