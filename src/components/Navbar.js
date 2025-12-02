import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Link } from 'react-router-dom';
import Auth from './Auth';
import SearchBar from './SearchBar';

const pages = ['Categories', 'Top Rated', 'Blogs', 'FAQ'];
const categories = ['Sweatshirts', 'Hoodies', 'T-shirts', 'Cargos', 'Joggers', 'Crop-tops', 'Utility Vests', 'Corsets', 'Sneakers'];

function ResponsiveAppBar() {
  const [anchorElCategory, setAnchorElCategory] = React.useState(null);

  const handleOpenCategoryMenu = (event) => {
    setAnchorElCategory(event.currentTarget);
  };
  const handleCloseCategoryMenu = () => {
    setAnchorElCategory(null);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'transparent',
          boxShadow: 'none',
          pt: 1,
          pb: 1.5
        }}
      >
        <Container maxWidth="lg" sx={{ px: 2 }}>
          <Toolbar
            disableGutters
            sx={{
              width: '100%',
              background: 'linear-gradient(135deg, rgba(15,23,42,0.6), rgba(55,65,81,0.52))',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 8px 24px rgba(15,23,42,0.35)',
              borderRadius: '999px',
              px: { xs: 2, md: 3 },
              py: 1,
              gap: 2,
              alignItems: 'center'
            }}
          >
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
                  <Link to={'/'} style={{ color: 'inherit', textDecoration: 'none' }}>L</Link>
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
                <Link 
                  to={'/'} 
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  INBESTA
                </Link>
              </Typography>
            </Box>

            {/* Search Bar */}
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ width: '100%', maxWidth: 420 }}>
                <SearchBar variant="navbar" />
              </Box>
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
                    backgroundColor: '#1f2937',
                    color: '#f9fafb',
                    marginTop: '10px',
                    borderRadius: 2,
                    boxShadow: '0 18px 45px rgba(15,23,42,0.55)',
                    minWidth: 200,
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

              {/* User Avatar and Menu - Replace with Auth */}
              <Auth />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default ResponsiveAppBar;
