import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Demo = () =>{
    const [loading,setloading] = useState(false);
    const [airports, setAirports] = useState([]);
    const [filteredAirports, setFilteredAirports] = useState();
    const [departureAirport,setDepartureAirport] = useState("");
    const navigate = useNavigate();

    const getAirport = async () => {
        try {
          const { data, status } = await axios.get(
            "http://43.205.1.85:9009/v1/airports"
          );
          if (status === 200 && data) {
            setAirports(data?.results ?? []);
          } else {
            setAirports([]);
          }
          setloading(false);
        } catch (error) {
          setloading(false);
          console.log(error.message);
        }
      };

      useEffect(() => {
        getAirport();
      }, []);

      const DepartureAirportHandler = (e) => {
        //event.target.value
        const {value} = e.target;    
            setDepartureAirport(value);
            const filteredAirportsData = airports.filter((airport) => 
              airport.name.toLowerCase().startsWith(e.target.value.toLowerCase()));
              setFilteredAirports(filteredAirportsData?? [])
              console.log(filteredAirports)
        }

        const AirportSuggestions = ({ airports = [], selectAirport }) => {
  if (airports.length === 0) {
    return null;
  }
  return (
    <div>
      <ul>
        {airports.map((airport) => (
          <li
            key={airport.id}
            className="suggestion-list"
            style={{
              padding: "10px",
              borderBottom: "1px solid",
              cursor: "pointer",
            }}
            onClick={() => selectAirport(airport.name)}
          >
            {airport.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

            const selectAirport = (value) => {
                setDepartureAirport(value);
                setFilteredAirports([]);
              };

              const submitHandler = (e) => {
                navigate(`/results?departureAirport=${departureAirport}`);
              }

        return(
            <div>
            <label>
                     <div >Enter the airport name please:</div>
                     <div >
                    <input type="text" onChange={DepartureAirportHandler} 
                    value={departureAirport}  
                    placeholder="Departure Airport" 
                    />
                </div> 
                    {loading?<h1>Loading</h1>:null}
                    <br/>
                    <h6>List of airports :</h6>
                     <AirportSuggestions 
                    airports={filteredAirports}
                    selectAirport={selectAirport}
                    />
            </label>
            <button type="submit" onClick={submitHandler}>view result</button>
            </div>
            );


}
export default Demo;