import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Info from "./Info";
import Benefit from "../data/BenefitData";
import theme from "../utility/Theme";

const Header = () => {
  return (
    <Container>
      <Grid container display={"flex"} justifyContent={"space-between"}>
        <Grid item md={6} xs={12}>
          <Typography
            pt={{ md: 15, xs: 5 }}
            color={theme.palette.secondary.main}
            fontWeight={800}
          >
            WE CARE FOR YOUR PETS
          </Typography>
          <Typography
            variant="h2"
            pb={{ md: 2, xs: 1 }}
            fontFamily={"Nunito Sans"}
            fontWeight={800}
          >
            We Help You Care for Animals with Nutrition
          </Typography>
          <Typography
            variant="body1"
            fontFamily={"Nunito Sans"}
            fontWeight={400}
            width={{ md: "82%", xs: "100%" }}
            textAlign={{ xs: "justify" }}
            pb={{ md: 5, xs: 2 }}
          >
            All offers are subject to availability. Ut tortor pretium viverra
            suspendisse potenti nullam ac tortor vitae. Consectetur a erat nam
            at. Potenti nullam ac tortor vitae purus faucibus ornare.
          </Typography>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Info
                icon={Benefit.item1.icon}
                heading={Benefit.item1.heading}
                subHeading={Benefit.item1.subHeading}
                boxShadow={1}
                bgColor={theme.palette.primary.main}
                color={"#000"}
                headingVariant={"h5"}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Info
                icon={Benefit.item2.icon}
                heading={Benefit.item2.heading}
                subHeading={Benefit.item2.subHeading}
                boxShadow={1}
                bgColor={theme.palette.primary.main}
                color={"#000"}
                headingVariant={"h5"}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Info
                icon={Benefit.item3.icon}
                heading={Benefit.item3.heading}
                subHeading={Benefit.item3.subHeading}
                boxShadow={1}
                bgColor={theme.palette.primary.main}
                color={"#000"}
                headingVariant={"h5"}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Info
                icon={Benefit.item4.icon}
                heading={Benefit.item4.heading}
                subHeading={Benefit.item4.subHeading}
                boxShadow={1}
                bgColor={theme.palette.primary.main}
                color={"#000"}
                headingVariant={"h5"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} xs={12} minHeight={{ xs: "40vh" }}>
          <div className="headerImage"></div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
