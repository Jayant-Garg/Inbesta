import React, { useState } from 'react';
import { Box, Typography, Button, Alert, IconButton, Paper } from '@mui/material';
import { CloudUpload, Close, Lock } from '@mui/icons-material';

const ImageUpload = ({ onImageSelect, maxSize = 5 }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [error, setError] = useState('');

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    
    if (!file) return;
    
    // Check file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file (JPG, PNG, etc.)');
      return;
    }
    
    // Check file size (MB)
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSize) {
      setError(`File size must be less than ${maxSize}MB`);
      return;
    }
    
    setError('');
    setSelectedImage(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setSelectedImage(null);
    setPreviewUrl('');
    setError('');
    if (onImageSelect) {
      onImageSelect(null);
    }
  };

  const handleConfirm = () => {
    if (selectedImage && onImageSelect) {
      onImageSelect(selectedImage);
    }
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <Lock sx={{ fontSize: 16, color: '#00C851' }} />
        <Typography variant="body2" sx={{ color: '#666' }}>
          Your privacy is safe with us. Images are used only for review verification.
        </Typography>
      </Box>

      {!previewUrl ? (
        <Paper
          sx={{
            borderRadius: 3,
            p: 3,
            textAlign: 'center',
            cursor: 'pointer',
            background: 'radial-gradient(circle at top left, rgba(148,163,184,0.35), rgba(15,23,42,0.95))',
            border: '1px dashed rgba(229,231,235,0.7)',
            '&:hover': {
              borderColor: '#E500A4',
              boxShadow: '0 16px 40px rgba(15,23,42,0.7)',
            }
          }}
          onClick={() => document.getElementById('image-upload').click()}
        >
          <CloudUpload sx={{ fontSize: 40, color: '#E5E7EB', mb: 1.5 }} />
          <Typography variant="body1" sx={{ mb: 0.5, color: '#E5E7EB', fontWeight: 500 }}>
            Click to upload receipt image
          </Typography>
          <Typography variant="caption" sx={{ color: '#cbd5f5' }}>
            Supports: JPG, PNG, GIF (Max {maxSize}MB)
          </Typography>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            style={{ display: 'none' }}
          />
        </Paper>
      ) : (
        <Paper sx={{ p: 2, position: 'relative', borderRadius: 3, backgroundColor: 'rgba(15,23,42,0.9)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <img
              src={previewUrl}
              alt="Receipt preview"
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                {selectedImage.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {(selectedImage.size / (1024 * 1024)).toFixed(2)} MB
              </Typography>
            </Box>
            <IconButton onClick={handleRemove} size="small">
              <Close />
            </IconButton>
          </Box>
          
          <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
            <Button
              size="small"
              onClick={handleConfirm}
              variant="contained"
              sx={{
                backgroundColor: '#00C851',
                '&:hover': {
                  backgroundColor: '#00AA00'
                }
              }}
            >
              Use This Image
            </Button>
            <Button
              size="small"
              onClick={handleRemove}
              variant="outlined"
            >
              Remove
            </Button>
          </Box>
        </Paper>
      )}

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default ImageUpload;
