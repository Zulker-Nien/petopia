import { Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import "./design.css";

const ProductColumn = (props: any) => {
  return (
    <div>
      <Grid
        container
        md={12}
        xs={12}
        columnSpacing={2}
        minHeight={"12vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* img */}
        <Grid item md={4} xs={12}>
          <img className="image" alt="" src={props.image} />
        </Grid>

        {/*  description*/}
        <Grid item md={8}>
          <Grid container>
            <Grid item md={12} xs={12}>
              <Typography>{props.description}</Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <Typography sx={{ color: "#FFDA47" }}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <Typography>{props.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductColumn;
