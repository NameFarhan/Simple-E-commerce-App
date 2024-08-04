import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CircularUnderLoad from "../MuiComponents/Loading";
import { Box, Button, Typography, Dialog, DialogContent } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartOpen from "./CartOpen";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

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

  const handleBack = () => {
    navigate(`/allpro`);
  };

  const handleCart = () => {
    setOpenCart(true);
  };

  const handleCloseCart = () => {
    setOpenCart(false);
  };

  const handleAddToCart = () => {
    // Check if the product is already in the cart
    const alreadyInCart = cartItems.some((item) => item.id === product.id);
    if (!alreadyInCart) {
      setCartItems([...cartItems, product]);
    }
  };

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
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "100%",
            backgroundColor: "#E7E390",
            clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)",
          }}
        >
          {/* image box */}
          <Box sx={{ padding: "100px 17px 31px 100px" }}>
            <Box
              component="img"
              sx={{
                height: 433,
                position: "relative",
                right: "50px",
                width: 400,
                zIndex: 1000,
                mixBlendMode: "multiply", // or 'darken', 'screen' depending on your needs
              }}
              alt="Product image"
              src={product.image}
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "1000",
                color: "#000",
                marginBottom: "16px",
              }}
            >
              {product.title}
            </Typography>
            <Typography sx={{ marginBottom: "16px" }}>
              {product.description}
            </Typography>
            <Typography
              sx={{ color: "#E7E390", fontSize: "36px", marginBottom: "18px" }}
            >
              ${product.price}
            </Typography>
            <Button
              sx={{
                width: "365px",
                height: "56px",
                backgroundColor: "#E7E390",
                boxShadow: "none",
                fontWeight: "1000",
                color: "#000",
                "&:hover": {
                  backgroundColor: "#E7E390",
                  color: "#000",
                  boxShadow: "none",
                },
              }}
              variant="contained"
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            onClick={handleBack}
            sx={{
              fontSize: "20px",
              position: "fixed",
              backgroundColor: "rgb(0, 0, 0, 0.4)",
              borderRadius: "0",
              color: "#ffff",
              fontWeight: "700",
              margin: "4px 0",
              left: "10px", // Left positioning for the "GO BACK" button
              top: "10px",  // Top positioning
              "&:hover": {
                backgroundColor: "rgb(0, 0, 0, 0.4)",
                color: "#ffff",
              },
            }}
          >
            GO BACK
          </Button>
          <Button
            onClick={handleCart}
            sx={{
              position: "fixed",
              top: "10px",   // Top positioning for the shopping cart icon
              right: "10px", // Right positioning
              backgroundColor: "transparent", // Transparent background
              "&:hover": {
                backgroundColor: "transparent", // No hover background
              },
            }}
          >
            <ShoppingCartOutlinedIcon sx={{ color: "#000", fontSize: "30px" }} />
          </Button>
        </Box>

        {/* Dialog Box for Cart */}
        <Dialog
          open={openCart}
          onClose={handleCloseCart}
            sx= {{
              position: 'fixed',
              top: '0px',  // Adjust top position as needed
              right: '0px', // Adjust right position as needed
              margin: 0,
              borderRadius: "0px",
            }}
        >
            <CartOpen cartItems={cartItems} />
     </Dialog>
      </Box>
    </>
  );
};

export default ProductPage;
