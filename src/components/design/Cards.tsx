import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import "./design.css";
import theme from "../utility/Theme";

const Cards = (props: any) => {
  return (
    <Card
      sx={{
        height: { md: "222px", xs: "222px" },
        backgroundColor: theme.palette.primary.main,
        zIndex: 2,
        cursor: "pointer",
        "&:hover": {
          "& .serviceButton": {
            color: "#FFDA47",
          },
        },
      }}
      className="card"
    >
      <CardContent>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item md={3}>
            {props.icon}
          </Grid>
          <Grid item md={9}>
            <Typography variant="body1" fontWeight={800}>
              {props.heading}
            </Typography>
          </Grid>
          <Grid item md={12}>
            {props.description}
          </Grid>
          <Grid item md={12}>
            {props.price}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          sx={{
            fontWeight: 800,
            color: theme.palette.secondary.main,
          }}
          className="serviceButton"
        >
          Get Service →
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
