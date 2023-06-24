import { Grid, Typography } from "@mui/material";

const Info = (props: any) => {
  return (
    <Grid
      container
      md={11}
      xs={12}
      my={{ md: 0.5, xs: 1 }}
      justifyContent={"space-between"}
    >
      <Grid
        item
        md={3}
        xs={3}
        width={{ md: "60px", xs: "60px" }}
        height={{ md: "60px", xs: "60px" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={{ md: 2, xs: 1 }}
        boxShadow={props.boxShadow}
        sx={{ backgroundColor: props.bgColor }}
      >
        {props.icon}
      </Grid>
      <Grid
        item
        md={8.7}
        xs={8.5}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Grid item>
          <Typography
            fontFamily={"Nunito Sans"}
            fontWeight={800}
            variant={props.headingVariant}
            color={props.color}
          >
            {props.heading}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            fontSize={14}
            fontFamily={"Nunito Sans"}
            fontWeight={700}
            color={props.color}
          >
            {props.subHeading}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Info;
