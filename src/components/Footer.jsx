import React from 'react';
import { Box, Typography, Link, keyframes } from '@mui/material';

// Define keyframes for animation
const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Footer = () => {
        return (
                <Box
                        component="footer"
                        sx={{
                                backgroundColor: '#2E3B55',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                                borderRadius: '8px',
                                mt: '20px',
                                padding: '20px',
                                textAlign: 'center',
                                borderTop: '1px solid #ddd',
                                color: '#FFD700',
                                animation: `${fadeIn} 1s ease-in-out`,
                        }}
                >
                        <Box sx={{ marginBottom: '15px', animation: `${fadeIn} 1.2s ease-in-out` }}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Contact Us
                                </Typography>
                                <Typography>Email: contact@grocerystore.com</Typography>
                                <Typography>Phone: +1 (555) 123-4567</Typography>
                        </Box>
                        <Box sx={{ marginBottom: '15px', animation: `${fadeIn} 1.4s ease-in-out` }}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Quick Links
                                </Typography>
                                <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        <li>
                                                <Link href="/about" underline="hover" sx={{ color: '#FFD700', transition: 'color 0.3s', '&:hover': { color: '#FFA500' } }}>
                                                        About Us
                                                </Link>
                                        </li>
                                        <li>
                                                <Link href="/faq" underline="hover" sx={{ color: '#FFD700', transition: 'color 0.3s', '&:hover': { color: '#FFA500' } }}>
                                                        FAQ
                                                </Link>
                                        </li>
                                        <li>
                                                <Link href="/support" underline="hover" sx={{ color: '#FFD700', transition: 'color 0.3s', '&:hover': { color: '#FFA500' } }}>
                                                        Support
                                                </Link>
                                        </li>
                                </Box>
                        </Box>
                        <Box sx={{ marginBottom: '15px', animation: `${fadeIn} 1.6s ease-in-out` }}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Follow Us
                                </Typography>
                                <Link
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        underline="hover"
                                        sx={{ color: '#FFD700', transition: 'color 0.3s', '&:hover': { color: '#FFA500' } }}
                                >
                                        Facebook
                                </Link>{' '}
                                |{' '}
                                <Link
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        underline="hover"
                                        sx={{ color: '#FFD700', transition: 'color 0.3s', '&:hover': { color: '#FFA500' } }}
                                >
                                        Twitter
                                </Link>{' '}
                                |{' '}
                                <Link
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        underline="hover"
                                        sx={{ color: '#FFD700', transition: 'color 0.3s', '&:hover': { color: '#FFA500' } }}
                                >
                                        Instagram
                                </Link>
                        </Box>
                </Box>
        );
};

export default Footer;