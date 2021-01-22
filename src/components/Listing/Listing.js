import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './Listing.css';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiContants';
import { withRouter ,Link} from "react-router-dom";


function Listing(props) {
    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
    useEffect(() => {
    
            getListing();
        
    }, [])
    const  getListing = () =>{
        fetch('http://admin.leocoders.co/listing/api/v1/listing/').then(res => res.json())
        .then(function (result) {
            setIsLoaded(true);
          setItems(result);
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
                <th scope="col">#</th>
                <th scope="col">title</th>
                <th scope="col">description</th>
                <th scope="col">sale_type</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
    
  </thead>
  <tbody>
  {
    items.map(r =>{
 return <tr key={r.id}>
      <th scope="row"></th>
      <td>{r.title}</td>
      <td>{r.description}</td>
      <td>{r.sale_type}</td>
      <td>{r.price}</td>
      <td><Link to={`details/${r.slug}`}>Home</Link></td>
    </tr>
           

          })
      }
    
    
  </tbody>
</table>
       
    )
      }
}

export default withRouter(Listing);