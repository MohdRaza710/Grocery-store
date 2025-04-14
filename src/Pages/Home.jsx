import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

// Reusable ProductCard component with Framer Motion animations
function ProductCard({ image, title, description }) {
        return (
                <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)' }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                >
                        <Card style={{ maxWidth: 394, margin: 'auto', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                                <CardMedia component="img" height="140" width="150" image={image} alt={title} />
                                <CardContent>
                                        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                                                {title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                                {description}
                                        </Typography>
                                </CardContent>
                        </Card>
                </motion.div>
        );
}

function Home() {
        const categories = ['Fruits', 'Vegetables', 'Dairy', 'Snacks'];
        const products = [
                {
                        image: 'https://img.freepik.com/premium-photo/mango-fruit-isolated-white-background_38045-429.jpg',
                        title: 'Mango',
                        description: 'Fresh and juicy mango.',
                },
                {
                        image: 'https://img.freepik.com/premium-photo/glass-bottle-fresh-milk-isolated-white-background_252965-47.jpg',
                        title: 'Milk',
                        description: 'Organic whole milk.',
                },
                {
                        image: 'https://media.istockphoto.com/id/1383475280/photo/potato-chips-in-bowl-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=yy9vNbgkkipTiB1JdlXM1LELFKK-R3BSXCtuB9kNgis=',
                        title: 'Chips',
                        description: 'Crunchy potato chips.',
                },
        ];

        return (
                <div>
                        <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                        >
                                <Typography
                                        variant="h2"
                                        gutterBottom
                                        style={{
                                                textAlign: 'center',
                                                margin: '20px 0',
                                                fontWeight: 'bold',
                                                color: '#4CAF50',
                                        }}
                                >
                                        Welcome to Our Grocery Store
                                </Typography>
                                <Typography
                                        variant="h5"
                                        gutterBottom
                                        style={{
                                                textAlign: 'center',
                                                margin: '20px 0',
                                                color: '#757575',
                                        }}
                                >
                                        Your one-stop shop for all your grocery needs.
                                </Typography>
                        </motion.div>

                        {/* Categories Section */}
                        <div style={{ margin: '20px 0' }}>
                                <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#FF5722' }}>
                                        Categories
                                </Typography>
                                <Grid container spacing={2}>
                                        {categories.map((category, index) => (
                                                <Grid item xs={6} sm={4} key={index}>
                                                        <motion.div
                                                                whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)' }}
                                                                whileTap={{ scale: 0.95 }}
                                                                initial={{ opacity: 0, y: 20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                                        >
                                                                <Card
                                                                        style={{
                                                                                textAlign: 'center',
                                                                                padding: '10px',
                                                                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                                                                        }}
                                                                >
                                                                        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                                                                                {category}
                                                                        </Typography>
                                                                </Card>
                                                        </motion.div>
                                                </Grid>
                                        ))}
                                </Grid>
                        </div>

                        {/* Featured Products Section */}
                        <div style={{ margin: '20px 0' }}>
                                <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#3F51B5' }}>
                                        Featured Products
                                </Typography>
                                <Grid container spacing={2}>
                                        {products.map((product, index) => (
                                                <Grid item xs={12} sm={6} md={4} key={index}>
                                                        <ProductCard
                                                                image={product.image}
                                                                title={product.title}
                                                                description={product.description}
                                                        />
                                                </Grid>
                                        ))}
                                </Grid>
                        </div>
                </div>
        );
}

export default Home;
