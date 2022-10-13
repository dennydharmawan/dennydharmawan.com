import { differenceInYears } from "date-fns";
import * as React from "react";

import DownloadIcon from "@mui/icons-material/Download";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MuiLink from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import GithubIcon from "../components/icons/GithubIcon";
import LinkedInIcon from "../components/icons/LinkedInIcon";
import Link from "../components/Link";
import { UnderConstruction } from "../components/UnderConstruction";
import Copyright from "../src/Copyright";
import ProTip from "../src/ProTip";

import type { NextPage } from 'next';

// TODO: Get better tagline -> convert Logo into tagline "built websites with denny-"

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
      maxWidth="xl"
      disableGutters
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        display: 'flex',
        flexFlow: 'column',
        minHeight: '100vh'
      }}
    >
      <Box
        className="header"
        sx={{
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto'
        }}
      >
        <Box id="header__container">
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
                  <Link key={item} underline="none" href="/">
                    <Button
                      variant="text"
                      sx={{
                        color: grey[200]
                      }}
                    >
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
            className="header__hero-left"
            sx={{
              display: 'grid',
              padding: '2.5rem',
              gridTemplateColumns: '4fr 2fr 48px'
            }}
          >
            <Box>
              <Typography
                component="h3"
                variant="caption"
                fontWeight={900}
                lineHeight={0.8}
              >
                Hi!, I Am
              </Typography>
              <Typography
                component="h3"
                variant="caption"
                color="primary"
                fontWeight={900}
                lineHeight={1.2}
                sx={{ mb: '0.5rem' }}
              >
                Denny Dharmawan
              </Typography>
              <Typography
                variant="body1"
                fontWeight={500}
                sx={{
                  maxWidth: '50ch',
                  mb: '1.8rem'
                }}
              >
                Fullstack developer with over{' '}
                {differenceInYears(new Date(), new Date(2019, 12, 1))} years
                experience developing web application. I enjoy learning about
                new technologies and have passion for web development.
              </Typography>
              <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Button
                  href="mailto:hey@dennydharmawan.com"
                  variant="contained"
                  sx={{ textTransform: 'none' }}
                  endIcon={<MailIcon />}
                >
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
            <Box className="header__hero-right"></Box>
            <Box
              className="header__socials"
              sx={{ color: theme.palette.primary.main }}
            >
              <Box
                sx={{
                  transformOrigin: 'top left',
                  transform: 'translateX(100%) rotate(90deg) translateY(50%)',
                  width: '100%',
                  whiteSpace: 'nowrap',
                  fontWeight: '500'
                }}
              >
                Follow me on
              </Box>
              <Box sx={{ marginTop: '6rem' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box
                    sx={{
                      borderLeft: `0.1rem solid ${theme.palette.primary.main}`,
                      height: '40px',
                      borderRadius: '4px',
                      transform: 'translateX(-50%)'
                    }}
                  ></Box>
                </Box>
                <IconButton
                  size="large"
                  href="https://github.com/dennydharmawan/"
                  target="_blank"
                  sx={{ paddingTop: '1.5rem', color: '#fff' }}
                >
                  <GithubIcon />
                </IconButton>
                <IconButton
                  size="large"
                  href="https://www.linkedin.com/in/denny-dharmawan-0592a375/"
                  target="_blank"
                  sx={{ color: '#fff' }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="main"
        sx={{
          flex: '1 1 auto',
          backgroundColor: '#434548'
        }}
      ></Box>
      <Box
        className="footer__socials"
        sx={{ backgroundColor: '#3A3B3F', paddingBlock: '3rem' }}
      >
        <Box
          className="footer__socials"
          sx={{
            display: 'grid',
            placeItems: 'center'
          }}
        >
          <Typography variant="h3" fontWeight="700">
            Contact Me
          </Typography>
          <Typography variant="body1">hey@dennydharmawan.com</Typography>
          <Box sx={{ display: 'flex', paddingTop: '1rem' }}>
            <IconButton
              size="large"
              href="https://github.com/dennydharmawan/"
              target="_blank"
              sx={{ color: '#fff' }}
            >
              <GithubIcon />
            </IconButton>
            <IconButton
              size="large"
              href="https://www.linkedin.com/in/denny-dharmawan-0592a375/"
              target="_blank"
              sx={{ color: '#fff' }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box id="footer__copyright" sx={{ paddingBlock: '1rem' }}>
        <Typography variant="body2" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://dennydharmawan.com/">
            Denny Dharmawan
          </Link>{' '}
          {new Date().getFullYear()}.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
