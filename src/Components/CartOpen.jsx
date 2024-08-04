import { Box, Typography } from '@mui/material';
import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartOpen = ({ cartItems }) => {

  const getTruncatedTitle = (title) => {
    const words = title.split(" ");
    if (words.length <= 3) return title;
    return words.slice(0, 3).join(" ") + "...";
  };

  return (
    <>
      <Box sx={{ width: '350px', height: '350px', borderRadius: '10px', padding: '25px 25px' }}>
        <Box sx={{ display: 'flex', marginBottom: '14px', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '24px', fontWeight: '700' }}>Shopping Cart</Typography>
          <ShoppingCartOutlinedIcon />
        </Box>
        {cartItems.length === 0 ? (
          <Typography sx={{ textAlign: 'center', marginTop: '15px', fontWeight: '100' }}>No items in the cart.</Typography>
        ) : (
          cartItems.map((item, index) => (
            <Box key={index} sx={{ marginBottom: '18px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '8px' }}>
              <img
                style={{ height: 40, width: 40, marginRight: '10px' }}
                alt="product"
                src={item.image}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '17px' }}>{getTruncatedTitle(item.title)}</Typography>
                <Typography sx={{ fontSize: '14px', color: '#B88E2F', fontWeight: '1000' }}>${item.price}</Typography>
              </Box>
            </Box>
          ))
        )}
      </Box>
    </>
  );
}

export default CartOpen;
