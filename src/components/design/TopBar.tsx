import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

import FacebookIcon from "@mui/icons-material/Facebook";

import "./design.css";
import {
  Email,
  Instagram,
  Phone,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import Container from "@mui/material/Container";
import theme from "../utility/Theme";
import { Link } from "@mui/material";

const TopBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        minHeight: { xs: "102px", md: "42px" },
        maxHeight: { md: "42px" },
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
        display: { xs: "flex" },
        justifyContent: { xs: "center" },
      }}
    >
      <Toolbar>
        <Container>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
            height={{ xs: "96px" }}
            className="icons"
            xs={12}
            wrap="wrap"
          >
            <Grid
              xs={12}
              md={1.5}
              justifyContent={"space-around"}
              display={"flex"}
            >
              <FacebookIcon />
              <Instagram />
              <Twitter />
              <WhatsApp />
            </Grid>
            <Grid
              xs={12}
              md={4}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Phone />
              <Link href={`tel:0000123456789`}>0000-123456789</Link>
              <Email />
              <Link href={`mailto:info@example.com`}>info@example.com</Link>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
