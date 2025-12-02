import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button, 
  Chip, 
  Alert,
  Tab,
  Tabs,
  Avatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { 
  People, 
  Star, 
  Warning, 
  CheckCircle, 
  Cancel, 
  Delete, 
  Visibility,
  TrendingUp,
  ShoppingBag
} from '@mui/icons-material';
import { collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const AdminDashboard = ({ onLogout }) => {
  const [tabValue, setTabValue] = useState(0);
  const [stats, setStats] = useState({ users: 0, reviews: 0, brands: 0, verifiedReviews: 0 });
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReview, setSelectedReview] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch reviews
      const reviewsSnapshot = await getDocs(collection(db, 'reviews'));
      const reviewsData = reviewsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReviews(reviewsData);

      // Fetch users (from auth profiles)
      const usersSnapshot = await getDocs(collection(db, 'users'));
      const usersData = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(usersData);

      // Calculate stats
      setStats({
        users: usersData.length,
        reviews: reviewsData.length,
        brands: [...new Set(reviewsData.map(r => r.brandName))].length,
        verifiedReviews: reviewsData.filter(r => r.verified).length
      });
    } catch (error) {
      console.error('Error fetching admin data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      try {
        await deleteDoc(doc(db, 'reviews', reviewId));
        setReviews(reviews.filter(r => r.id !== reviewId));
        alert('Review deleted successfully');
      } catch (error) {
        alert('Error deleting review');
      }
    }
  };

  const handleViewReview = (review) => {
    setSelectedReview(review);
    setDialogOpen(true);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const StatCard = ({ title, value, icon, color }) => (
    <Card sx={{ borderRadius: 3, boxShadow: '0 10px 30px rgba(15,23,42,0.08)', border: '1px solid rgba(226,232,240,0.9)' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ backgroundColor: color }}>
            {icon}
          </Avatar>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              {value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <Box sx={{ p: 3, pt: 12, textAlign: 'center', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
        <Typography>Loading admin dashboard...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, pt: 12, minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Admin Dashboard
        </Typography>
        <Button 
          onClick={onLogout} 
          variant="contained" 
          className="primary-button"
          sx={{ px: 3 }}
        >
          Logout
        </Button>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Total Users" value={stats.users} icon={<People />} color="#6A00F4" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Total Reviews" value={stats.reviews} icon={<Star />} color="#E500A4" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Brands" value={stats.brands} icon={<ShoppingBag />} color="#00C851" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Verified Reviews" value={stats.verifiedReviews} icon={<CheckCircle />} color="#ff8800" />
        </Grid>
      </Grid>

      {/* Tabs */}
      <Card>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Reviews" />
            <Tab label="Users" />
          </Tabs>
        </Box>

        {/* Reviews Tab */}
        {tabValue === 0 && (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Recent Reviews
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Brand</TableCell>
                    <TableCell>User</TableCell>
                    <TableCell>Rating</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Verified</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reviews.slice(0, 10).map((review) => (
                    <TableRow key={review.id}>
                      <TableCell>{review.brandName}</TableCell>
                      <TableCell>{review.userEmail?.split('@')[0] || 'Anonymous'}</TableCell>
                      <TableCell>
                        <Chip 
                          label={`${review.rating}.0`} 
                          size="small" 
                          color={review.rating >= 4 ? 'success' : review.rating >= 3 ? 'warning' : 'error'}
                        />
                      </TableCell>
                      <TableCell>{new Date(review.timestamp).toLocaleDateString()}</TableCell>
                      <TableCell>
                        {review.verified ? (
                          <CheckCircle sx={{ color: '#00C851', fontSize: 16 }} />
                        ) : (
                          <Warning sx={{ color: '#ff8800', fontSize: 16 }} />
                        )}
                      </TableCell>
                      <TableCell>
                        <IconButton size="small" onClick={() => handleViewReview(review)}>
                          <Visibility />
                        </IconButton>
                        <IconButton size="small" onClick={() => handleDeleteReview(review.id)}>
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}

        {/* Users Tab */}
        {tabValue === 1 && (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Registered Users
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Joined</TableCell>
                    <TableCell>Reviews</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.slice(0, 10).map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.displayName || 'Not set'}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.location || 'Not set'}</TableCell>
                      <TableCell>{new Date(user.updatedAt).toLocaleDateString()}</TableCell>
                      <TableCell>
                        {reviews.filter(r => r.userId === user.id).length}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Card>

      {/* Review Detail Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Review Details</DialogTitle>
        <DialogContent>
          {selectedReview && (
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                {selectedReview.brandName}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Rating: {selectedReview.rating}/5
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {selectedReview.comment}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                By: {selectedReview.userEmail} | {new Date(selectedReview.timestamp).toLocaleString()}
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminDashboard;
