import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
const linkStyle = {
    textDecoration:'none'
}
const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12} 
        style={{boxShadow:'0px 2px 10px black'}}>
            <Typography variant='h3'>
                <Link to="/" style={{...linkStyle, color:'black'}}>
                Dio Shopping
                </Link>
            </Typography>
            <Link to="/" style={linkStyle}>
                <Button color="primary">Home</Button>
            </Link>
            <Link to="/contato" style={linkStyle}>
                <Button color="primary">Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
