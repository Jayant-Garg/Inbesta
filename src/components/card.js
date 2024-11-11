import React, { useState } from 'react';
import { Modal, Card, CardMedia, CardContent, CardActions, TextField, Typography, Box, IconButton, Tooltip, Divider, Button, Avatar, Rating, InputLabel, FormLabel } from '@mui/material';
import { Close, ExpandMore, ThumbUp, ThumbDown, Share, Star } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/system';

import CloseIcon from '@mui/icons-material/Close';
// import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import ExpandMore from '@mui/icons-material/ExpandMore';

import StarBorderIcon from '@mui/icons-material/StarBorder';
// import CloseIcon from '@mui/icons-material/Close';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Sample data for logos, product images, and tooltips
const brandData = {
  logo: 'https://bluorng.com/cdn/shop/files/DSC05165173.jpg?v=1693989827&width=823',
  website: 'https://example.com',
  instagramId: '@bluorng',
  brandName: 'Bluorng',
  description: 'This is a fantastic brand that offers stylish and comfortable streetwear. This is a fantastic brand that offers stylish and comfortable streetw...',
  products: [
    'https://i.pinimg.com/originals/59/04/45/590445d384a67066ff5bdbcf00d7bea6.jpg',
    'https://i.pinimg.com/originals/15/26/2f/15262fc580161600c21f2b60ae7234b5.jpg',
    'https://i.pinimg.com/originals/4f/a9/bf/4fa9bfe836a2b0e08b5ad4db2f7dc9ce.jpg',
    'https://i.pinimg.com/originals/b8/53/a9/b853a996f80842763f30295379f5c575.jpg',
    'https://bluorng.com/cdn/shop/files/IOIJ.jpg?v=1711203873',
    'https://bluorng.com/cdn/shop/files/DSC05165172.jpg?v=1693989827&width=1445',
    'https://bluorng.com/cdn/shop/files/DSC05165174.jpg?v=1693990036'
  ],
  // reviews: Math.floor(Math.random() * 950) + 50,
  likes: Math.floor(Math.random() * 50) + 951,


  rating: 4.7,
  reviews: 34567
};

// const modalStyle = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '80%', // You can adjust the width as needed
//   maxWidth: '900px',
//   bgcolor: 'background.paper',
//   borderRadius: '10px',
//   boxShadow: 24,
//   p: 4,
//   overflowY: 'auto',
//   maxHeight: '90vh', // Ensure modal is scrollable when content exceeds screen height
//   outline: 'none',
// };
// const modalStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "80%",
//   maxHeight: "90vh",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 4,
//   borderRadius: 2,
//   overflowY: "auto",
// };

