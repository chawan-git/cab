import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmailOutlined';
import PeopleIcon from '@material-ui/icons/People';
import CallIcon from '@material-ui/icons/Call';
import Logo from '../logo.png';
import { Grid , Avatar, Typography, TextField,} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
              
              <Grid align='center'>
               <img src = {Logo} width ="130" alt ="logo"/>
               <p class ="text-dark">Make your ride with KaaliPeeli</p>
               < h2 class="font-weight-bold"> Reset Password</h2>
               <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >   Select type to Reset Password
        </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <AlternateEmailIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Mail" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <PeopleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="User_name" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <CallIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Phone" />
        </StyledMenuItem>
      </StyledMenu>
      <div >
                   
                   
                   < TextField fullWidth label='User_name' placeholder=" User_name" />
                   <span className ="invalid-feedback"></span>
               </div>
               

               <div >
        
               
                  
                   < TextField fullWidth label='Password' placeholder="Password" input  type ="password"  />
                   <span className ="invalid-feedback"></span>
               </div>
      <Button type='submit' variant='contained' color='primary' margin='margin-bottom'>Reset</Button>
      </div>

      
    
    </Grid>
    
  
  );
}
