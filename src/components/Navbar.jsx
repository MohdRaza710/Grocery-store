import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
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
            className="width-20"
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
                <Link to="/" sx={{ display: { xs: 'block', sm: 'none' } }}>
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
                <div className="hidden sm:flex gap-2">
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
                        className="font-bold text-yellow-400 rounded-lg mr-5 flex items-center gap-1 transition-colors duration-200 px-4 py-2
                         hover:bg-yellow-400 hover:text-white"
                    >
                        <ShoppingCartIcon />
                        ({cartCount})
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
