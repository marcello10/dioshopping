import React from 'react';
import { Paper, Grid, Typography, makeStyles} from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';
import ColorButton from './ColorButton'
const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      boxShadow:'1px 1px 10px black',
    },
  }));

const Card = ({ product, children }) => {
    const cart = useSelector( state => state.cart.value )
    const dispatch = useDispatch();
    const classes = useStyles();

    return(
        <Grid item xs={3}>
            <Paper className={classes.paper}>
                <Grid container direction='column'>
                    <Grid item>
                    <img width="140px" src={product.image} alt={product.name_product}/>
                    <Typography variant='h6'>
                        {children}
                    </Typography>
                    <Typography variant='subtitle1'>
                        R$ {product.price.toFixed(2)}
                    </Typography>
                    </Grid>
                
                <ColorButton 
                    variant="contained"
                    onClick={()=>dispatch(cartActions.Add(cart, product))}
                >
                    Adicionar
                </ColorButton>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Card;
