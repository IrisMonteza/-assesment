import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import { Box } from "@mui/material";
function Home() {
  return (
    <div style={{ width: "100%", height: "100vh" /*, background: "black"*/ }}>
      <Box sx={{ display: "flex", p: 1, m: 1 }}>
        <NavBar />
      </Box>
      <Box sx={{ display: "flex", p: 1, m: 1 }}>
        <ProductCard />
      </Box>
    </div>
  );
}

export default Home;
