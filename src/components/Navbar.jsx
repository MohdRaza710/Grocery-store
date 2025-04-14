import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


function Navbar({ cartCount }) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Home', 'Products', 'About'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton component="a" to={`/${text.toLowerCase()}`}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );



    return (
        <AppBar position="static" sx={{ backgroundColor: '#2E3B55', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', borderRadius: '8px' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/home" sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <Box
                        component="img"
                        src="https://i.ibb.co/PZQdxx6t/Chat-GPT-Image-Apr-14-2025-03-59-42-PM.png"
                        alt="Logo"
                        sx={{ height: 40, borderRadius: '8px' }}
                    />
                </Link>
                <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', flexGrow: 1 }}>
                    <Box
                        component="span"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            ml: 1,
                            color: '#FFD700',
                        }}
                    >
                        Grocery Store
                    </Box>
                </Box>
                <Button
                    color="inherit"
                    href="/cart"
                    sx={{
                        display: { xs: 'flex', sm: 'none' },
                        fontWeight: 'bold',
                        color: '#FFD700',
                    }}
                >
                    <ShoppingCartIcon /> ({cartCount})
                </Button>
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon sx={{ fontSize: 32 }} />
                </IconButton>

                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    PaperProps={{ sx: { borderRadius: '8px' } }}
                >
                    {drawerContent}
                </Drawer>

                {/* Desktop Buttons */}
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
                    <Link color="inherit" to="/" sx={{ fontWeight: 'bold', color: '#FFD700', borderRadius: '8px' }}>Home</Link>
                    <Link color="inherit" to="/home" sx={{ fontWeight: 'bold', color: '#FFD700', borderRadius: '8px' }}>Products</Link>
                    <Link color="inherit" to="/about" sx={{ fontWeight: 'bold', color: '#FFD700', borderRadius: '8px' }}>About</Link>
                    <Link color="inherit" to="/cart" sx={{ mr: '5', fontWeight: 'bold', color: '#FFD700', borderRadius: '8px' }}>
                        <ShoppingCartIcon /> ({cartCount})
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
