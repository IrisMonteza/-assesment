import NavBar from "../components/NavBar";
import ProductsDetails from "../components/ProductsDetails";
import { Box } from "@mui/material";

function ProductDetail() {
  return (
    <div style={{ width: "100%", height: "100vh" /*, background: "black"*/ }}>
      <Box sx={{ display: "flex", p: 1, m: 1 }}>
        <NavBar />
      </Box>
      <Box sx={{ display: "flex", p: 1, m: 1 }}>
        <ProductsDetails />
      </Box>
    </div>
  );
}

export default ProductDetail;
