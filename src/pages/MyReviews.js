import ReviewTab from '../components/ReviewTab'
import { Box, Typography, Button } from '@mui/material';

function MyReviews() {
  return (
    <div>
      <ReviewTab />
      <Box
        sx={{
          width: { xs: '92%', sm: '80%', md: '70%', lg: '864px' },
          margin: '32px auto',
          textAlign: 'left',
        }}
        className="glass-card"
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            mb: 1.5,
            fontSize: { xs: '18px', sm: '20px', md: '22px', lg: '24px' }, // Responsive font size
            color: '#111827'
          }}
        >
          Write your first review
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 2.5,
            fontSize: { xs: '14px', sm: '16px', md: '18px' }, // Responsive font size
            color: '#4b5563'
          }}
        >
          Share your experience! Your feedback will empower others to shop with confidence and help companies improve.
        </Typography>

        <Button
          variant="contained"
          className="primary-button"
          sx={{
            textTransform: 'none',
            fontSize: { xs: '14px', sm: '16px' },
            fontWeight: 600,
          }}
        >
          Find a brand
        </Button>
      </Box>
    </div>
  );
}

export default MyReviews;
