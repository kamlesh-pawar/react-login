import React, {useState,useEffect} from 'react';
import './Details.css';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiContants';
import { withRouter,useParams } from "react-router-dom";
import { loadPartialConfig } from '@babel/core';

function Details(props) {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState({});
    let { slug } = useParams();
  
    useEffect(() => {
    console.log('useeffect');
            getDetail();
        
    }, [])
    const  getDetail = () =>{
        fetch('http://admin.leocoders.co/listing/api/v1/listing/'+slug).then(res => res.json())
        .then(function (result) {
            setIsLoaded(true);
          setItem(result);
        })
        .catch(function (error) {
            setIsLoaded(true);
            setError(error);
            
        });
    }
    const handleChange = (e) => {
        const {id , value} = e.target   
      
    }
   
 
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        
      
    return(
       
            <table className="table">
  <thead className="thead-dark">
     <tr>
                <th scope="col">Key</th>
                <th scope="col">Value</th>
                
              </tr>
    
  </thead>
  <tbody>
  
        {
            Object.keys(item).map((key, i) => (
              <tr key={i}>
                <td>{key}:</td>
                <td>{item[key]}</td>
              </tr>
            ))
          }
    
    
         
      
   
    

    

          
      
    
    
  </tbody>
</table>
       
    )
      }
}

export default withRouter(Details);