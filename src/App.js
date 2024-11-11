import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cate from './components/categories'
import Grid from './components/grid'
import Card from './components/card'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MySettings from './pages/MySettings'
import MyReviews from './pages/MyReviews'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/mysettings' element={<MySettings />} />
        <Route path='/myreviews' element={<MyReviews />} />
        <Route path='/' element={
          <>
            <Hero />
            <Cate />
            <Grid />
            {/* <Card /> */}
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
