import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ProductColumn from "../design/ProductColumn";
import FeatureProducts from "../data/FeatureProducts";
import SaleProducts from "../data/SaleProducts";
import TopProducts from "../data/TopProducts";

const ProductCampaign = () => {
  const featureProductItems = Object.values(FeatureProducts);
  const saleProductItems = Object.values(SaleProducts);
  const topProducts = Object.values(TopProducts);
  return (
    <Container>
      <Grid container md={12} columnGap={1} justifyContent={"center"}>
        <Grid item md={3.8}>
          <Typography
            fontFamily={"Nunito Sans"}
            variant="h5"
            fontWeight={800}
            mb={4}
            textAlign={"center"}
          >
            Featured Products
          </Typography>
          {featureProductItems.map((item, index) => {
            return (
              <div key={index} style={{ borderBottom: "1px solid grey" }}>
                <ProductColumn
                  image={item.image}
                  description={item.description}
                  price={item.price}
                />
              </div>
            );
          })}
        </Grid>
        <Grid item md={3.8}>
          <Typography
            fontFamily={"Nunito Sans"}
            variant="h5"
            fontWeight={800}
            mb={4}
            textAlign={"center"}
          >
            On Sale Products
          </Typography>
          {saleProductItems.map((item, index) => {
            return (
              <div key={index} style={{ borderBottom: "1px solid grey" }}>
                <ProductColumn
                  image={item.image}
                  description={item.description}
                  price={item.price}
                />
              </div>
            );
          })}
        </Grid>
        <Grid item md={3.8}>
          <Typography
            fontFamily={"Nunito Sans"}
            variant="h5"
            fontWeight={800}
            mb={4}
            textAlign={"center"}
          >
            Top Products
          </Typography>
          {topProducts.map((item, index) => {
            return (
              <div key={index} style={{ borderBottom: "1px solid grey" }}>
                <ProductColumn
                  image={item.image}
                  description={item.description}
                  price={item.price}
                />
              </div>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductCampaign;
