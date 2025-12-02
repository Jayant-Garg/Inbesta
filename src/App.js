import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandGrid from './components/BrandGrid'
import Filters from './components/Filters'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MySettings from './pages/MySettings'
import MyReviews from './pages/MyReviews'
import Admin from './pages/Admin'
import { Box } from '@mui/material';
import { useState } from 'react';


function App() {
  const [user, setUser] = useState(null);

  const handleUserChange = (currentUser) => {
    setUser(currentUser);
  };

  return (
    <Router>
      <Navbar onUserChange={handleUserChange} />
      <Routes>
        <Route path='/mysettings' element={<MySettings user={user} />} />
        <Route path='/myreviews' element={<MyReviews user={user} />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/' element={
          <>
            <Hero />
            <Box sx={{ px: 3, py: 2 }}>
              <Filters />
            </Box>
            <BrandGrid user={user} />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
