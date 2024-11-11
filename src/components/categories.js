import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

// import Sweatshirts from '../assets/images/Sweatshirts3.jpg';
import Sweatshirts from '../assets/images/Sweatshirts.jpg'
import Hoodies from '../assets/images/hoodies.jpg';
import Tshirts from '../assets/images/Tshirts.jpg';
import Cargos from '../assets/images/Cargos2.jpg';
import Joggers from '../assets/images/Joggers.jpg';
import Croptops from '../assets/images/Crop-Tops.jpg';
import UtilityVests from '../assets/images/Utility-Vests.jpg';
import Corsets from '../assets/images/Corsets.jpg';
import Sneakers from '../assets/images/Sneakers2.jpg';

const categories = [
  'Sweatshirts',
  'Hoodies',
  'T-shirts',
  'Cargos',
  'Joggers',
  'Utility-Vests',
  'Tops',
  'Corsets',
  'Sneakers'
];

const categoryImages = [
  Sweatshirts,
  Hoodies,
  Tshirts,
  Cargos,
  Joggers,
  UtilityVests,
  Croptops,
  Corsets,
  Sneakers,
];

function CategoryBar() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 2, pb:4 , backgroundColor: '#f6f6f6' }}>
      {/* Cool Heading */}
      <Typography variant="h4" sx={{ mb: 3, letterSpacing: 2, color: '#111111' }}>
        Explore Categories
      </Typography>

      {/* Categories */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflowX: 'auto' }}>
        {categories.map((category, index) => (
          <Box
            key={category}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mx: 4,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                mb: 1,
                transition: 'transform 0.3s ease-in-out', // Smooth hover transition
                '&:hover': {
                  transform: 'scale(1.1)', // Slight zoom on hover
                },
              }}
            >
              {categoryImages[index] && (
                <img
                  src={categoryImages[index]}
                  alt={category}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                />
              )}
            </Paper>

            <Typography
              variant="caption"
              sx={{
                fontSize: 16,
                textAlign: 'center',
                maxWidth: 140,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                lineHeight: 1.2,
                mt: 1,
              }}
            >
              {category.includes('/') ? category.replace('/', ' \n') : category}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CategoryBar;
