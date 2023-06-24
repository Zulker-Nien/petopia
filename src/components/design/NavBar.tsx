import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
// import Button from "./Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";

import "./design.css";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToggle(event.currentTarget);
  };

  const handleMenuClose = () => {
    setToggle(null);
  };

  return (
    <Container>
      <AppBar
        position="static"
        sx={{
          boxShadow: "0",
          backgroundColor: "transparent",
        }}
      >
        <Toolbar style={{ padding: 0 }}>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            md={12}
            py={2}
            className="navContainer"
            wrap="wrap"
          >
            <Grid
              item
              xs={6}
              md={2}
              display="flex"
              alignItems="center"
              justifyContent={"space-between"}
            >
              <img
                src={process.env.PUBLIC_URL + "/Assets/Logo.svg"}
                className="logo"
                alt="logo"
              />
              <Typography fontSize={"24px"} variant="h1" fontWeight={800}>
                Petopia
              </Typography>
            </Grid>
            <Hidden mdUp>
              <Grid item xs={6} md={2} container justifyContent="flex-end">
                <IconButton color="inherit" onClick={handleMenuOpen}>
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Menu
                anchorEl={toggle}
                open={Boolean(toggle)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>
                  <Typography
                    fontSize={"16px"}
                    variant="body1"
                    fontWeight={800}
                  >
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Typography
                    fontSize={"16px"}
                    variant="body1"
                    fontWeight={800}
                  >
                    Services
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Typography
                    fontSize={"16px"}
                    variant="body1"
                    fontWeight={800}
                  >
                    Shop
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Typography
                    fontSize={"16px"}
                    variant="body1"
                    fontWeight={800}
                  >
                    Blog
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Typography
                    fontSize={"16px"}
                    variant="body1"
                    fontWeight={800}
                  >
                    Pages
                  </Typography>
                </MenuItem>
              </Menu>
            </Hidden>
            <Hidden mdDown>
              <Grid item xs={6} md={6} container justifyContent="space-around">
                <Button color="inherit">
                  <Typography
                    variant="body1"
                    fontWeight={700}
                    textTransform={"none"}
                  >
                    Home
                  </Typography>
                </Button>

                <Button color="inherit">
                  <Typography
                    variant="body1"
                    fontWeight={700}
                    textTransform={"none"}
                  >
                    Services
                  </Typography>
                </Button>
                <Button color="inherit">
                  <Typography
                    variant="body1"
                    fontWeight={700}
                    textTransform={"none"}
                  >
                    Shop
                  </Typography>
                </Button>
                <Button color="inherit">
                  <Typography
                    variant="body1"
                    fontWeight={700}
                    textTransform={"none"}
                  >
                    Blog
                  </Typography>
                </Button>
                <Button color="inherit">
                  <Typography
                    variant="body1"
                    fontWeight={700}
                    textTransform={"none"}
                  >
                    Pages
                  </Typography>
                </Button>
              </Grid>
            </Hidden>
            <Grid
              item
              xs={6}
              md={2}
              container
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Hidden mdDown>
                <Button color="inherit">
                  <Typography
                    variant="body1"
                    fontWeight={800}
                    textTransform={"none"}
                  >
                    Cart
                  </Typography>
                </Button>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;
