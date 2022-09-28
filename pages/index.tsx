import * as React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { UnderConstruction } from "../components/UnderConstruction";
import Copyright from "../src/Copyright";
import Link from "../src/Link";
import ProTip from "../src/ProTip";

import type { NextPage } from 'next';
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

const Home: NextPage = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Denny Dharmawan
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Container maxWidth="lg" disableGutters>
      {/* <UnderConstruction></UnderConstruction> */}

      <Box
        id="PageContainer"
        sx={{ display: 'grid', gridTemplateRows: 'auto 1fr auto' }}
      >
        <Box id="HeaderContainer">
          <AppBar component="nav" position="sticky">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                Denny Dharmawan
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: drawerWidth
                }
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          <Box id="landingText" sx={{ display: 'grid', placeItems: 'center' }}>
            <Box sx={{ textAlign: 'center' }}>
              <p>Hi, I'm Denny Dharmawan</p>
              <p>I create beautiful websites</p>
            </Box>
            <Button variant="contained">Let's talk</Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
