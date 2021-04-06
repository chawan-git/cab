import React, {Component} from 'react';
import Logo from '../logo.png';
import { Grid } from '@material-ui/core';

class LogoutComponent extends Component{

    render(){

    
    return(
        
        <Grid align='center'>
        
        < h2 class="font-weight-bold"> Logout</h2>
            
               <img src = {Logo} width ="130" alt ="logo"/>
               <p class ="text-dark">Make your ride with KaaliPeeli</p>
            <h3> Thank you for visiting KaaliPeeli</h3>
            <h5> The current status is Logged out! </h5>
            </Grid>
            
            

    );

}
}
export default LogoutComponent;
