import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { Alert, Box } from '@mui/material';

const ReviewLimiter = ({ user, brandName, onReviewSubmit }) => {
  const [limitStatus, setLimitStatus] = useState({ allowed: true, remaining: 3, message: '' });

  useEffect(() => {
    if (user && brandName) {
      checkReviewLimit();
    }
  }, [user, brandName]);

  const checkReviewLimit = async () => {
    if (!user || !brandName) return;

    const currentMonth = new Date().toISOString().slice(0, 7); // YYYY-MM
    const reviewsRef = collection(db, 'reviews');
    
    const q = query(
      reviewsRef,
      where('userId', '==', user.uid),
      where('brandName', '==', brandName),
      where('month', '==', currentMonth)
    );

    try {
      const querySnapshot = await getDocs(q);
      const reviewCount = querySnapshot.size;
      const remaining = Math.max(0, 3 - reviewCount);

      if (remaining === 0) {
        setLimitStatus({
          allowed: false,
          remaining: 0,
          message: `You've reached the monthly review limit for ${brandName}. You can write more reviews next month.`
        });
      } else {
        setLimitStatus({
          allowed: true,
          remaining,
          message: `You can write ${remaining} more review${remaining > 1 ? 's' : ''} for ${brandName} this month.`
        });
      }
    } catch (error) {
      console.error('Error checking review limit:', error);
      setLimitStatus({ allowed: true, remaining: 3, message: '' });
    }
  };

  const handleReviewSubmit = async (reviewData) => {
    if (!limitStatus.allowed) {
      return false;
    }

    try {
      const currentMonth = new Date().toISOString().slice(0, 7);
      const reviewWithMeta = {
        ...reviewData,
        userId: user.uid,
        userEmail: user.email,
        month: currentMonth,
        submittedAt: Timestamp.now()
      };

      await addDoc(collection(db, 'reviews'), reviewWithMeta);
      
      // Update limit status after submission
      await checkReviewLimit();
      
      if (onReviewSubmit) {
        onReviewSubmit(reviewWithMeta);
      }
      
      return true;
    } catch (error) {
      console.error('Error submitting review:', error);
      return false;
    }
  };

  return (
    <Box>
      {!limitStatus.allowed && (
        <Alert severity="warning" sx={{ mb: 2 }}>
          {limitStatus.message}
        </Alert>
      )}
      
      {limitStatus.allowed && limitStatus.message && (
        <Alert severity="info" sx={{ mb: 2 }}>
          {limitStatus.message}
        </Alert>
      )}
    </Box>
  );
};

export default ReviewLimiter;
