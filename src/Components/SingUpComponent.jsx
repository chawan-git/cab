
import React , { Component } from 'react';

import { Grid, TextField, Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Logo from '../logo.png';
 class SignUpComponent extends Component {
    constructor(props){
    super(props);


    this.state ={
         dataUsername: '',
         dataPassword:'',
         dataAddress:'',
         dataMobile_Number:'',
         dataEmail:'',
         errUsername:'',
         errPassword:'',
         errAddress:'',
         errMobile_Number:'',
         errEmail:''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}
handleSubmit(e)
{
    e.preventDefault();
    const {dataUsername, dataPassword,  dataAddress,dataMobile_Number, dataEmail} = this.state;
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

if (dataAddress === '')
{
    this.setState({
        errAddress: 'Address cannot be blank.'
    });
    valid = false;
}
if (dataMobile_Number === '')
{
    this.setState({
        errMobile_Number: 'Mobile Number cannot be blank.'
    });
    valid = false;
}

if (dataEmail === '')
{
    this.setState({
        errEmail: 'Email cannot be blank.'
    });
    valid = false;
}


if (valid)
{
    console.log('Success', this.state);
    this.setState({
        dataUsername: '',
         dataPassword:'',
         dataAddress:'',
         dataMobile_Number:'',
         dataEmail:'',
         errUsername:'',
         errPassword:'',
         errAddress:'',
         errMobile_Number:'',
         errEmail:''
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

   else if(e.target.name ==='Address')
   {
       this.setState({
           dataAddress : e.target.value,
           errAddress: ''
       });
   }
   else if(e.target.name ==='Mobile_Number')
   {
       this.setState({
           dataMobile_Number : e.target.value,
           errMobile_Number: ''
       });
   }
   else if(e.target.name ==='Email')
   {
       this.setState({
           dataEmail : e.target.value,
           errEmail: ''
       });
   }
}
    render()
    {
        const{  errUsername, errPassword, errAddress, errMobile_Number, errEmail }  = this.state;
        return (
            
               
           <form onSubmit={this.handleSubmit}>
              <Grid align='center'>
               
            
               <img src = {Logo} width ="130" alt ="logo"/>
               <p text-center>Make your ride with KaaliPeeli</p>
               < h2 class="font-weight-bold"> SignUp </h2>
            
               <div >
                   
                   
                   < TextField fullWidth label='Username' placeholder=" Username" input  className = { errUsername === ''? 'form-control ': 'form-control is-invalid'}  name="username"onChange={this.handleChange}/>
                   <span className ="invalid-feedback">{ errUsername}</span>
               </div>
               

               <div >
        
               
                  
                   < TextField fullWidth label='Password' placeholder="Password" input  type ="password"  id  ="password"  className= {  errPassword === ''?  'form-control' :'form-control is-invalid'}  name="password" onChange={ this.handleChange }/>
                   <span className ="invalid-feedback">{ errPassword }</span>
               </div>

               <div >     
        < TextField fullWidth label='Address' placeholder="Address"   id  ="Address"  className= {  errAddress=== ''?  'form-control' :'form-control is-invalid'}  name="Address" onChange={ this.handleChange }/> 
        <span className ="invalid-feedback">{errAddress}</span>
    </div> 



    <div >     
        < TextField fullWidth label='Mobile_Number' placeholder="Mobile_Number"   id  ="Mobile_Number"   className= {  errMobile_Number=== ''?  'form-control' :'form-control is-invalid'}  name="Mobile_Number" onChange={ this.handleChange }/>   
        <span className ="invalid-feedback">{errMobile_Number}</span>
        </div>
                    <div >     
        < TextField fullWidth label='Email ' placeholder="Email "   id  ="Email "   className= {  errEmail=== ''?  'form-control' :'form-control is-invalid'}  name="Email" onChange={ this.handleChange }/>   
        <span className ="invalid-feedback">{errEmail}</span>
        </div>
        <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label=" I Accept the terms and conditions."
                        />

              
               <Button type='submit' variant='contained' color='primary' margin='margin-bottom'>Sign up</Button>
               </Grid>
           </form>
                
        );
    }
}
export default SignUpComponent;