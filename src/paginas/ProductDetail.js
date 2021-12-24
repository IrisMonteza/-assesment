import { Button } from "@mui/material";
import { /*BrowserRouter as Router, Route,*/ Link } from "react-router-dom";

function ProductDetail() {
  return (
    <>
      <Button component={Link} to="/" variant="contained">
        Go to Home
      </Button>
    </>
  );
}

export default ProductDetail;
