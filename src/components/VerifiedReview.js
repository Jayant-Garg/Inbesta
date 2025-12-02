import React, { useState } from 'react';
import { Box, Typography, Alert, Chip } from '@mui/material';
import { CloudUpload, Lock } from '@mui/icons-material';
import ImageUpload from './ImageUpload';

const VerifiedReview = ({ onVerifiedSubmit }) => {
  const [showProofInput, setShowProofInput] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (imageFile) => {
    setSelectedImage(imageFile);
    if (imageFile && onVerifiedSubmit) {
      onVerifiedSubmit({
        proofOfPurchase: imageFile,
        verified: true,
        timestamp: new Date().toISOString()
      });
    }
  };

  return (
    <Box
      sx={{
        mb: 3,
        p: 2.2,
        borderRadius: 3,
        background: 'linear-gradient(135deg, rgba(15,23,42,0.85), rgba(30,64,175,0.75))',
        border: '1px solid rgba(148,163,184,0.4)',
        boxShadow: '0 14px 35px rgba(15,23,42,0.55)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Chip 
            label="VERIFIED" 
            size="small" 
            sx={{ 
              backgroundColor: '#00C851', 
              color: 'white',
              fontWeight: 'bold'
            }} 
          />
          <Typography variant="body2" sx={{ fontWeight: 'medium', color: '#e5e7eb' }}>
            Add proof of purchase for verified review
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <Lock sx={{ fontSize: 14, color: '#00C851' }} />
        <Typography variant="caption" sx={{ color: '#cbd5f5' }}>
          Your privacy is safe with us. Images are used only for review verification and never shared publicly.
        </Typography>
      </Box>

      {!showProofInput ? (
        <Box
          sx={{
            border: '2px dashed #D100D1',
            borderRadius: '8px',
            p: 2,
            textAlign: 'center',
            cursor: 'pointer',
            backgroundColor: '#fafafa',
            '&:hover': {
              backgroundColor: '#f5f5f5',
              borderColor: '#E500A4'
            }
          }}
          onClick={() => setShowProofInput(true)}
        >
          <CloudUpload sx={{ fontSize: 32, color: '#6A00F4', mb: 1 }} />
          <Typography variant="body2">
            Click to upload receipt image
          </Typography>
        </Box>
      ) : (
        <ImageUpload onImageSelect={handleImageSelect} />
      )}
    </Box>
  );
};

export default VerifiedReview;
