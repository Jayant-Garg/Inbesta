import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BgImage from '../assets/images/hero3.jpg';

function HeroSection() {
  return (
    <Box
      sx={{
        height: '80vh',
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
      }}
    >
      <Button 
        variant="contained" 
        className="primary-button"
        sx={{ fontSize: '1.2rem', mb: 3, px: 4 }}
      >
        Submit a Review
      </Button>
      
      <Typography
        variant="h4"
        component="div"
        sx={{ color: '#fff', textAlign: 'center', mb: 2 }}
      >
        Find the best brands rated by you
      </Typography>
      
      <Typography 
        variant="body2" 
        component="div" 
        sx={{ color: '#fff', textAlign: 'center' }}
      >
        — Inbesta —
      </Typography>
    </Box>
  );
}

export default HeroSection;
