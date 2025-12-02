import React, { useState, useEffect } from 'react';
import { 
  Modal, 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Rating, 
  IconButton,
  Divider
} from '@mui/material';
import { Close } from '@mui/icons-material';
import VerifiedReview from './VerifiedReview';
import ReviewLimiter from './ReviewLimiter';

const ReviewModal = ({ open, onClose, brandName, onSubmit, user }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hoverRating, setHoverRating] = useState(0);
  const [verifiedData, setVerifiedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const reviewData = {
        rating,
        comment,
        brandName,
        timestamp: new Date().toISOString(),
        ...verifiedData
      };
      
      if (onSubmit) {
        await onSubmit(reviewData);
      }
      
      // Reset form
      setRating(0);
      setComment('');
      setVerifiedData(null);
      onClose();
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setRating(0);
    setComment('');
    setVerifiedData(null);
    onClose();
  };

  const handleVerifiedSubmit = (data) => {
    setVerifiedData(data);
  };

  const getRatingColor = (value) => {
    if (value <= 1) return '#ff4444'; // Red
    if (value <= 2) return '#ff8800'; // Orange
    if (value <= 3) return '#ffbb33'; // Yellow
    if (value <= 4) return '#00C851'; // Light Green
    return '#00AA00'; // Dark Green
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="review-modal-title"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '92%', sm: '520px' },
          maxHeight: '82vh',
          borderRadius: '18px',
          overflow: 'hidden',
          boxShadow: '0 24px 80px rgba(15,23,42,0.55)',
          background: 'linear-gradient(135deg, rgba(15,23,42,0.96), rgba(30,64,175,0.9))',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 3,
            py: 2,
            background: 'linear-gradient(135deg, #6A00F4, #E500A4)',
          }}
        >
          <Typography
            id="review-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: '#f9fafb', fontWeight: 600 }}
          >
            Review {brandName}
          </Typography>
          <IconButton onClick={handleClose} sx={{ color: '#f9fafb' }}>
            <Close />
          </IconButton>
        </Box>

        <Box
          sx={{
            p: 3,
            pt: 2,
            maxHeight: 'calc(82vh - 64px)',
            overflowY: 'auto',
            background: 'radial-gradient(circle at top left, rgba(250,250,255,0.08), transparent 55%)',
          }}
        >
        <Divider sx={{ mb: 3, borderColor: 'rgba(148,163,184,0.35)' }} />

        {/* Review Limiter */}
        <ReviewLimiter user={user} brandName={brandName} onReviewSubmit={handleSubmit} />

        {/* Rating Section */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="body1"
            sx={{ mb: 2, fontWeight: 'medium', color: '#e5e7eb' }}
          >
            How would you rate {brandName}?
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Rating
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              onChangeActive={(event, newHoverValue) => {
                setHoverRating(newHoverValue);
              }}
              size="large"
              sx={{
                '& .MuiRating-icon': {
                  color: hoverRating > 0 ? getRatingColor(hoverRating) : '#ccc',
                  transition: 'color 0.2s ease-in-out',
                },
                '& .MuiRating-iconFilled': {
                  color: getRatingColor(rating),
                  transition: 'color 0.2s ease-in-out',
                },
                '& .MuiRating-iconHover': {
                  color: getRatingColor(hoverRating),
                },
              }}
            />
            
            {rating > 0 && (
              <Typography variant="body2" sx={{ color: getRatingColor(rating), fontWeight: 500 }}>
                {rating}.0 {rating <= 2 ? 'Poor' : rating <= 3 ? 'Average' : rating <= 4 ? 'Good' : 'Excellent'}
              </Typography>
            )}
          </Box>
        </Box>

        {/* Comment Section */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="body1"
            sx={{ mb: 2, fontWeight: 'medium', color: '#e5e7eb' }}
          >
            Tell us about your experience
          </Typography>
          
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Share your thoughts on product quality, customer service, shipping, etc..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(15,23,42,0.85)',
                borderRadius: 3,
                '& textarea': {
                  color: '#e5e7eb',
                },
                '&:hover fieldset': {
                  borderColor: '#E500A4',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#6A00F4',
                  boxShadow: '0 0 0 1px rgba(229,0,164,0.6)',
                },
              },
            }}
          />
        </Box>

        {/* Verified Review Section */}
        <VerifiedReview onVerifiedSubmit={handleVerifiedSubmit} />

        {/* Submit Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 1 }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            disabled={isSubmitting}
            sx={{
              borderColor: 'rgba(148,163,184,0.7)',
              color: '#e5e7eb',
              textTransform: 'none',
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disabled={isSubmitting || rating === 0}
            className="primary-button"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </Button>
        </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ReviewModal;
