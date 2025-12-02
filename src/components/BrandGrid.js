import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent, Chip } from '@mui/material';
import ReviewModal from './ReviewModal';

const brandData = [
  {
    id: 1,
    name: 'Bluorng',
    category: 'Streetwear',
    rating: 4.7,
    reviews: 34567,
    image: 'https://bluorng.com/cdn/shop/files/DSC05165173.jpg?v=1693989827&width=823',
    reputation: 'Emerging'
  },
  {
    id: 2,
    name: 'Snitch',
    category: 'Casual',
    rating: 4.5,
    reviews: 28934,
    image: 'https://i.pinimg.com/originals/59/04/45/590445d384a67066ff5bdbcf00d7bea6.jpg',
    reputation: 'Popular'
  },
  {
    id: 3,
    name: 'Bearhouse',
    category: 'Premium',
    rating: 4.8,
    reviews: 45678,
    image: 'https://i.pinimg.com/originals/15/26/2f/15262fc580161600c21f2b60ae7234b5.jpg',
    reputation: 'Premium'
  },
  {
    id: 4,
    name: 'Nike',
    category: 'Athletic',
    rating: 4.6,
    reviews: 128934,
    image: 'https://i.pinimg.com/originals/4f/a9/bf/4fa9bfe836a2b0e08b5ad4db2f7dc9ce.jpg',
    reputation: 'Premium'
  },
  {
    id: 5,
    name: 'Adidas',
    category: 'Athletic',
    rating: 4.5,
    reviews: 98723,
    image: 'https://bluorng.com/cdn/shop/files/IOIJ.jpg?v=1711203873',
    reputation: 'Premium'
  },
  {
    id: 6,
    name: 'Supreme',
    category: 'Streetwear',
    rating: 4.9,
    reviews: 67890,
    image: 'https://bluorng.com/cdn/shop/files/DSC05165172.jpg?v=1693989827&width=1445',
    reputation: 'Popular'
  },
  {
    id: 7,
    name: 'Zara',
    category: 'Fast Fashion',
    rating: 4.2,
    reviews: 156789,
    image: 'https://bluorng.com/cdn/shop/files/DSC05165174.jpg?v=1693990036',
    reputation: 'Popular'
  },
  {
    id: 8,
    name: 'H&M',
    category: 'Fast Fashion',
    rating: 4.1,
    reviews: 134567,
    image: 'https://i.pinimg.com/originals/b8/53/a9/b853a996f80842763f30295379f5c575.jpg',
    reputation: 'Popular'
  }
];

const BrandGrid = ({ user }) => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8); // Show 2 rows initially

  const handleReviewClick = (brand) => {
    setSelectedBrand(brand);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedBrand(null);
  };

  const handleReviewSubmit = (reviewData) => {
    console.log('Review submitted:', reviewData);
    // TODO: Save to Firebase
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8); // Add 2 more rows
  };

  const getReputationColor = (reputation) => {
    switch (reputation) {
      case 'Emerging': return '#00C851';
      case 'Popular': return '#ff8800';
      case 'Premium': return '#6A00F4';
      default: return '#666';
    }
  };

  return (
    <Box sx={{ px: 3, py: 4 }}>
      {/* Most Popular Brands Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: '#333' }}>
          Most Popular Brands
        </Typography>
        
        <Grid container spacing={3}>
          {brandData.slice(0, Math.min(visibleCount, 4)).map((brand) => (
            <Grid item xs={12} sm={6} md={3} key={brand.id}>
              <Card 
                className="glass-card"
                sx={{ 
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 18px 40px rgba(15,23,42,0.18)'
                  }
                }}
                onClick={() => handleReviewClick(brand)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={brand.image}
                  alt={brand.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ pb: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {brand.name}
                    </Typography>
                    <Chip 
                      label={brand.reputation}
                      size="small"
                      sx={{ 
                        backgroundColor: getReputationColor(brand.reputation),
                        color: 'white',
                        fontSize: '0.7rem'
                      }}
                    />
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {brand.category}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {brand.rating}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      ({brand.reviews.toLocaleString()} reviews)
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Most Popular Emerging Brands Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: '#333' }}>
          Most Popular Emerging Brands
        </Typography>
        
        <Grid container spacing={3}>
          {brandData.slice(4, Math.min(visibleCount, 8)).map((brand) => (
            <Grid item xs={12} sm={6} md={3} key={brand.id}>
              <Card 
                className="glass-card"
                sx={{ 
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 18px 40px rgba(15,23,42,0.18)'
                  }
                }}
                onClick={() => handleReviewClick(brand)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={brand.image}
                  alt={brand.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ pb: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {brand.name}
                    </Typography>
                    <Chip 
                      label={brand.reputation}
                      size="small"
                      sx={{ 
                        backgroundColor: getReputationColor(brand.reputation),
                        color: 'white',
                        fontSize: '0.7rem'
                      }}
                    />
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {brand.category}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {brand.rating}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      ({brand.reviews.toLocaleString()} reviews)
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Load More Button */}
      {visibleCount < brandData.length && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="outlined"
            onClick={handleLoadMore}
            sx={{
              borderColor: '#6A00F4',
              color: '#6A00F4',
              borderRadius: '50px',
              px: 4,
              py: 1,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#6A00F4',
                color: 'white'
              }
            }}
          >
            View More
          </Button>
        </Box>
      )}

      {/* Review Modal */}
      <ReviewModal
        open={modalOpen}
        onClose={handleModalClose}
        brandName={selectedBrand?.name}
        onSubmit={handleReviewSubmit}
        user={user}
      />
    </Box>
  );
};

export default BrandGrid;