const BrandCard = ({
  logo = brandData.logo,
  instagramId = brandData.instagramId,
  brandName = brandData.brandName,
  description = brandData.description,
  products = brandData.products,
  website = brandData.website,
  reviews = brandData.reviews,
  rating = brandData.rating,
  likes = brandData.likes,
  // brandName,
  // brandLogo, 
  // open,
  // onClose
}) => {
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [hoverStarsMetric1, setHoverStarsMetric1] = useState(null);
  const [hoverStarsMetric2, setHoverStarsMetric2] = useState(null);
  const [hoverStarsMetric3, setHoverStarsMetric3] = useState(null);
  const [hoverStarsMetric4, setHoverStarsMetric4] = useState(null);

  const [hoveredStars, setHoveredStars] = useState({});
  const [isReviewBoxExpanded, setReviewBoxExpanded] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleHoverStars = (metric, stars) => {
    setHoveredStars(prev => ({ ...prev, [metric]: stars }));
  };

  const handleReviewBoxClick = () => {
    setReviewBoxExpanded(true);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const getStarColor = (index, hoveredValue) => {
    if (hoveredValue >= 5) return 'green';
    if (hoveredValue === 4) return 'lightgreen';
    if (hoveredValue === 3) return 'yellow';
    if (hoveredValue === 2) return 'orange';
    if (hoveredValue === 1) return 'red';
    return 'gray';
  };

  const [open, setOpen] = useState(false);  // State for modal visibility
  const [expanded, setExpanded] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [hoverStars, setHoverStars] = useState(null);

  const handleOpen = () => setOpen(true);

  // Function to close the modal
  // const resetModal = () => {
  //   setReviewSubmitted(false);
  //   onClose();
  // };
  const handleClose = () => {
    setShowReviewForm(false);
    setReviewSubmitted(false);  // Reset review state on close
    setOpen(false);
  };

  const handleExpand = () => setExpanded(!expanded);

  const handleReviewSubmit = () => setReviewSubmitted(true);

  const starColors = ['#FF0000', '#FFA500', '#FFFF00', '#ADFF2F', '#32CD32'];

  // const getStarColor = (hovered) => {
  //   if (hovered === null) return '';
  //   return starColors[hovered - 1] || '';
  // };
  // const handleClose = () => setOpen(false); // This closes the modal



  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [hover, setHover] = useState(false);
  const [liked, setLiked] = useState(false);

  // const [open, setOpen] = useState(false);

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);


  const stars = Array(5).fill(0).map((_, i) => (
    i < Math.round(rating)
      ? <StarIcon key={i} style={{ color: '#FFD700' }} />
      : <StarBorderIcon key={i} style={{ color: '#FFD700' }} />
  ));
  // const [expanded, setExpanded] = useState(false);
  // const [hoveredStars, setHoveredStars] = useState({});
  const [metricsVisible, setMetricsVisible] = useState(false);
  // Toggles brand description expansion
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleHover = (metric, stars) => {
    setHoveredStars((prevState) => ({ ...prevState, [metric]: stars }));
  };

  const handleClickReviewBox = () => {
    setMetricsVisible(true);
    setTimeout(() => {
      document.querySelector("#review-section").scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // const starColors = ["red", "orange", "yellow", "lightgreen", "green"];
  return (


    <>
      <Modal open={open} onClose={handleClose} sx={{ overflowY: 'auto' }}>
      <Box sx={{ maxWidth: 800, margin: 'auto', p: 4, backgroundColor: 'white', borderRadius: 2 }}>
        {/* First section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Avatar src="brand-logo.jpg" alt={brandName} sx={{ width: 80, height: 80, margin: 'auto' }} />
          <Typography variant="h6">{brandName}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} sx={{ color: i < 4 ? 'green' : 'gray' }} />
            ))}
          </Box>
          <Typography variant="body2">34567 Reviews</Typography>
        </Box>

        {/* Divider */}
        <Box sx={{ borderBottom: '1px solid #ddd', mb: 4 }} />

        {/* Second section - left box */}
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Box sx={{ flex: '70%' }}>
            {!submitted ? (
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar alt="User" src="user-pic.jpg" />
                  <Typography variant="body1" sx={{ ml: 2 }}>Username</Typography>
                </Box>
                {!isReviewBoxExpanded ? (
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Write a review"
                    onClick={handleReviewBoxClick}
                  />
                ) : (
                  <Box>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Write your review"
                      multiline
                      rows={4}
                      sx={{ mb: 2 }}
                    />
                    {/* Metrics */}
                    {['Quality of clothing', 'Quality of print', 'Value for money', 'Recommendation'].map(metric => (
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }} key={metric}>
                        <Typography sx={{ width: '40%' }}>{metric}</Typography>
                        <Box>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              sx={{
                                cursor: 'pointer',
                                color: getStarColor(i + 1, hoveredStars[metric] || 0),
                              }}
                              onMouseEnter={() => handleHoverStars(metric, i + 1)}
                              onMouseLeave={() => handleHoverStars(metric, 0)}
                              onClick={() => setHoveredStars(prev => ({ ...prev, [metric]: i + 1 }))}
                            />
                          ))}
                        </Box>
                      </Box>
                    ))}
                    {/* Date of experience */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography>Date of Experience</Typography>
                      <Tooltip title="Your review must be about a past experience in the last 12 months">
                        <IconButton size="small" sx={{ ml: 1 }}>i</IconButton>
                      </Tooltip>
                      <TextField
                        type="date"
                        variant="outlined"
                        sx={{ ml: 2 }}
                      />
                    </Box>

                    <Typography sx={{ textAlign: 'center', mb: 2 }}>
                      By submitting this review, you confirm it’s based on a genuine experience and you haven’t received an incentive to write it.
                    </Typography>
                    <Button fullWidth variant="contained" onClick={handleSubmit}>Submit Review</Button>
                  </Box>
                )}
              </Box>
            ) : (
              <Box>
                <Typography>You have submitted a review for {brandName}</Typography>
                <Button fullWidth variant="outlined">Submit another review!</Button>
              </Box>
            )}

            {/* Reviews section */}
            <Box>
              {[...Array(10)].map((_, index) => (
                <Box key={index} sx={{ border: '1px solid #ddd', borderRadius: 2, p: 2, mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar alt="Reviewer" src="reviewer-pic.jpg" />
                      <Box sx={{ ml: 2 }}>
                        <Typography>Reviewer Name</Typography>
                        <Typography variant="body2" sx={{ color: 'gray' }}>12 Reviews</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <InstagramIcon sx={{ mx: 1 }} />
                      <TwitterIcon sx={{ mx: 1 }} />
                      <ThumbUp sx={{ mx: 1 }} titleAccess="Good review" />
                      <ThumbDown sx={{ mx: 1 }} titleAccess="Nah didn't like it" />
                      <Share sx={{ mx: 1 }} titleAccess="Share review" />
                    </Box>
                  </Box>
                  <Typography sx={{ mt: 2 }}>This is a review content. Read more...</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Second section - right box */}
          <Box sx={{ flex: '30%' }}>
            <Box sx={{ border: '1px solid black', p: 2, mb: 4, position: 'relative' }}>
              <Typography variant="h6">About {brandName}</Typography>
              <Typography sx={{ WebkitLineClamp: 3, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', position: 'relative' }}>
                This is a description of the brand. Only three lines will be visible, with the third line blurred to indicate more content available.
              </Typography>
              <IconButton
                sx={{ position: 'absolute', bottom: -10, left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', borderRadius: '50%' }}
              >
                <ExpandMore />
              </IconButton>
            </Box>

            {/* Cards */}
            <Box>
              {[...Array(10)].map((_, index) => (
                <Box key={index} sx={{ mb: 2, textAlign: 'center' }}>
                  <Box sx={{ height: 300, width: 150, backgroundColor: '#f5f5f5', mb: 1 }}>Image</Box>
                  <Typography>Price: ₹5000</Typography>
                  <Typography variant="body2">0 Reviews</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* See More button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            position: 'relative',
            mt: 2,
            mb: 2,
            maxWidth: '100%',
          }}
        >
          See More Reviews
        </Button>
      </Box>
    </Modal>
      <Tooltip title={
        <Box sx={{ fontSize: '8px' }}> {/* Adjusted tooltip size */}
          <Typography>Reviews: {reviews}</Typography>
          <Typography>Likes: {likes}</Typography>
        </Box>
      }
        arrow placement="right" sx={{ fontSize: '10px' }}>
        <Card
          sx={{
            width: 420,
            height: '55vh',
            position: 'relative',
            m: 2,
            '&:hover': {
              boxShadow: '0px 0px 15px rgba(0,0,0,0.3)',
              '& .reviewBox': {
                height: '45px'
              }
            }
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* Brand Logo */}
          <Box
            component="img"
            src={logo}
            alt={brandName}
            sx={{ width: '100%', height: '150px', objectFit: 'cover' }}
          />

          {/* Website Link */}
          <Tooltip title={`Visit ${brandName}'s website`} arrow sx={{ fontSize: '24px' }}>
            <IconButton
              component="a"
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderRadius: '50%',
                p: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 1)'
                }
              }}
            >
              <LinkIcon />
            </IconButton>
          </Tooltip>

          <CardContent>
            {/* Instagram Icon and ID */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <InstagramIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">{instagramId}</Typography>
            </Box>

            {/* Brand Name with Like Button */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                {brandName}
              </Typography>
              <IconButton onClick={() => setLiked(!liked)} sx={{ position: 'relative', top: '-8px' }}>
                {liked ? <FavoriteIcon sx={{ color: 'red', fontSize: '30px' }} /> : <FavoriteBorderIcon sx={{ fontSize: '30px' }} />}
              </IconButton>
            </Box>

            {/* Description */}
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {description}
            </Typography>

            {/* Floating Carousel */}
            <Carousel
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              infiniteLoop
              useKeyboardArrows
              autoPlay
              interval={3000}
              stopOnHover
              dynamicHeight={false}
              centerMode={true}
              centerSlidePercentage={33.33} // Adjusts how much of the carousel is centered
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <IconButton
                    onClick={onClickHandler}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '-20px',
                      zIndex: 1
                    }}
                  >
                    ‹
                  </IconButton>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <IconButton
                    onClick={onClickHandler}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      right: '-20px',
                      zIndex: 1
                    }}
                  >
                    ›
                  </IconButton>
                )
              }
            >
              {products.map((product, index) => (
                <Box key={index}>
                  <img
                    src={product}
                    alt={`product-${index}`}
                    style={{ width: '100px', height: '130px', objectFit: 'cover', margin: 'auto' }}
                  />
                </Box>
              ))}
            </Carousel>

          </CardContent>

          {/* Single Review Button */}
          <Box
            className="reviewBox"
            sx={{
              fontSize: '18px',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '50%',
              height: hover ? '50px' : '5px',
              backgroundColor: '#6A00F4',
              color: 'white',
              textAlign: 'center',
              transition: 'height 0.3s ease',
              cursor: 'pointer',
              lineHeight: hover ? '45px' : '5px',
            }}
            variant="contained"
            onClick={handleOpen}
            // variant="contained" color="primary" onClick={handleOpen}
          >
            {hover ? 'Review this brand' : ''}
          </Box>
        </Card>
      </Tooltip>
    </>
  );
};

export default BrandCard;
