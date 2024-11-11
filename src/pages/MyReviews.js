import ReviewTab from '../components/ReviewTab'
import { Box, Typography, Button } from '@mui/material';

function MyReviews() {
  return (
    <div sx={{
      backgroundColor: '#000000',
    }}>
      <ReviewTab />
      <Box
        sx={{
          width: { xs: '90%', sm: '80%', md: '70%', lg: '864px' }, // Responsive widths
          margin: '20px auto',
          padding: { xs: '15px', sm: '20px' }, // Adjust padding for small screens
          // border: '1px solid #ccc',
          // borderRadius: '8px',
          textAlign: 'left',
          // backgroundColor: '#fff',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: { xs: '18px', sm: '20px', md: '22px', lg: '24px' }, // Responsive font size
          }}
        >
          Write your first review
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: '20px',
            fontSize: { xs: '14px', sm: '16px', md: '18px' }, // Responsive font size
          }}
        >
          Share your experience! Your feedback will empower others to shop with confidence and help companies improve.
        </Typography>

        <Button
          variant="outlined"
          sx={{
            backgroundColor: '#2D00F7',
            color: '#fff',
            border: '1px solid #2D00F7',
            borderRadius: '30px',
            padding: { xs: '5px 15px', sm: '5px 20px' }, // Responsive padding
            textTransform: 'none',
            fontSize: { xs: '14px', sm: '16px' }, // Responsive font size
            fontWeight: '600',
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#2D00F7',
              border: '1px solid #2D00F7',
            },
          }}
        >
          Find a brand
        </Button>
      </Box>
    </div>
  );
}

export default MyReviews;
