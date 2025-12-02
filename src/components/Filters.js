import React, { useState } from 'react';
import { Box, FormControl, Select, MenuItem, Typography } from '@mui/material';

const Filters = ({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');

  const categories = [
    'All Categories',
    'Sweatshirts',
    'Hoodies', 
    'T-shirts',
    'Cargos',
    'Joggers',
    'Crop-tops',
    'Utility Vests',
    'Corsets',
    'Sneakers',
    'Jackets',
    'Pants'
  ];

  const budgetRanges = [
    'All Budgets',
    'Under $50',
    '$50 - $100',
    '$100 - $200',
    '$200 - $500',
    'Over $500'
  ];

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(value);
    if (onFilterChange) {
      onFilterChange({ category: value, budget });
    }
  };

  const handleBudgetChange = (event) => {
    const value = event.target.value;
    setBudget(value);
    if (onFilterChange) {
      onFilterChange({ category, budget: value });
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <Typography variant="body2" sx={{ color: '#666' }}>
        Filters:
      </Typography>
      
      <FormControl size="small" sx={{ minWidth: 160 }}>
        <Select
          value={category}
          onChange={handleCategoryChange}
          displayEmpty
          sx={{
            borderRadius: '999px',
            backgroundColor: '#ffffff',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#D100D1',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#E500A4',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#6A00F4',
            },
            '& .MuiSelect-select': {
              borderRadius: '999px',
              paddingY: 0.5,
            },
          }}
        >
          <MenuItem value="" disabled>
            <em>Category</em>
          </MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 160 }}>
        <Select
          value={budget}
          onChange={handleBudgetChange}
          displayEmpty
          sx={{
            borderRadius: '999px',
            backgroundColor: '#ffffff',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#D100D1',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#E500A4',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#6A00F4',
            },
            '& .MuiSelect-select': {
              borderRadius: '999px',
              paddingY: 0.5,
            },
          }}
        >
          <MenuItem value="" disabled>
            <em>Budget</em>
          </MenuItem>
          {budgetRanges.map((range) => (
            <MenuItem key={range} value={range}>
              {range}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filters;
