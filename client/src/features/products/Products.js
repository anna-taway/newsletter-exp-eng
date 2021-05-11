import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './productsAction'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
}));

const Products = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])


  return (
    <React.Fragment>
        <Grid container spacing={4}>
          {products.listProducts.map( (product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Id: {product.id}
                  </Typography>
                  <Typography>
                    Name: {product.name}                    
                  </Typography>
                  <Typography>
                    Color: {product.color}                   
                  </Typography>
                  <Typography>
                    Pantone_value: {product.pantone_value}                    
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
  )
}

export default Products