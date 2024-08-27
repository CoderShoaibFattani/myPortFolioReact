import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";
import { Avatar, Grid, Stack } from "@mui/material";
import avator from "../../assets/Avator.JPG";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "black", margin: "0px 0px 10px 0px" }}
    >
      <Container
        maxWidth="xl"
        // sx={{
        //   backgroundColor: "#000",
        // }}
      >
        <Toolbar disableGutters>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid item lg={3} md={3} xl={3} sm={3} xs={3}>
              <Stack>
                <Avatar src={avator} />
              </Stack>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              sm={6}
              xs={6}
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography>
                    <NavLink
                      to="/"
                      style={{
                        textDecoration: "none",
                        display: "block",
                        color: "black",
                        fontSize: "1.2rem",
                        textTransform: "uppercase",
                      }}
                    >
                      Home
                    </NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      to="/about"
                      style={{
                        textDecoration: "none",
                        display: "block",
                        color: "black",
                        fontSize: "1.2rem",
                        textTransform: "uppercase",
                      }}
                    >
                      About
                    </NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      to="/skills"
                      style={{
                        textDecoration: "none",
                        display: "block",
                        color: "black",
                        fontSize: "1.2rem",
                        textTransform: "uppercase",
                      }}
                    >
                      Skills
                    </NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      to="/projects"
                      style={{
                        textDecoration: "none",
                        display: "block",
                        color: "black",
                        fontSize: "1.2rem",
                        textTransform: "uppercase",
                      }}
                    >
                      Projects
                    </NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      to="/contact"
                      style={{
                        textDecoration: "none",
                        display: "block",
                        color: "black",
                        fontSize: "1.2rem",
                        textTransform: "uppercase",
                      }}
                    >
                      Contact
                    </NavLink>
                  </Typography>
                </MenuItem>
              </Menu>
            </Grid>

            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              sm={6}
              xs={6}
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                // width: "45vw",
              }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "block",
                    fontSize: "1.2rem",
                  }}
                  to="/"
                >
                  Home
                </NavLink>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink
                  to="/about"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "block",
                    fontSize: "1.2rem",
                  }}
                >
                  About
                </NavLink>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink
                  to="/skills"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "block",
                    fontSize: "1.2rem",
                  }}
                >
                  Skills
                </NavLink>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink
                  to="/projects"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "block",
                    fontSize: "1.2rem",
                  }}
                >
                  Projects
                </NavLink>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "block",
                    fontSize: "1.2rem",
                  }}
                >
                  Contact
                </NavLink>
              </Button>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              xl={3}
              sm={3}
              xs={3}
              sx={{
                display: "flex",
                gap: "10px",
                justifyContent: "flex-end",
                paddingTop: "10px",
              }}
            >
              <Typography
                component="a"
                variant="h6"
                href="https://github.com/CoderShoaibFattani?tab=repositories"
                target="_blank"
              >
                <GitHubIcon sx={{ color: "white", height: "20px" }} />
              </Typography>
              <Typography
                component="a"
                variant="h6"
                href="https://www.linkedin.com/in/muhammad-shoaib-mushtaq-22779562"
                target="_blank"
              >
                <LinkedInIcon sx={{ color: "white", height: "20px" }} />
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
