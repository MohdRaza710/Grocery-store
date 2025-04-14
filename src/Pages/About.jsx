import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const staggerContainer = {
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    };

    return (
        <Container>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.div variants={fadeIn}>
                    <Typography
                        variant="h1"
                        gutterBottom
                        sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: 'primary.main',
                        }}
                    >
                        About Us
                    </Typography>
                </motion.div>
                <motion.div variants={fadeIn}>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{
                            textAlign: 'justify',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            color: 'primary',
                        }}
                    >
                        Welcome to our <strong>Grocery Store</strong>! We are committed to
                        providing the best quality products at affordable
                        prices.
                    </Typography>
                </motion.div>
                <motion.div variants={fadeIn}>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{
                            textAlign: 'justify',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            color: 'primary',
                        }}
                    >
                        Our mission is to make grocery shopping a hassle-free
                        and enjoyable experience for everyone. We carefully
                        select our products to ensure they meet the highest
                        standards of quality and freshness.
                    </Typography>
                </motion.div>
                <motion.div variants={fadeIn}>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{
                            textAlign: 'justify',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            color: 'primary',
                        }}
                    >
                        Whether you're looking for fresh produce, pantry
                        staples, or specialty items, we've got you covered. Our
                        friendly staff is always here to assist you and make
                        your shopping experience pleasant.
                    </Typography>
                </motion.div>
                <motion.div variants={fadeIn}>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{
                            textAlign: 'justify',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            color: 'primary',
                        }}
                    >
                        Thank you for choosing our <strong>Grocery Store</strong>. We look
                        forward to serving you and becoming your trusted
                        partner for all your grocery needs.
                    </Typography>
                </motion.div>
                <motion.div variants={fadeIn}>
                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: 'secondary.main',
                            marginTop: '2rem',
                        }}
                    >
                        About the Project
                    </Typography>
                </motion.div>
                <motion.div variants={fadeIn}>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{
                            textAlign: 'justify',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            color: 'primary',
                        }}
                    >
                        This project was created by <strong>Mohammed Raza Qazi</strong> and
                        <strong> Zaigam Lakhani</strong>. Our goal is to build a user-friendly
                        platform that simplifies grocery shopping for everyone.
                    </Typography>
                </motion.div>
                <motion.div variants={fadeIn}>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{
                            textAlign: 'justify',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            color: 'primary',
                        }}
                    >
                        We hope you enjoy using our application as much as we
                        enjoyed building it. Thank you for supporting our
                        project!
                    </Typography>
                </motion.div>
            </motion.div>
        </Container>
    );
};

export default About;