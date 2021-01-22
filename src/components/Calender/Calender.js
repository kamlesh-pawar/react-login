import React,{ useEffect ,useState} from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment)

function Calender(props) {
    const t = []
      const [error, setError] = useState(null);
      const [isLoaded, setIsLoaded] = useState(false);
      const [myEventsList, setItems] = useState([]);
        useEffect(() => {
        
                getListing();
            
        }, [])
        const  getListing = () =>{
            fetch('http://admin.leocoders.co/listing/api/v1/listing-booking/1/').then(res => res.json())
            .then(function (result) {
                setIsLoaded(true);
                
                result.map(r=>{
                      t.push({ start:moment(r.slot.start.split('::')[0]).toDate(),
                        end: moment(r.slot.start.split('::')[0]).toDate(),
                        title: r.message

                })
                })
              console.log(t);

              setItems(t);
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
        <div>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          timeslots={1}
          step={60}
          selectable
          localizer={localizer}
          
          views={["month", "week", "day"]}
          defaultDate={new Date()}
          defaultView="week"
         
          timeslots={1}
          step={15}
          style={{ height: "100vh" }}
          
        />
      </div>
    )
      }
}

export default withRouter(Calender);