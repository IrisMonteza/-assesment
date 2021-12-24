import "./ProductCard.css";
import React, { useState, useEffect } from "react";
import { /*BrowserRouter as Router, Route,*/ Link } from "react-router-dom";
import {
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
function ProductCard() {
  // https://fakestoreapi.com/products?limit=5
  const [fake, setfake] = useState([]);
  // console.log(fake);
  useEffect(() => {
    const fakestore = async () => {
      const response = await fetch("https://fakestoreapi.com/products?");
      // console.log(response);
      const jsonData = await response.json();
      // console.log(jsonData);
      setfake(jsonData);
    };
    fakestore();
  }, []);

  return (
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
              // textOverflow: "initial",
              // overflow: "visible",
              whiteSpace: "normal",
            }}
            id={values.id}
            title={values.title}
            position="below"
          />
          <Button component={Link} to="/ProductDetail" variant="contained">
            Go to detail
          </Button>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ProductCard;
