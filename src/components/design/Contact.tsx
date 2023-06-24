import { Box, Container } from "@mui/system";
import React from "react";
import theme from "../utility/Theme";
import { Grid, Paper, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";

const Contact = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { md: 522, xs: "100%" },
        backgroundColor: "#FBF9FF",
        margin: "100px 0",
        borderRadius: "10px",
      }}
    >
      <Container sx={{ padding: "20px" }}>
        <Typography
          textAlign={"center"}
          fontFamily={"Nunito Sans"}
          color={theme.palette.secondary.main}
          mt={2}
        >
          OUR CONTACTS
        </Typography>

        <Typography
          textAlign={"center"}
          fontFamily={"Nunito Sans"}
          variant="h3"
          fontWeight={800}
          mt={2}
        >
          Contacts
        </Typography>
        <Typography
          fontFamily={"Nunito Sans"}
          textAlign={"center"}
          color={theme.palette.secondary.main}
        >
          Massa enim nec dui nunc mattis enim ut tellus
        </Typography>
        <Grid container position={"relative"}>
          <Grid item md={3} xs={12} display={"flex"} justifyContent={"center"}>
            <div
              style={{
                height: "80px",
                marginTop: "40px",
                width: "80px",
                borderRadius: "50%",
                backgroundColor: theme.palette.secondary.main,
                color: "#fff",
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CallIcon fontSize="large" fontWeight={800} />
            </div>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  mt: 10,
                  width: 250,
                  height: 200,
                },
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">Phone</Typography>
                <Typography variant="body1">(913) 756-3126</Typography>
                <Typography variant="body1">(921) 557-1203</Typography>
              </Paper>
            </Box>
          </Grid>
          <Grid item md={3} xs={12} display={"flex"} justifyContent={"center"}>
            <div
              style={{
                height: "80px",
                marginTop: "40px",
                width: "80px",
                borderRadius: "50%",
                backgroundColor: theme.palette.secondary.main,
                position: "absolute",
                display: "flex",
                color: "#fff",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EmailIcon fontSize="large" fontWeight={800} />
            </div>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  mt: 10,
                  width: 250,
                  height: 200,
                },
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">Email</Typography>
                <Typography variant="body1">petopia@example.com</Typography>
                <Typography variant="body1">petopia@email.com</Typography>
              </Paper>
            </Box>
          </Grid>
          <Grid item md={3} xs={12} display={"flex"} justifyContent={"center"}>
            <div
              style={{
                height: "80px",
                marginTop: "40px",
                width: "80px",
                borderRadius: "50%",
                backgroundColor: theme.palette.secondary.main,
                color: "#fff",
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LocationOnIcon fontSize="large" fontWeight={800} />
            </div>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  mt: 10,
                  width: 250,
                  height: 200,
                },
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">Address</Typography>
                <Typography variant="body1" textAlign={"center"}>
                  17 Parkman Place, 2122 United States
                </Typography>
              </Paper>
            </Box>
          </Grid>
          <Grid item md={3} xs={12} display={"flex"} justifyContent={"center"}>
            <div
              style={{
                height: "80px",
                marginTop: "40px",
                width: "80px",
                borderRadius: "50%",
                backgroundColor: theme.palette.secondary.main,
                color: "#fff",
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ScheduleIcon
                className="contactIcon"
                fontSize="large"
                fontWeight={800}
              />
            </div>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  mt: 10,
                  width: 250,
                  height: 200,
                },
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">Open Hours</Typography>
                <Typography variant="body1">Mon - Fri: 7am - 6pm</Typography>
                <Typography variant="body1">Saturday: 9am - 4pm</Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
