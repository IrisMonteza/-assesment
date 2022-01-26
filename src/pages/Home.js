import React from 'react';
import { Box } from '@mui/material';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import '../styles/style.css';

const Home = () => {
  return (
    <div className="home">
      <Box sx={{ display: 'flex', p: 1, m: 1 }}>
        <NavBar />
      </Box>
      <Box sx={{ display: 'flex', p: 1, mt: 8, ml: 1, mr: 1 }}>
        <ProductCard />
      </Box>
    </div>
  );
};

export default Home;
