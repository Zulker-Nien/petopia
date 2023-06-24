import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import FooterLogo from "../Footer.svg";
import CallIcon from "@mui/icons-material/Call";
import theme from "../utility/Theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { orange } from "@mui/material/colors";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#FFFEFD", paddingTop: "20px" }}>
      <Container>
        <Grid container>
          <Grid
            item
            md={12}
            sx={{ borderBottom: "0.3px solid gray" }}
            // mb={"100px"}
            height={{ xs: "100%" }}
          >
            <Grid
              container
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              rowSpacing={4}
            >
              <Grid item md={3} xs={12}>
                <Container>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img
                      alt="footerLogo"
                      src={FooterLogo}
                      style={{ paddingBottom: "2px" }}
                    />
                  </Box>
                  <Typography
                    py={2}
                    textAlign={"justify"}
                    fontFamily={"Nunito Sans"}
                  >
                    Tristique nulla aliquet enim tortor at auctor urna nunc.
                    Massa enim nec dui nunc mattis enim ut tellus. Sed ut
                    perspiciatis unde ...
                  </Typography>
                  <Grid
                    container
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid item md={3}>
                      <CallIcon
                        fontSize="large"
                        htmlColor={theme.palette.secondary.main}
                      />
                    </Grid>
                    <Grid item md={8}>
                      <Typography fontWeight={900}>(913) 756-3126</Typography>
                      <Typography>Got Questions? Call us 24/7</Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid item md={3} xs={12} height={{ md: "25vh" }}>
                <Container>
                  <Typography
                    width={{ md: "100%" }}
                    variant="h5"
                    fontFamily={"Nunito Sans"}
                    fontWeight={800}
                    textAlign={"center"}
                    pb={"20px"}
                    color={theme.palette.secondary.main}
                  >
                    Working Hours
                  </Typography>
                  <Grid container>
                    <Grid
                      xs={12}
                      md={12}
                      display="flex"
                      justifyContent={"space-around"}
                      pb={2}
                    >
                      <Typography>Mon - Fri:</Typography>
                      <Typography fontWeight={800}>7am – 6pm</Typography>
                    </Grid>
                    <Grid
                      xs={12}
                      md={12}
                      display="flex"
                      justifyContent={"space-around"}
                      pb={2}
                    >
                      <Typography>Saturday:</Typography>
                      <Typography fontWeight={800}>9am – 4pm</Typography>
                    </Grid>
                    <Grid
                      xs={12}
                      md={12}
                      display="flex"
                      justifyContent={"space-around"}
                      pb={2}
                    >
                      <Typography>Sunday:</Typography>
                      <Typography fontWeight={800}>Closed</Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid item md={3} height={"25vh"}>
                <Typography
                  variant="h5"
                  fontFamily={"Nunito Sans"}
                  fontWeight={800}
                  textAlign={"center"}
                  color={theme.palette.secondary.main}
                  pb={"20px"}
                >
                  Useful Links
                </Typography>
                <Grid container>
                  <Grid
                    xs={12}
                    md={12}
                    display="flex"
                    justifyContent={"space-around"}
                    pb={2}
                  >
                    <Typography fontWeight={800}>Home</Typography>
                    <Typography fontWeight={800}>FAQ</Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    md={12}
                    display="flex"
                    justifyContent={"space-around"}
                    pb={2}
                  >
                    <Typography fontWeight={800}>About</Typography>
                    <Typography fontWeight={800}>Gallery</Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    md={12}
                    display="flex"
                    justifyContent={"space-around"}
                    pb={2}
                  >
                    <Typography fontWeight={800}>Services</Typography>
                    <Typography fontWeight={800}>Delivery</Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    md={12}
                    display="flex"
                    justifyContent={"space-around"}
                    pb={2}
                  >
                    <Typography fontWeight={800}>Shop</Typography>
                    <Typography fontWeight={800}>Sales</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={3} height={"25vh"}>
                <Container>
                  <Typography
                    variant="h5"
                    textAlign={"center"}
                    fontFamily={"Nunito Sans"}
                    fontWeight={800}
                    pb={"20px"}
                    color={theme.palette.secondary.main}
                  >
                    Newsletter
                  </Typography>
                  <Grid item>
                    <Typography>
                      Be first in the queue! Get our latest news straight to
                      your inbox.
                    </Typography>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      py={2}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
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
                          padding: "15px",
                        }}
                        className="serviceButton"
                      >
                        <ArrowForwardIcon />
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <FacebookIcon htmlColor={theme.palette.secondary.main} />
                      <Instagram htmlColor={theme.palette.secondary.main} />
                      <Twitter htmlColor={theme.palette.secondary.main} />
                      <WhatsApp htmlColor={theme.palette.secondary.main} />
                    </Box>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            md={12}
            width={"100%"}
            // textAlign={"center"}
            height={"100px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography>NOOT © All rights reserved Copyrights 2023</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
