import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import BrandCard from './card';

function TopRatedBrandsByCategory() {
  // List of categories
  const categories = [
    'sweatshirt', 'hoodie', 't-shirt', 'cargo', 'jogger', 
    'crop-top', 'utility vest/bomber jacket', 'sneaker'
  ];

  // Placeholder data for the brands. You can replace this with real data.
  const brands = [
    'Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5',
    'Brand 6', 'Brand 7', 'Brand 8'
  ];

  return (
    <Box sx={{ py: 5, px: 2 }}>
      {categories.map((category, index) => (
        <Box key={index} sx={{ mb: 10 }}> {/* Adding spacing between categories */}
          {/* Category Heading */}
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 5,
              color: '#6A00F4', // Customize color if needed
            }}
          >
            Top Rated {`${category.charAt(0).toLocaleUpperCase() + category.slice(1)}`} Brands
          </Typography>

          {/* Grid of Cards */}
          <Grid container spacing={4}>
            {brands.map((brand, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <BrandCard />
              </Grid>
            ))}
          </Grid>

          {/* "More top rated {category} selling brands" Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#8900F2',
                color: 'white',
                fontSize: 18,
                px: 4,
                py: 2,
                textTransform: 'none',
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: '#6A00F4',
                },
              }}
            >
              More top rated {category} brands
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default TopRatedBrandsByCategory;
