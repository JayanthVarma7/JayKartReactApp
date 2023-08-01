import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  // console.log(product)
  return (
    <Card className="card">
        <CardMedia
          component="img"
          height="140"
          image= {product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="h5" color="text.primary">
            <strong>${product.cost}</strong>
          </Typography>
          <Typography>
          <Rating sx={{mt:1}} name="read-only" value={product.rating} readOnly />
          </Typography>
        </CardContent>
      <CardActions className="card-actions">
        <Button className="card-button" 
        variant="contained" color="primary" 
        style={{"width":"100%"}} 
        onClick={() => handleAddToCart(product._id)}>
          <AddShoppingCartOutlined/>ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
