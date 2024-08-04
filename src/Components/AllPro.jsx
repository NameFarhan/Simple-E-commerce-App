import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircularUnderLoad from "../MuiComponents/Loading"; // Assuming you have a loading component

const AllPro = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state
  const navigate = useNavigate();
  const [error, setError] = useState(null)

  const handleMoreDet = (id) => {
    navigate(`/${id}`);
  };

  const handleBack = () => {
    navigate(`/`); // Navigate to the homepage
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Set loading to false in case of an error
        setError(true)
      });
  }, []);

  const getTruncatedTitle = (title) => {
    const words = title.split(" ");
    if (words.length <= 3) return title;
    return words.slice(0, 3).join(" ") + "...";
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#3A3A3A",
            fontSize: "40px",
            fontWeight: "1000",
            display: "block",
            margin: "auto",
            paddingTop: "15px",
          }}
        >
          Our Products
        </Typography>
        <Button
          onClick={handleBack}
          sx={{
            fontSize: "20px",
            position: "fixed",
            backgroundColor: "rgb(0, 0, 0, 0.4)",
            borderRadius: "0",
            color: "#ffff",
            fontWeight: "700",
            left: "10px",
            "&:hover": {
              backgroundColor: "rgb(0, 0, 0, 0.4)",
              color: "#ffff",
            },
          }}
        >
          GO BACK
        </Button>
      </Box>

      {error ? <Typography sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'80vh',fontSize:'30px',fontWeight:'1000'}}>Sorry It may be a network issue</Typography> : ''}

      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "75vh",
          }}
        >
          <CircularUnderLoad />
        </Box> // Replace this with your loading component or message
      ) : (
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
                      height: "100%",
                      width: "100%",
                      display: "block",
                      margin: "auto",
                    }}
                    alt={product.title}
                    src={product.image}
                  />
                </Box>

                <Box
                  sx={{
                    height: "145px",
                    padding: "8px",
                    marginTop: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: "17px",
                    }}
                  >
                    {getTruncatedTitle(product.title)}
                  </Typography>
                  <Button
                    onClick={() => handleMoreDet(product.id)}
                    sx={{
                      margin: "20px auto",
                      transition: "all .3s ease",
                      color:'#E7E390',
                      backgroundColor: "rgb(0, 0, 0, 0.4)",
                      borderRadius:'0', 
                      display: "block",
                      "&:hover": {
                        backgroundColor: "rgb(0, 0, 0, 0.4)",
                        color: "#fff",
                        fontWeight: "1000",
                      },
                    }}
                  >
                    Click for Details
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default AllPro;
