import React, {useState } from 'react';
 //import './LoginForm.css';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiContants';
import { withRouter,Link } from "react-router-dom";


function AddForm(props) {
    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload = { "title":"test2","address": "address","Zipcode": "123456", "description": "discription","sale_type": "For sale", "price": 20000,"bedroom": 30000,"bathroom": "4.0", "hometype":"Home","sqft": 2000,"open_house": true, "city":1,"state":1};
        debugger;
       let t=  localStorage.getItem(ACCESS_TOKEN_NAME);
       let token=  JSON.parse(t)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' ,'Authorization':'Bearer '+token.access },
            body: payload
        };
        fetch(' http://admin.leocoders.co/listing/api/v1/listing/', requestOptions)
        .then(res => res.json())
            .then(function (response) {
                
                if(response){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Record saved'
                    }))
                    
                    redirectToListing();
                    props.showError(null)
                }
                else {
                    props.showError(response.detail);
                }
                
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/home');
    }
    const redirectToListing = () => {
        props.history.push('/listing'); 
        props.updateTitle('Listing');
    }
    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Password"
                       value={state.password}
                       onChange={handleChange} 
                />
                </div>
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Submit</button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            {/* <div className="registerMessage">
                <span>Dont have an account? </span>
                <span className="loginText" onClick={() => redirectToRegister()}>Register</span> 
            </div> */}
            <Link to={`details/test`}>Home</Link>
        </div>
    )
}

export default withRouter(AddForm);