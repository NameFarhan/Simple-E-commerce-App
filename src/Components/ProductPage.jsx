import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularUnderLoad from "../MuiComponents/Loading";
import { Box, Button, Typography } from "@mui/material";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (response.data && response.data.id) {
          setProduct(response.data);
          setError(null);
        } else {
          setError("Product not found");
          setProduct(null);
        }
      })
      .catch((error) => {
        setError("Error fetching product !");
        setProduct(null);
      });
  }, [id]);

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "40px",
        }}
      >
        {error}
      </Box>
    );
  }

  if (!product) {
    return (
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularUnderLoad />
      </Box>
    );
  }

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex"
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "100%",
            backgroundColor: "#E7E390",
            clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)',

            }}
        >
          {/* image box */}
          <Box sx={{padding:'100px 17px 31px 100px'}}>
            <Box
              component="img"
              sx={{
                height: 433,
                width: 400,
                zIndex:1000,
                mixBlendMode: 'multiply' // or 'darken', 'screen' depending on your needs
              }}
              alt="Product image"
              src={product.image}
            />
          </Box>
        </Box>


        <Box sx={{ width: "50%",display:'flex',justifyContent:'center',alignItems:'center',height:'100vh' }}>
          <Box>
          <Typography sx={{fontSize:'30px',fontWeight:'1000',color:'#000',marginBottom:'16px'}}>{product.title}</Typography>
          <Typography sx={{marginBottom:'16px'}}>{product.description}</Typography>
          <Typography sx={{color:'#E7E390',fontSize:'36px',marginBottom:'18px'}}>${product.price}</Typography>
          <Button sx={{width:'365px',height:'56px',color:'#fff',fontWeight:'700'}} variant="contained">Add to cart</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductPage;
