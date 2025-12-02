import React, { useState, useEffect } from 'react';
import { Button, Avatar, Box, Typography } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const Auth = ({ onUserChange }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (onUserChange) {
        onUserChange(currentUser);
      }
    });
    return unsubscribe;
  }, [onUserChange]);

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (user) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar src={user.photoURL} alt={user.displayName}>
          {user.displayName?.charAt(0)}
        </Avatar>
        <Typography variant="body2" sx={{ color: 'white' }}>
          {user.displayName}
        </Typography>
        <Button 
          onClick={handleSignOut}
          sx={{ 
            color: 'white', 
            borderColor: 'white',
            '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
          }}
          variant="outlined"
          size="small"
        >
          Logout
        </Button>
      </Box>
    );
  }

  return (
    <Button
      onClick={handleGoogleSignIn}
      sx={{
        backgroundColor: '#E500A4',
        color: 'white',
        borderRadius: '50px',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#BC00DD',
        },
      }}
    >
      Login with Google
    </Button>
  );
};

export default Auth;
