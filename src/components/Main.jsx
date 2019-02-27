import React, { Component, Fragment } from 'react';
import vainulogo0 from '../styles/images/vainulogo0.png';
import rightimg from '../styles/images/rightimg.png';
//import TextField from '@material-ui/core/TextField';
import '../styles/css/Main.css';
import { Link } from 'react-router-dom';

class Main extends Component {
    render () {
        return (
            <Fragment>
                <div className="main-container">
                <div className="rightimg-div">
                    <img src={rightimg} alt="rightImage" className="right-img"/>
                </div>
                <div className="logo-div">
                    <img src={vainulogo0} alt="logo" className="vainu-logo"/>
                </div>
                <div className="left-side">
                    <h1 className="enrich-your-pipedrive">Enrich your Piprdrive data</h1>
                        <p className="choose-what">Choose what information you want to enrich in your current</p>
                        <p className="choose-what"> customer database with Vainu Pipedrive standalone integration</p>
                    <div className="buy-now">
                            <h3 className="buy-now-title">100€ / M - PIPEDRIVE INTEGRATION</h3>
                            <form className="main-form-div">
                              <input
                                className="main-email-input"
                                placeholder="email@address.com" 
                            /> 
                              <input
                                className="main-ccv-input"
                                // placeholder="Card Number &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MM / YY CVC"
                                placeholder="Card Number                                                 MM  /  YY  CVC"
                            /> 
                            <i id="icon" className="fas fa-credit-card"></i>
                            </form>
                             <a href="https://stripe.com/fi">
                             <button  
                                className="buy-btn"
                                onClick={()=>{alert("BUY NOW PIPEDRIVE! Redirecting to Stripe...")}}>
                                BUY NOW!
                            </button></a>
                    </div>
                    <p className="login-here">Already have an account?<Link to="/login">Login here</Link></p>
                </div>
                </div>
            </Fragment>
        );
    }
}

export default Main;
