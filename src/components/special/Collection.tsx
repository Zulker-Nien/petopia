import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import theme from "../utility/Theme";
import "./special.css";

const Collection = () => {
  return (
    <Container>
      <Box
        sx={{
          height: { md: "100%", xs: "100%" },
          margin: "100px 0",
        }}
      >
        <Grid container columnSpacing={3} rowSpacing={4}>
          <Grid item md={8} xs={12}>
            <Box
              sx={{
                height: { md: "40vh", xs: "100%" },
                backgroundColor: "#FCDCB5",
                borderRadius: "10px",
              }}
              className="collection"
            >
              <Grid container height="100%" p={4} display={"flex"} zIndex={2}>
                <Grid
                  item
                  md={12}
                  pb={10}
                  //   sx={{ backgroundColor: "orange" }}
                  display={"flex"}
                  justifyContent={"flex-end"}
                >
                  <Button
                    sx={{ backgroundColor: theme.palette.secondary.main }}
                  >
                    <Typography
                      fontFamily={"Nunito Sans"}
                      fontWeight={800}
                      textTransform={"none"}
                    >
                      Up to 40% off
                    </Typography>
                  </Button>
                </Grid>
                <Grid item md={4}>
                  <Typography
                    fontFamily={"Nunito Sans"}
                    variant="h4"
                    fontWeight={800}
                  >
                    Check Out Our Specials
                  </Typography>
                  <Typography>
                    Massa placerat duis ultricies lacus. Aliquet bibendum enim
                    facilisis gravida neque convallis.
                  </Typography>
                  <Button
                    size="medium"
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.secondary.main,
                      paddingLeft: 0,
                    }}
                    className="serviceButton"
                  >
                    <Typography fontFamily={"Nunito Sans"} fontWeight={800}>
                      Shop Now →
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            rowSpacing={4}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Grid container rowSpacing={4} xs={12}>
              <Grid item md={12} xs={12}>
                <Box
                  sx={{
                    height: { md: "100%", xs: "100%" },
                    background:
                      "linear-gradient(to right, #FFDA47, " +
                      "#FFDA47, #b8dad5 100%)",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container height={"100%"} position={"relative"}>
                    <Grid
                      item
                      md={6}
                      xs={12}
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"space-between"}
                      height={"100%"}
                    >
                      <Typography
                        padding={"20px"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={800}
                      >
                        Luxury Fashion Collection
                      </Typography>
                      <Button
                        size="medium"
                        sx={{
                          fontWeight: 800,
                          color: theme.palette.secondary.main,
                          padding: "20px",
                        }}
                        className="serviceButton"
                      >
                        <Typography fontFamily={"Nunito Sans"} fontWeight={800}>
                          Shop Now →
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid item md={6}>
                      <Box
                        sx={{
                          height: `120% `,
                          margin: "-20% 0 0 0",
                          borderRadius: "10px",
                        }}
                        className="specialSideBox"
                      ></Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item md={12} xs={12}>
                <Box
                  sx={{
                    height: { md: "100%", xs: "100%" },
                    background:
                      "linear-gradient(to right, #FFDA47, " +
                      "#FFDA47, #fae3d9 100%)",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container height={"100%"} position={"relative"}>
                    <Grid
                      item
                      md={6}
                      xs={12}
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"space-between"}
                      height={"100%"}
                    >
                      <Typography
                        padding={"20px"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={800}
                      >
                        Shop What’s Trending
                      </Typography>
                      <Button
                        size="medium"
                        sx={{
                          fontWeight: 800,
                          color: theme.palette.secondary.main,
                          padding: "20px",
                        }}
                        className="serviceButton"
                      >
                        <Typography fontFamily={"Nunito Sans"} fontWeight={800}>
                          Shop Now →
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid item md={6}>
                      <Box
                        sx={{
                          height: `120% `,
                          borderRadius: "10px",
                        }}
                        className="specialSideBox2"
                      ></Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Collection;
