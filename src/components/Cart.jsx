import React from 'react';
import { Box, Typography, List, ListItem, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Cart({ cartItems, setCartItems }) {

    const handleRemoveFromCart = (productId) => {
        // Logic to remove item from cart
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
        // Update the cartItems state and localStorage
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        console.log('Updated Cart Items:', updatedCartItems);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 2,
            mt: 5,
            bgcolor: '#f5f5f5',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            <Typography sx={{ display: 'flex' }} variant="h5" gutterBottom>Shopping Cart</Typography>
            {cartItems.length === 0 ? (
                <Typography>No items in cart.</Typography>
            ) : (
                <List sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: 2,
                }}>
                    {cartItems.map((product) => (
                        <ListItem
                            key={product.id}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '145px',
                                mb: 2,
                            }}
                        >
                            <Card
                                sx={{
                                    border: '1px solid #ccc',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                                    },}}
                            >
                                <CardContent>
                                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                                        {product.name}
                                    </Typography>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{
                                            borderRadius: '8px',
                                            margin: '10px 0',
                                        }}
                                    />
                                    <Typography color="text.secondary" sx={{ fontSize: '1rem' }}>
                                        Price: ${product.price.toFixed(2)}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button
                                        variant="contained"
                                        onClick={() => handleRemoveFromCart(product.id)}
                                        color="primary"
                                        startIcon={<ShoppingCartIcon />}
                                        style={{ marginTop: "10px" }}
                                    >
                                        Remove
                                    </Button>
                                </CardActions>
                            </Card>
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
}

export default Cart;
