import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Avatar, Chip, Divider, List, ListItem, ListItemText } from '@mui/material';
import { auth } from '../firebase';

const UserProfile = ({ user }) => {
  const [userReviews, setUserReviews] = useState([]);

  // Mock user reviews - in real app, fetch from Firebase
  const mockReviews = [
    {
      id: 1,
      brandName: 'Bluorng',
      rating: 5,
      comment: 'Amazing quality streetwear! The fabric is premium and fits perfectly.',
      timestamp: '2024-01-15',
      verified: true
    },
    {
      id: 2,
      brandName: 'Snitch',
      rating: 4,
      comment: 'Good collection, reasonable prices. Shipping was fast.',
      timestamp: '2024-01-10',
      verified: false
    }
  ];

  useEffect(() => {
    if (user) {
      setUserReviews(mockReviews);
    }
  }, [user]);

  if (!user) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6">Please login to view your profile</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      {/* Profile Header */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Avatar 
              src={user.photoURL} 
              sx={{ width: 80, height: 80 }}
            >
              {user.displayName?.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {user.displayName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.email}
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Chip label="Verified Reviewer" size="small" sx={{ backgroundColor: '#00C851', color: 'white' }} />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Stats */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>Your Stats</Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ color: '#6A00F4', fontWeight: 'bold' }}>
                {userReviews.length}
              </Typography>
              <Typography variant="body2">Total Reviews</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ color: '#00C851', fontWeight: 'bold' }}>
                {userReviews.filter(r => r.verified).length}
              </Typography>
              <Typography variant="body2">Verified Reviews</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ color: '#E500A4', fontWeight: 'bold' }}>
                4.5
              </Typography>
              <Typography variant="body2">Avg Rating</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* My Reviews */}
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>My Reviews</Typography>
          {userReviews.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              You haven't written any reviews yet.
            </Typography>
          ) : (
            <List>
              {userReviews.map((review) => (
                <React.Fragment key={review.id}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {review.brandName}
                          </Typography>
                          {review.verified && (
                            <Chip 
                              label="Verified" 
                              size="small" 
                              sx={{ backgroundColor: '#00C851', color: 'white', fontSize: '0.7rem' }}
                            />
                          )}
                        </Box>
                      }
                      secondary={
                        <Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#6A00F4' }}>
                              {review.rating}.0
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {review.timestamp}
                            </Typography>
                          </Box>
                          <Typography variant="body2">
                            {review.comment}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                  {review.id < userReviews.length && <Divider />}
                </React.Fragment>
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserProfile;
