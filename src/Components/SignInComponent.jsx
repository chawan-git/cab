
import React , { Component } from 'react';

import { Grid, TextField, Button } from '@material-ui/core';

import Logo from '../logo.png';
 class SignInComponent extends Component {
    constructor(props){
    super(props);


    this.state ={
         dataUsername: '',
         dataPassword:'',
         errUsername:'',
         errPassword:''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}
handleSubmit(e)
{
    e.preventDefault();
    const {dataUsername, dataPassword} = this.state;
    let valid = true;

    if(dataUsername === '')
    {
        this.setState({
            errUsername : 'Username cannot be blank.'
        });
        valid = false;
    }
if (dataPassword === '')
{
    this.setState({
        errPassword: 'Password cannot be blank.'
    });
    valid = false;
}
if (valid)
{
    console.log('Success', this.state);
    this.setState({
        dataUsername: '',
        dataPassword:'',
        errUsername:'',
        errPassword:'',

    });
}
}
handleChange(e)
{
   if(e.target.name === 'username')
   {
       this.setState({
           dataUsername : e.target.value,
           errUsername:''
       });
   }
   else if(e.target.name ==='password')
   {
       this.setState({
           dataPassword : e.target.value,
           errPassword: ''
       });
   }
}
    render()
    {
        const{  errUsername, errPassword }  = this.state;
        return (
            
              
           <form onSubmit={this.handleSubmit}  >
              <Grid align='center'>
               
            
               <img src = {Logo} width ="130" alt ="logo"/>
               <p class ="text-dark">Make your ride with KaaliPeeli</p>
               < h2 class="font-weight-bold"> Login </h2>
            
               <div >
                   
                   
                   < TextField fullWidth label='Username' placeholder=" Username" input  className = { errUsername === ''? 'form-control ': 'form-control is-invalid'}  name="username"onChange={this.handleChange}/>
                   <span className ="invalid-feedback">{ errUsername}</span>
               </div>
               

               <div >
        
               
                  
                   < TextField fullWidth label='Password' placeholder="Password" input  type ="password"  id  ="password"  className= {  errPassword === ''?  'form-control' :'form-control is-invalid'}  name="password" onChange={ this.handleChange }/>
                   <span className ="invalid-feedback">{ errPassword }</span>
               </div>

                <div>
               <a href="url">Forgot Password?</a>
               </div>
          
               <Button type='submit' variant='contained' color='primary' margin='margin-bottom'>Login </Button>
               </Grid>
           </form>
                
        );
    }
}
export default SignInComponent;