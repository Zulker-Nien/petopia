import { Container } from "@mui/system";
import React from "react";
import BlogCard from "../design/BlogCard";
import { Grid, Typography } from "@mui/material";
import theme from "../utility/Theme";
import BlogList from "../data/BlogList";

const Blog = () => {
  const blogList = Object.values(BlogList);
  return (
    <Container>
      <Typography textAlign={"center"} color={theme.palette.secondary.main}>
        OUR BLOG
      </Typography>
      <Typography
        textAlign={"center"}
        fontFamily={"Nunito Sans"}
        variant="h3"
        fontWeight={800}
        mb={4}
      >
        Latest Post
      </Typography>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-around"}
        rowSpacing={3}
      >
        {blogList.map((item, index) => {
          return (
            <Grid item md={3.8} key={index}>
              <BlogCard
                image={item.image}
                heading={item.heading}
                description={item.description}
                author={item.author}
                date={item.date}
                type={item.type}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Blog;
