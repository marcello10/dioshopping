import { styled,Button } from "@material-ui/core";
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#2596be'),
    backgroundColor: '#2596be',
    '&:hover': {
      backgroundColor: '#b7e4eb',
      color:'#495b5e'
    },
  }));  
export default ColorButton;