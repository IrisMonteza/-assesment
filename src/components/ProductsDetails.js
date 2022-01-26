import { React, useEffect, useState } from 'react';
import axios from 'axios';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  LinearProgress,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';

const ProductsDetails = () => {
  const [fake, setfake] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fakestore = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products${window.location.pathname}`
      );
      setfake(response.data);
      setIsLoading(false);
    };
    fakestore();
  }, []);

  return isLoading ? (
    <Container sx={{ width: '40%', paddingTop: 55 }}>
      <LinearProgress />
    </Container>
  ) : (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3} sx={{ paddingTop: 1 }}>
        <Card elevation={0} sx={{ maxWidth: 950, paddingTop: 1 }}>
          <CardMedia
            component="img"
            height="220"
            image={fake.image}
            alt={fake.title}
            sx={{ objectFit: 'contain', paddingBottom: 1 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {fake.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {fake.description}
            </Typography>
            <br />
            <Typography variant="body2" color="text.secondary">
              {`Category: ${fake.category}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Rating: ${fake.rating.rate}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Stock: ${fake.rating.count}`}
            </Typography>
            <br />
            <Typography variant="h6" component="div">
              {`Price: $${fake.price}`}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Button component={Link} to="/" variant="contained">
        GO TO HOME
      </Button>
    </Grid>
  );
};

export default ProductsDetails;
