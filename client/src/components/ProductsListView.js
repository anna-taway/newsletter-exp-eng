import React from 'react';
import Products from '../features/products/Products';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  productsContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  productsButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));

export default function ProductsListView() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <div className={classes.productsContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Some news about EE and QBE
            </Typography>
            <div className={classes.productsButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="secondary">
                    <Link to="/user" color="inherit">
                      Subscribe
                    </Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    <Link to="/" color="inherit">
                      Find more
                    </Link>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Products />
        </Container>
    </React.Fragment>
  );
}