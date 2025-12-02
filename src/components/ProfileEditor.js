import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, TextField, Button, Avatar, Divider, Alert } from '@mui/material';
import { Edit, Save, Cancel, Camera } from '@mui/icons-material';
import { updateProfile } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const ProfileEditor = ({ user, onProfileUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    displayName: '',
    bio: '',
    location: '',
    website: '',
    favoriteBrands: ''
  });
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      setProfileData({
        displayName: user.displayName || '',
        bio: '',
        location: '',
        website: '',
        favoriteBrands: ''
      });
      setPreviewImage(user.photoURL || '');
    }
  }, [user]);

  const handleEdit = () => {
    setIsEditing(true);
    setMessage('');
  };

  const handleCancel = () => {
    setIsEditing(false);
    if (user) {
      setProfileData({
        displayName: user.displayName || '',
        bio: '',
        location: '',
        website: '',
        favoriteBrands: ''
      });
      setPreviewImage(user.photoURL || '');
    }
    setProfileImage(null);
    setMessage('');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setProfileImage(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviewImage(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        setMessage('Please select an image file');
      }
    }
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage('');

    try {
      // Update Firebase Auth profile
      if (profileData.displayName !== user.displayName) {
        await updateProfile(auth.currentUser, {
          displayName: profileData.displayName
        });
      }

      // Save additional profile data to Firestore
      const userDocRef = doc(db, 'users', user.uid);
      const profileInfo = {
        ...profileData,
        photoURL: previewImage,
        updatedAt: new Date().toISOString()
      };

      await setDoc(userDocRef, profileInfo, { merge: true });

      setMessage('Profile updated successfully!');
      setIsEditing(false);
      
      if (onProfileUpdate) {
        onProfileUpdate(profileInfo);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field) => (event) => {
    setProfileData({
      ...profileData,
      [field]: event.target.value
    });
  };

  if (!user) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6">Please login to edit your profile</Typography>
      </Box>
    );
  }

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6">Profile Settings</Typography>
          {!isEditing ? (
            <Button
              startIcon={<Edit />}
              onClick={handleEdit}
              variant="outlined"
              size="small"
            >
              Edit Profile
            </Button>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                startIcon={<Save />}
                onClick={handleSave}
                variant="contained"
                disabled={loading}
                size="small"
              >
                {loading ? 'Saving...' : 'Save'}
              </Button>
              <Button
                startIcon={<Cancel />}
                onClick={handleCancel}
                variant="outlined"
                size="small"
              >
                Cancel
              </Button>
            </Box>
          )}
        </Box>

        {message && (
          <Alert severity={message.includes('success') ? 'success' : 'error'} sx={{ mb: 2 }}>
            {message}
          </Alert>
        )}

        {/* Profile Image */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
          <Box sx={{ position: 'relative' }}>
            <Avatar
              src={previewImage}
              sx={{ width: 100, height: 100 }}
            >
              {profileData.displayName?.charAt(0) || user.email?.charAt(0)}
            </Avatar>
            {isEditing && (
              <Button
                component="label"
                sx={{
                  position: 'absolute',
                  bottom: -8,
                  right: -8,
                  minWidth: 36,
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  backgroundColor: '#6A00F4',
                  '&:hover': {
                    backgroundColor: '#E500A4'
                  }
                }}
              >
                <Camera sx={{ fontSize: 18, color: 'white' }} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
              </Button>
            )}
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Profile Picture
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Click camera icon to change photo
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Profile Fields */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Display Name"
            value={profileData.displayName}
            onChange={handleChange('displayName')}
            disabled={!isEditing}
            fullWidth
            size="small"
          />

          <TextField
            label="Bio"
            value={profileData.bio}
            onChange={handleChange('bio')}
            disabled={!isEditing}
            fullWidth
            multiline
            rows={3}
            placeholder="Tell us about yourself..."
            size="small"
          />

          <TextField
            label="Location"
            value={profileData.location}
            onChange={handleChange('location')}
            disabled={!isEditing}
            fullWidth
            placeholder="City, Country"
            size="small"
          />

          <TextField
            label="Website"
            value={profileData.website}
            onChange={handleChange('website')}
            disabled={!isEditing}
            fullWidth
            placeholder="https://yourwebsite.com"
            size="small"
          />

          <TextField
            label="Favorite Brands"
            value={profileData.favoriteBrands}
            onChange={handleChange('favoriteBrands')}
            disabled={!isEditing}
            fullWidth
            placeholder="Nike, Adidas, Supreme..."
            size="small"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileEditor;
