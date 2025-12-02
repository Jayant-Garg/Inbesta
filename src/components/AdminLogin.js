import React, { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, Typography, Alert } from '@mui/material';
import { Lock } from '@mui/icons-material';

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Hardcoded admin credentials
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setTimeout(() => {
        onLogin(true);
        setLoading(false);
      }, 500);
    } else {
      setError('Invalid credentials');
      setLoading(false);
    }
  };

  const handleChange = (field) => (e) => {
    setCredentials({
      ...credentials,
      [field]: e.target.value
    });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f4f6',
        px: 2,
      }}
    >
      <Card sx={{ maxWidth: 420, width: '100%', boxShadow: '0 18px 40px rgba(15,23,42,0.12)', borderRadius: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Lock sx={{ fontSize: 48, color: '#6A00F4', mb: 2 }} />
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
              Admin Login
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Inbesta Admin Dashboard
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              value={credentials.username}
              onChange={handleChange('username')}
              margin="normal"
              required
              autoFocus
            />
            
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={credentials.password}
              onChange={handleChange('password')}
              margin="normal"
              required
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              className="primary-button"
              sx={{ mt: 3, py: 1.5 }}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AdminLogin;
