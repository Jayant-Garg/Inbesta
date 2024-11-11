import React from 'react';
import { Avatar, Box, Typography, Chip } from '@mui/material';
import { Star, Visibility, ThumbUp } from '@mui/icons-material';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 4, 
        backgroundColor: '#fff', 
        maxWidth: '100%', 
        boxShadow: 1, 
      }}
    >
      {/* Inner Container - For centered content */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '70%', 
          maxWidth: '1200px', 
        }}
      >
        {/* Left Section - Profile Picture and User Info */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Profile Picture */}
          <Avatar
            alt="User Name"
            src="/path/to/profile.jpg"
            sx={{ width: 80, height: 80 }} 
          />

          {/* User Info */}
          <Box sx={{ ml: 2 }}>
            <Typography variant="h5">Kabir Singh Rana</Typography>

            {/* Verified Badge */}
            <Chip
              label="Verified Reviewer"
              color="primary"
              sx={{
                mt: 1,
                borderRadius: '5px',
                padding: '0 8px', 
                backgroundColor: '#4caf50',
                fontSize: '14px', 
                height: '24px',   
                color: '#fff',
              }}
            />
          </Box>
        </Box>

        {/* Right Section - Metrics */}
        <Box sx={{ display: 'flex', gap: 4 }}>
          {/* Reviews Metric */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="div">
              0
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Star color="primary" />
              <Typography>Reviews</Typography>
            </Box>
          </Box>

          {/* Reads Metric */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="div">
              0
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Visibility color="primary" />
              <Typography>Reads</Typography>
            </Box>
          </Box>

          {/* Useful Metric */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="div">
              0
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ThumbUp color="primary" />
              <Typography>Useful</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
