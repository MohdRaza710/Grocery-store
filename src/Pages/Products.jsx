import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';


function Products({ onAddToCart }) {
    const products = [
        { id: 1, name: 'Apple', description: 'Fresh red apple', price: 1.00, image: 'https://i.pinimg.com/736x/d9/68/c2/d968c2fe95629e238b04ee34599c5013.jpg' },
        { id: 2, name: 'Banana', description: 'Sweet ripe bananas', price: 0.50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11Wrho0qqXtSYNly73nDZWZZlOzDOKIB_cQ&s' },
        { id: 3, name: 'Orange', description: 'Juicy citrus fruit', price: 0.75, image: 'https://media.istockphoto.com/id/477836156/photo/orange-fruit-isolated-on-white.jpg?s=612x612&w=0&k=20&c=NQYciPqF0kRqnDMx7Vy96Qhtx2c37OiKPXtjMR3Oy-Y=' },
        { id: 4, name: 'Grapes', description: 'Seedless purple grapes', price: 2.00, image: 'https://images8.alphacoders.com/288/288597.jpg' },
        { id: 5, name: 'Mango', description: 'Tropical juicy mango', price: 1.50, image: 'https://img.freepik.com/premium-photo/mango-fruit-isolated-white-background_38045-429.jpg' },
        { id: 6, name: 'Pineapple', description: 'Sweet tropical pineapple', price: 3.00, image: 'https://img.freepik.com/premium-photo/pineapple-isolated-white-background_253984-5776.jpg' },
        { id: 7, name: 'Strawberry', description: 'Fresh red berries', price: 2.50, image: 'https://img.freepik.com/premium-photo/strawberry-isolated-white-background-clipping-path_87394-5121.jpg' },
        { id: 8, name: 'Watermelon', description: 'Juicy summer fruit', price: 4.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3km6ZS83zx5yyWNvcU7yC7Uk7ARgKwu28A&s' },
        { id: 9, name: 'Blueberry', description: 'Small sweet berries', price: 3.50, image: 'https://c1.wallpaperflare.com/preview/1015/683/785/berry-blue-blueberry-food.jpg' },
        { id: 10, name: 'Peach', description: 'Soft juicy peach', price: 1.75, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-AFR-xqR4RXi6j6eSCFbO4xZLst5DXhArbw&s' },
        { id: 11, name: 'Cherry', description: 'Fresh red cherry', price: 2.25, image: 'https://img.freepik.com/free-photo/big-cherry-white-background_1387-635.jpg' },
        { id: 12, name: 'Kiwi', description: 'Tangy green kiwi', price: 1.25, image: 'https://img.freepik.com/premium-photo/kiwi-fruit-white-background_62856-1519.jpg' },
        { id: 13, name: 'Lemon', description: 'Sour yellow citrus', price: 0.80, image: 'https://img.freepik.com/premium-photo/lemon-fruit-with-green-leaf-isolated-white-background_264757-186.jpg' },
        { id: 14, name: 'Lime', description: 'Green citrus fruit', price: 0.90, image: 'https://img.freepik.com/premium-photo/high-resolution-lime-product-photography-white-background_899449-64547.jpg' },
        { id: 15, name: 'Papaya', description: 'Tropical orange fruit', price: 2.75, image: 'https://img.freepik.com/premium-photo/ripe-papaya-fruit-isolated-white-background-full-depth-field_253984-7074.jpg' },
        { id: 16, name: 'Pomegranate', description: 'Juicy red seeds', price: 3.50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQis-8kF9KfwUqACMggfahI8NEcMNGQ2NTU4A&s' },
        { id: 17, name: 'Raspberry', description: 'Tiny red berries', price: 2.00, image: 'https://t3.ftcdn.net/jpg/00/51/49/46/360_F_51494695_9pBQGTeEWaqIUFaENb51HQl6TZjKMgIL.jpg' },
        { id: 18, name: 'Blackberry', description: 'Black juicy berries', price: 2.50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2H6hSezRvHMG4lWYtNgDOLGQAx2U9bzxF0w&s' },
        { id: 19, name: 'Coconut', description: 'Hard shell coconut', price: 4.50, image: 'https://img.freepik.com/premium-photo/coconut-isolated-white-background_252965-356.jpg' },
        { id: 20, name: 'Avocado', description: 'Creamy healthy fruit', price: 1.80, image: 'https://img.freepik.com/premium-photo/3d-image-avocado-white-background_932514-3253.jpg' },
        { id: 21, name: 'Dragonfruit', description: 'Exotic pink fruit', price: 5.00, image: 'https://img.freepik.com/premium-photo/dragon-fruit-pitaya-fruit-white-background_3249-5800.jpg' },
        { id: 22, name: 'Lychee', description: 'Sweet tropical fruit', price: 3.00, image: 'https://img.freepik.com/premium-photo/lychee-fruit-with-isolated-white-background_741910-13314.jpg' },
        { id: 23, name: 'Guava', description: 'Crunchy green fruit', price: 2.20, image: 'https://media.istockphoto.com/id/1210635439/photo/isolated-cut-guavas.jpg?s=612x612&w=0&k=20&c=62Qn8d_eKcGi0Kx2rD9an1gIKFHPdhvK8nLkI7Si1WY=' },
        { id: 24, name: 'Fig', description: 'Soft purple fruit', price: 2.80, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJ8IwgScxyIsrNqh39-cstlB9ynWIRxQsag&s' },
        { id: 25, name: 'Date', description: 'Dry sweet date', price: 1.90, image: 'https://img.freepik.com/premium-photo/dry-dates-isolated-white-background-top-view-flat-lay-pattern_120872-8275.jpg' },
        { id: 26, name: 'Tangerine', description: 'Mini orange citrus', price: 0.70, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDHIfnNDJOupI7OhSOc3q8x2uFDrnN_DAYA&s' },
        { id: 27, name: 'Clementine', description: 'Seedless citrus fruit', price: 0.60, image: 'https://media.istockphoto.com/id/178433427/photo/tangerine-or-mandarin-fruit.jpg?s=612x612&w=0&k=20&c=OzwMqvK2PESylDeGuFGPJkcRvlA62Q9LxCD9gsJEKJ0=' },
        { id: 28, name: 'Nectarine', description: 'Smooth peach fruit', price: 1.40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAPIsTlQ8PEP6j1v3sZ4nxmSZ0KshElLvwg&s' },
        { id: 29, name: 'Plum', description: 'Juicy red plum', price: 1.10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ5Cn_OcdQ7xs6op-VKOX3JuhtZeMJcZQYA&s' },
        { id: 30, name: 'Apricot', description: 'Small orange fruit', price: 1.30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPH2Ky-UpYDmXRCq-gRD0wKUprL_X8UAVlQ&s' },
        { id: 31, name: 'Passionfruit', price: 2.90, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTIOjgwamfWnCROAFng08_Q77UopGUn_k_gQ&s', description: 'Tropical fruit with seeds' },
        { id: 32, name: 'Starfruit', price: 3.20, image: 'https://img.freepik.com/premium-photo/star-fruit-carambola-star-apple-starfruit-white-background-healthy-star-fruit-food-isolated_493343-17151.jpg', description: 'Tropical fruit with star shape' },
        { id: 33, name: 'Jackfruit', price: 4.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeanE47mymdnU3tZOLKGHTWsRG2QVpmMPikg&s', description: 'Large tropical fruit' },
        { id: 34, name: 'Durian', price: 5.50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPY94clLo22fv860YZQORjJptZCIyYC6dug&s', description: 'Strong-smelling tropical fruit' },
        { id: 35, name: 'Mulberry', price: 2.60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQuLu8Ov9jI-zqzY79vvZatpX1QtQH3VjGA&s', description: 'Sweet dark berries' },
        { id: 36, name: 'Elderberry', price: 3.10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFoRnNGKmOE-WWkxfdNIEZPeIMeeq7lCWzg&s', description: 'Dark purple berries' },
        { id: 37, name: 'Gooseberry', price: 2.40, image: 'https://wallpapers.com/images/hd/green-amla-gooseberry-tn02l48ejhrk8j1a.jpg', description: 'Small green berries' },
        { id: 38, name: 'Cranberry', price: 2.70, image: 'https://media.istockphoto.com/id/171374230/photo/cranberries-on-white.jpg?s=612x612&w=0&k=20&c=TNy1Ow57XDKjYTigK6ksYDuWrf-t-xI2BMIztlfUbjE=', description: 'Small red berries' },
        { id: 39, name: 'Boysenberry', price: 3.30, image: 'https://media.istockphoto.com/id/1179931274/photo/boysenberry-mint-leaves.jpg?s=612x612&w=0&k=20&c=vzLNSroKbq2JDCdS-uZBUj48rPHI86fiu6yqmV5ZINc=', description: 'Hybrid berry' },
        { id: 40, name: 'Tamarind', price: 1.95, image: 'https://img.freepik.com/premium-photo/tamarind-fruits-with-green-leaves-isolated-white-background_184421-222.jpg', description: 'Tropical fruit with tangy flavor' },
        { id: 41, name: 'Soursop', price: 4.20, image: 'https://t4.ftcdn.net/jpg/03/44/19/35/360_F_344193522_dp3EX4LJN12EXoGFnfoTBSfyMmZoiP3B.jpg', description: 'Tropical fruit with spiky skin' },
        { id: 42, name: 'Sapodilla', price: 2.85, image: 'https://img.freepik.com/premium-photo/sapodilla-fruit-with-isolated-white-background_62678-1119.jpg', description: 'Sweet brown fruit' },
        { id: 43, name: 'Longan', price: 3.40, image: 'https://www.shutterstock.com/image-photo/longan-fresh-isolated-on-white-260nw-1165410619.jpg', description: 'Tropical fruit with sweet flesh' },
        { id: 44, name: 'Rambutan', price: 4.10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgAMFZfh_txbamecHBly4fTSXyUBLhC5aHpw&s', description: 'Tropical fruit with hairy skin' },
        { id: 45, name: 'Salak', price: 3.60, image: 'https://thumbs.dreamstime.com/b/salak-snake-fruit-isolated-white-background-clipping-path-full-depth-field-salak-snake-fruit-isolated-white-175729376.jpg', description: 'Tropical fruit with scaly skin' },
        { id: 46, name: 'Mangosteen', price: 5.20, image: 'https://static.vecteezy.com/system/resources/previews/004/289/911/large_2x/mangosteen-sweet-fruit-isolated-on-white-background-photo.jpg', description: 'Tropical fruit with purple skin' },
        { id: 47, name: 'Kumquat', price: 1.70, image: 'https://media.istockphoto.com/id/453251305/photo/ripe-kumquat-fruits.jpg?s=612x612&w=0&k=20&c=csb2P-ly3Jl51zZLVWnV36fXESe4N5LzqI_BXvCjpdQ=', description: 'Small citrus fruit' },
        { id: 48, name: 'Bittermelon', price: 2.30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEYIfta9Kj-omlg9-QIPpexfPkGPxUI996g&s', description: 'Bitter green fruit' },
        { id: 49, name: 'Chayote', price: 1.60, image: 'https://img.freepik.com/premium-photo/fresh-chayote-with-leaf-isolated-white-background_86639-1155.jpg', description: 'Green pear-shaped fruit' },
        { id: 50, name: 'Zucchini', price: 1.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG91vWyKspwKLcoACKCzolmrFEob0VgvMJZA&s', description: 'Green summer squash' },
        { id: 51, name: 'Squash', price: 1.20, image: 'https://thumbs.dreamstime.com/b/butternut-squash-isolated-white-background-42853086.jpg', description: 'Yellow winter squash' },
        { id: 52, name: 'Pumpkin', price: 1.50, image: 'https://t4.ftcdn.net/jpg/00/92/88/89/360_F_92888927_9BfjW07hIBF2QBcwwhFAMhuuWnsdMKdM.jpg', description: 'Orange winter squash' },
        { id: 53, name: 'Bell Pepper', price: 0.90, image: 'https://img.freepik.com/premium-photo/bell-peppers-isolated-white-background_198067-11.jpg', description: 'Sweet bell-shaped pepper' },
        { id: 54, name: 'Cucumber', price: 0.80, image: 'https://media.istockphoto.com/id/91516166/photo/cucumber-slices-on-a-white-background.jpg?s=612x612&w=0&k=20&c=n4R8_HB2qEmTgOU3xlINv1Am2Z_Mt4CuJiITPta58vw=', description: 'Crunchy green vegetable' },
        { id: 55, name: 'Carrot', price: 0.70, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFzqRLgAh_M9WoDIS3ySnca9lnB1dRy6yPQ&s', description: 'Crunchy orange vegetable' },
        { id: 56, name: 'Broccoli', price: 1.30, image: 'https://static.vecteezy.com/system/resources/previews/002/267/879/large_2x/broccoli-isolated-on-white-background-free-photo.jpg', description: 'Green flowering vegetable' },
        { id: 57, name: 'Cauliflower', price: 1.40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqM-TVdiUAHnpKS7UcJhZ3wClLmgvzrTnCw&s', description: 'White flowering vegetable' },
        { id: 58, name: 'Spinach', price: 0.60, image: 'https://img.freepik.com/premium-photo/spinach-with-white-background-high-quality-ultra-hd_889056-10038.jpg', description: 'Leafy green vegetable' },
        { id: 59, name: 'Lettuce', price: 0.50, image: 'https://img.freepik.com/premium-photo/lettuce-white-background-close-up_183352-1923.jpg', description: 'Leafy green vegetable' },
        { id: 60, name: 'Celery', price: 0.55, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcX-bDlFns5c6FYeJMo5s5OXGNlRuZx-wn1w&s', description: 'Crunchy green stalks' },
        { id: 61, name: 'Radish', price: 0.65, image: 'https://media.istockphoto.com/id/158690297/photo/daikon-radishes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=k_KVuE_UbE-shIiG2z2xY8Fu7BqKy_bk4D9NfZdrTfM=', description: 'Crunchy root vegetable' },
        { id: 62, name: 'Beetroot', price: 0.75, image: 'https://media.istockphoto.com/id/162682961/photo/beetroot.jpg?s=612x612&w=0&k=20&c=AzHmJ6fPa44BN7y_rji9nziIXMuOrPeU502KpsPv6Ks=', description: 'Sweet red root vegetable' },
        { id: 63, name: 'Onion', price: 0.40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfOMhhBkiP44wsCwmsgS09z2Mi1K1ZslAhKw&s', description: 'Strong-flavored bulb' },
        { id: 64, name: 'Garlic', price: 0.30, image: 'https://static.vecteezy.com/system/resources/previews/030/658/603/large_2x/garlic-with-white-background-high-quality-ultra-hd-free-photo.jpg', description: 'Strong-flavored bulb' },
        { id: 65, name: 'Ginger', price: 0.45, image: 'https://img.freepik.com/premium-photo/ginger-white-background-depth-field_253984-2691.jpg', description: 'Spicy root vegetable' },
        { id: 66, name: 'Potato', price: 0.25, image: 'https://img.freepik.com/premium-photo/fresh-potato-white-background_461160-3961.jpg', description: 'Starchy tuber' },
    ];

  return (
    <div style={{ width: '100%' }}>
        <Grid container spacing={2}>
            {products.map((product, index) => (
                <Grow in={true} timeout={500 + index * 100} key={product.id}>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <Card
                            sx={{
                                width: '115px',
                                mt: 2,
                                border: '1px solid #ccc',
                                borderRadius: '12px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                                },
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                                    {product.name}
                                </Typography>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{
                                        width: '100%',
                                        height: '150px',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                        margin: '10px 0',
                                    }}
                                />
                                <Typography color="text.secondary" sx={{ fontSize: '1rem' }}>
                                    Price: ${product.price.toFixed(2)}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.description || 'No description available.'}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        backgroundColor: '#4CAF50',
                                        color: 'white',
                                        '&:hover': { backgroundColor: '#45a049' },
                                        mt: 1,
                                        mb: 1,
                                        width: '90%',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        borderRadius: '8px',
                                        padding: '8px 0',
                                    }}
                                    onClick={() => onAddToCart(product)}
                                >
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grow>
            ))}
        </Grid>
    </div>
);
};
    export default Products;
