import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
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
            sx={{ width: 250 , height: '100%', backgroundColor: '#2E3B55', color: '#FFD700', padding: 2, borderRadius: '8px'  }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            {['Home', 'Products', 'About'].map((text) => (
                <Link key={text} to={`/${text.toLowerCase()}`}>
                    <ListItemText primary={text} />
                </Link>
            ))}
        </Box>
    );



    return (
        <AppBar position="static" sx={{ backgroundColor: '#2E3B55', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', borderRadius: '8px' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Left: Logo (mobile only) */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Box
                            component="img"
                            src="https://i.ibb.co/PZQdxx6t/Chat-GPT-Image-Apr-14-2025-03-59-42-PM.png"
                            alt="Logo"
                            sx={{ height: { xs: 40, sm: 50 }, borderRadius: '8px' }}
                        />
                    </Link>
                    <Box
                        component="span"
                        sx={{
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 'bold',
                            fontSize: { xs: '1rem', sm: '1.25rem' },
                            color: '#FFD700',
                            ml:2
                        }}
                    >
                        Grocery Store
                    </Box>
                </Box>

                {/* Right: Cart and Menu Icon (mobile only) */}
                <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', gap: 1 }}>
                    <Box
                        component={Link}
                        to="/cart"
                        style={{ textDecoration: 'none' }}
                        sx={{
                            fontWeight: 'bold',
                            color: '#FDC700',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <ShoppingCartIcon />
                        ({cartCount})
                    </Box>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon sx={{ fontSize: 32 }} />
                    </IconButton>
                </Box>

                {/* Drawer for nav items */}
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    PaperProps={{ sx: { borderRadius: '8px' } }}
                >
                    {drawerContent}
                </Drawer>

                {/* Desktop Nav Buttons */}
                <Box className="hidden sm:flex gap-2">
                    <Link
                        to="/home"
                        className="font-bold text-yellow-400 rounded-lg px-4 py-2 hover:text-white transition-colors duration-200 hover:bg-yellow-400"
                    >
                        Home
                    </Link>
                    <Link
                        to="/products"
                        className="font-bold text-yellow-400 rounded-lg px-4 py-2 hover:text-white transition-colors duration-200 hover:bg-yellow-400"
                    >
                        Products
                    </Link>
                    <Link
                        to="/about"
                        className="font-bold text-yellow-400 rounded-lg px-4 py-2 hover:text-white transition-colors duration-200 hover:bg-yellow-400"
                    >
                        About
                    </Link>
                    <Link
                        to="/cart"
                        className="font-bold text-yellow-400 rounded-lg mr-5 flex items-center gap-1 transition-colors duration-200 px-4 py-2 hover:bg-yellow-400 hover:text-white"
                    >
                        <ShoppingCartIcon />
                        ({cartCount})
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>

    );
}

export default Navbar;
