import "./ProductCard.css";
import React, { useState, useEffect } from "react";
import { /*BrowserRouter as Router, Route,*/ Link } from "react-router-dom";
import {
  Button,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  LinearProgress,
} from "@mui/material";
import axios from "axios";
function ProductCard() {
  // https://fakestoreapi.com/products?limit=5
  const [fake, setfake] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // console.log(fake);
  useEffect(() => {
    const fakestore = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setfake(response.data);
      setIsLoading(false);
    };
    fakestore();
  }, []);

  return isLoading ? (
    <Container sx={{ width: "40%", paddingTop: 55 }}>
      <LinearProgress />
    </Container>
  ) : (
    <ImageList
      sx={{
        maxwidth: "1300px",
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
      cols={4}
    >
      {fake.map((values) => (
        <ImageListItem
          sx={{
            width: "20%",
            margin: "10px",
            padding: "20px",
            border: 1,
            boxShadow: "2px 2px 2px ",
            textAlign: "center",
            justifyContent: "space-around",
          }}
        >
          <img
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain",
              margin: "auto",
            }}
            src={`${values.image}?w=248&fit=crop&auto=format`}
            alt={values.title}
          />
          <ImageListItemBar
            sx={{
              whiteSpace: "normal",
            }}
            id={values.id}
            title={values.title}
            position="below"
          />
          <Button component={Link} to={`${values.id}`} variant="contained">
            GO TO DETAILS
          </Button>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ProductCard;
