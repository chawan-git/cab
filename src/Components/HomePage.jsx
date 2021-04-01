import React, { Component } from 'react'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import PersonPinCircleOutlinedIcon from '@material-ui/icons/PersonPinCircleOutlined';
import PinDropOutlinedIcon from '@material-ui/icons/PinDropOutlined';

export class HomePage extends Component {
    render() {
        return (
            <div id="homepage">

                
                <div className="container">
                    <br/>
                    <br/>
                    <div className="row mt-4 ms-4">
                        <div className="col-sm-6 border border-dark ms-4 bg-white">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <div className="row mt-4">
                                        <div className="col-sm-12 text-center">
                                        <DirectionsCarIcon fontSize="large"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 text-center">
                                        <h5>Ride</h5>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <hr/>
                            <div className="row ms-4 me-4">
                                
                                <div className="col-sm-12 mt-4">
                                    <h1 class="display-5 fw-bold">Request a ride now</h1>
                                </div>
                            </div>
                            <br/>
                            <div className="row ms-4 me-4">
                                <div className="col-sm-12 input-group">
                                <span className="input-group-text"><PersonPinCircleOutlinedIcon/></span>
                                    <input type="text" name="" id="" className="form-control p-2" placeholder="Enter pickup location"/>
                                </div>
                            </div>
                            <br/>
                            <div className="row ms-4 me-4">
                                <div className="col-sm-12 input-group">
                                <span className="input-group-text"><PinDropOutlinedIcon /></span>
                                    <input type="text" name="" id="" className="form-control p-2" placeholder="Enter destination"/>
                                </div>
                            </div>
                            <br/> 
                            <br/> 
                            <div className="row ms-4">
                                <div className="col-sm-12">
                                    <button type="submit" className="btn btn-dark fw-bold p-2">Request now</button>
                                </div>
                            </div>
                            <br/>
                        </div>
                        <div className="col-sm-6">

                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>

            </div>
        )
    }
}

export default HomePage
