import * as React from "react";

import DownloadIcon from "@mui/icons-material/Download";
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
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Link from "../components/Link";
import { UnderConstruction } from "../components/UnderConstruction";
import Copyright from "../src/Copyright";
import ProTip from "../src/ProTip";

import type { NextPage } from 'next';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];
const logoText = 'Denny';

const Home: NextPage = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const downloadResumeFile = () => {
  //   const link = document.createElement('a');
  //   link.download = `dennydharmawan.pdf`;
  //   link.href = './dennydharmawan.pdf';
  //   link.click();
  // };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Denny
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
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
    <Container
      maxWidth="lg"
      disableGutters
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
      }}
    >
      {/* <UnderConstruction></UnderConstruction> */}

      <Box
        id="PageContainer"
        sx={{ display: 'grid', gridTemplateRows: 'auto 1fr auto' }}
      >
        <Box id="HeaderContainer">
          <AppBar
            elevation={0}
            component="nav"
            position="sticky"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText
            }}
          >
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
                {logoText}
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Link // variant=
                    key={item}
                    underline="none"
                    href="/"
                  >
                    <Button variant="text" sx={{ color: '#fff' }}>
                      {item}
                    </Button>
                  </Link>
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

          <Box
            id="landingInformation"
            sx={{ padding: '1.5rem', maxWidth: '65%' }}
          >
            <Box sx={{ mb: '2rem' }}>
              <Typography
                variant="h3"
                fontWeight={900}
                fontSize="clamp(2rem, 5vw, 4rem)"
              >
                Hi!, I Am
              </Typography>
              <Typography
                variant="h3"
                color="primary"
                fontWeight={900}
                fontSize="clamp(2rem, 4.8vw, 4rem)"
                sx={{ mb: '1.5rem' }}
              >
                Denny Dharmawan
              </Typography>
              <Typography variant="body1" fontWeight={500}>
                Fullstack Developer who focuses on writing clean, elegant, and
                efficient code. I enjoy learning about new technologies and have
                passion for web development.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <Button variant="contained" sx={{ textTransform: 'none' }}>
                Let's Talk
              </Button>
              <Button
                variant="outlined"
                startIcon={<DownloadIcon />}
                href="dennydharmawan.pdf"
                target="_blank"
                sx={{ textTransform: 'none' }}
              >
                Get Resume
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
