import React, { useState, useEffect, useRef } from 'react';
import { Box, TextField, Paper, List, ListItem, Typography } from '@mui/material';

const brandData = [
  'Bluorng', 'Snitch', 'Bearhouse', 'Nike', 'Adidas', 'Puma', 
  'Zara', 'H&M', 'Uniqlo', 'Supreme', 'Off-White', 'Palace',
  'Stussy', 'Carhartt', 'The North Face', 'Patagonia', 'Gucci',
  'Prada', 'Balenciaga', 'Versace'
];

const SearchBar = ({ onSearch, onFilter, variant = 'default' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = brandData.filter(brand =>
        brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    if (onSearch) {
      onSearch(suggestion);
    }
  };

  const isNavbar = variant === 'navbar';

  return (
    <Box ref={searchRef} sx={{ position: 'relative', width: '100%' }}>
      <TextField
        fullWidth
        placeholder="Search by category, brand, reviews"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: isNavbar ? '999px' : '8px',
            backgroundColor: isNavbar ? 'rgba(15,23,42,0.9)' : '#ffffff',
            border: isNavbar ? '1px solid rgba(148,163,184,0.6)' : '2px solid #D100D1',
            paddingRight: isNavbar ? '8px' : undefined,
            '& input': {
              color: isNavbar ? '#e5e7eb' : 'inherit',
            },
            '&::placeholder': {
              color: isNavbar ? '#9ca3af' : '#6b7280',
            },
            '&:hover': {
              borderColor: isNavbar ? 'rgba(209,213,219,0.9)' : '#E500A4',
            },
            '&.Mui-focused': {
              borderColor: isNavbar ? '#E500A4' : '#6A00F4',
              boxShadow: isNavbar ? '0 0 0 1px rgba(229,0,164,0.6)' : 'none',
            },
          },
          '& .MuiInputBase-input': {
            paddingY: isNavbar ? 0.9 : 1,
            fontSize: isNavbar ? '0.9rem' : '1rem',
          },
        }}
      />
      
      {showSuggestions && suggestions.length > 0 && (
        <Paper
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 1000,
            mt: 1,
            maxHeight: 200,
            overflow: 'auto',
          }}
        >
          <List>
            {suggestions.map((suggestion, index) => (
              <ListItem
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                  },
                }}
              >
                <Typography>{suggestion}</Typography>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default SearchBar;
