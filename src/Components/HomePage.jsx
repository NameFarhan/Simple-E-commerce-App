import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate("/allpro");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "rgba(61, 61, 61, 0.25)",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: "643px",
            height: "443px",
            padding: "62px 43px 37px 39px",
            backgroundColor: "#FFF3E3",
          }}
        >
          <Typography
            sx={{ fontSize: "16px", fontWeight: "700", color: "#333333" }}
          >
            New Arrival
          </Typography>
          <Typography
            sx={{
              fontSize: "52px",
              fontWeight: "1000",
              color: "#B88E2F",
              margin: "15px 0",
              lineHeight: "65px",
            }}
          >
            Discover Our <br />  New Collection
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "500", color: "#333333" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </Typography>

          <Button
            sx={{
              width: "222px",
              backgroundColor: "#B88E2F",
              height: "74px",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "800",
              marginTop: "20px",
              "&:hover": { backgroundColor: "#B88E2F" },
            }}
            variant="contained"
            onClick={handleBuyNowClick}
          >
            BUY NOW
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
