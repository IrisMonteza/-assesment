import React from 'react';
import { Box } from '@mui/material';
import NavBar from '../components/NavBar';
import ProductsDetails from '../components/ProductsDetails';
import '../styles/style.css';

const ProductDetail = () => {
  return (
    <div className="product_detail">
      <Box sx={{ display: 'flex', p: 1, m: 1 }}>
        <NavBar />
      </Box>
      <Box sx={{ display: 'flex', p: 1, mt: 10, ml: 1, mr: 1 }}>
        <ProductsDetails />
      </Box>
    </div>
  );
};

export default ProductDetail;
