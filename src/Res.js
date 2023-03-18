import { useLocation } from "react-router-dom";


const Res = () => {
  const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const departureAirport = searchParams.get("departureAirport");

  return (
    <div>
      <h1> Results  </h1>
      <br/>
      <h3>Selected airport is {departureAirport}</h3>
      <br/>
      <h3>The end</h3>
    </div>
  );
}

export default Res;