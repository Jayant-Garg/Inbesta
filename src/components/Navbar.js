import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Person4Icon from '@mui/icons-material/Person4';

import { Link } from 'react-router-dom';

const pages = ['Categories', 'Top Rated', 'Blogs', 'FAQ'];
const categories = ['Sweatshirts', 'Hoodies', 'T-shirts', 'Cargos', 'Joggers', 'Crop-tops', 'Utility Vests', 'Corsets', 'Sneakers'];
// const settings = ['My Reviews', 'My Settings', 'Contact Us', 'Log out', 'Inbesta'];
const settings = [
  { label: 'My Reviews', path: '/myreviews' },
  { label: 'MySettings', path: '/mysettings' },
  { label: 'Contact Us', path: '/contactus' },
  { label: 'Log out', path: '/logout' }
];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElCategory, setAnchorElCategory] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenCategoryMenu = (event) => {
    setAnchorElCategory(event.currentTarget);
  };
  const handleCloseCategoryMenu = () => {
    setAnchorElCategory(null);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#6A00F4' }}>
        <Container maxWidth='xxl'>
          <Toolbar disableGutters>
            {/* Logo Section */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#BC00DD',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mr: 2,
                }}
              >
                <Typography variant="h6" sx={{ color: 'white' }}>
                  <Link to={'/'}>L</Link>
                </Typography>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <Link to={'/'}>
                  INBESTA
                </Link>
              </Typography>
            </Box>

            {/* Search Bar */}
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <input
                type="text"
                placeholder="Search by category, brand, reviews"
                style={{
                  width: '40%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #D100D1',
                  boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
                  marginRight: '20%'
                }}
              />
            </Box>

            {/* Navbar Items */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/* "For Businesses" Button */}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#E500A4',
                  borderRadius: '50px',
                  color: 'white',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#BC00DD',
                  },
                  mr: 2,
                }}
              >
                For Businesses
              </Button>

              {pages.map((page) => (
                <Button
                  key={page}
                  // onClick={page !== 'Categories' ? handleCloseUserMenu : undefined}
                  onMouseEnter={page === 'Categories' ? handleOpenCategoryMenu : handleCloseCategoryMenu}
                  // onMouseEnter={page === 'Categories' ? handleOpenCategoryMenu : undefined}
                  // onMouseLeave={page === 'Categories' ? handleCloseCategoryMenu : undefined}
                  sx={{
                    color: 'white',
                    mx: 0.5,
                    position: 'relative',
                    '&:hover': {
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'white',
                      },
                    }
                  }}
                >
                  {page}
                  {page === 'Categories' && <ExpandMoreIcon sx={{ ml: 1 }} />}
                </Button>
              ))}

              {/* Categories Menu */}
              <Menu
                id="category-menu"
                anchorEl={anchorElCategory}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElCategory)}
                onClose={handleCloseCategoryMenu}
                onMouseLeave={handleCloseCategoryMenu}
                MenuListProps={{
                  onMouseLeave: handleCloseCategoryMenu,
                  sx: { mt: 1 },
                }}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: '#6A00F4',
                    marginTop: '10px',
                  },
                }}
              >
                {categories.map((category) => (
                  <MenuItem
                    key={category}
                    onClick={handleCloseCategoryMenu}
                    sx={{
                      "&:focus": {
                        backgroundColor: 'inherit', // Remove background color on focus
                      },
                      "&:hover": {
                        backgroundColor: 'white',
                        color: '#E500A4',
                      },
                    }}
                  >
                    <Typography>{category}</Typography>
                  </MenuItem>
                ))}
              </Menu>

              {/* User Avatar and Menu */}
              <Tooltip title="Open settings">
                <IconButton
                  onMouseEnter={handleOpenUserMenu}
                  sx={{ p: 0 }}
                >
                  <Avatar sx={{ bgcolor: '#E500A4', color: 'white' }}>
                    <Person4Icon />
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                MenuListProps={{
                  onMouseLeave: handleCloseUserMenu,
                  sx: { mt: 1 },
                }}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: '#6A00F4',
                    marginTop: '10px',
                  },
                }}
              >
                {settings.map((setting) => (
                  <Link to={setting.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <MenuItem
                      key={setting.label}
                      onClick={handleCloseUserMenu}
                      sx={{
                        "&:focus": {
                          backgroundColor: 'inherit', // Remove background color on focus
                        },
                        "&:hover": {
                          backgroundColor: 'white',
                          color: '#E500A4',
                        },
                      }}
                    >
                      {setting.label}
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Space below AppBar */}
      <Box sx={{ height: '64px' }}></Box>
    </>
  );
}

export default ResponsiveAppBar;
