import { Box, Container } from "@mui/system";
import theme from "../utility/Theme";
import { Grid } from "@mui/material";
import Info from "./Info";
import Stat from "../data/StatisticData";
const StatisticBanner = () => {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          height: { md: 222, xs: "100%" },
          backgroundColor: theme.palette.secondary.main,
          margin: "100px 0",
          borderRadius: "10px",
        }}
        className="statisticBanner"
      >
        <Container sx={{ zIndex: 2 }}>
          <Grid
            container
            justifyContent={"space-around"}
            alignItems={"center"}
            height={{ md: 222, xs: "100%" }}
          >
            <Grid item>
              <Info
                icon={Stat.item1.icon}
                heading={Stat.item1.heading}
                subHeading={Stat.item1.subHeading}
                color={theme.palette.primary.main}
                headingVariant={"h3"}
              />
            </Grid>
            <Grid item>
              <Info
                icon={Stat.item2.icon}
                heading={Stat.item2.heading}
                subHeading={Stat.item2.subHeading}
                color={theme.palette.primary.main}
                headingVariant={"h3"}
              />
            </Grid>
            <Grid item>
              <Info
                icon={Stat.item3.icon}
                heading={Stat.item3.heading}
                subHeading={Stat.item3.subHeading}
                color={theme.palette.primary.main}
                headingVariant={"h3"}
              />
            </Grid>
            <Grid item>
              <Info
                icon={Stat.item4.icon}
                heading={Stat.item4.heading}
                subHeading={Stat.item4.subHeading}
                color={theme.palette.primary.main}
                headingVariant={"h3"}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
};

export default StatisticBanner;
