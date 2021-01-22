import React,{ useEffect } from 'react';
import { withRouter ,Link} from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios'
function Home(props) {
    
    return(
        <div className="mt-2">
            <Link to="/addform">Add Form</Link> | <Link to="/calender">Calender</Link> | <Link to="/login">Login</Link>
        </div>
    )
}

export default withRouter(Home);