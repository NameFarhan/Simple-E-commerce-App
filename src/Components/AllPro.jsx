import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AllPro = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleMoreDet = () => {
    navigate('/MoreDet');
  };

  useEffect(() => {
    // Fetch the products from the API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Function to truncate title to first three words
  const getTruncatedTitle = (title) => {
    const words = title.split(' ');
    if (words.length <= 3) return title;
    return words.slice(0, 3).join(' ') + '...';
  };

  return (
    <Box>
      <Typography
        sx={{
          color: "#3A3A3A",
          fontSize: "40px",
          fontWeight: "1000",
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        Our Products
      </Typography>

      <Grid container>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Box
              sx={{
                width: "285px",
                height: "446px",
                margin: "16px auto",
              }}
            >
              <Box sx={{ height: "301px" }}>
                <Box
                  component="img"
                  sx={{
                    height: '100%',
                    width: '100%',
                    display: 'block',
                    margin: 'auto'
                  }}
                  alt={product.title}
                  src={product.image}
                />
              </Box>

              <Box
                sx={{
                  height: "145px",
                  padding: "8px",
                  marginTop:'10px'
                }}
              >
                <Typography sx={{ textAlign: 'center',fontWeight:'700',fontSize:'17px' }}>
                  {getTruncatedTitle(product.title)}
                </Typography>
                <Button onClick={handleMoreDet} sx={{margin:' 20px auto',display:'block'}}>Click for more</Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllPro;
