import React,{useState,useEffect} from "react";
import moment from "moment";
import axios from "axios";
import AirportSuggetions from "../components/AirportSuggestions";


const SearchForm = () => {

    //const navigate = useNavigate();
    const [airports, setAirports] = useState([]);
    const [filteredAirports, setFilteredAirports] = useState('');
    const [loading, setLoading] = useState(true);
    const today = moment().format('YYYY-MM-DD').toString()
    const tomorrow = moment().add(1,'days').format('YYYY-MM-DD').toString()
    const[departureAirport,setDepartureAirport ]= useState('');
    const[parkingCheckIn,setParkingCheckIn ]= useState(today);
    const[parkingCheckOut,setParkingCheckOut ]= useState(tomorrow);
    const[errors,SetErrors]=useState({
        departureAirport:false,
        parkingCheckIn:false,
        parkingCheckOut:false
    })

    //function to handle selection of an airport from the dropdown
    const selectAirport =(value)=>{
        setDepartureAirport(value)
        setFilteredAirports([])
    }

    //function to get airport data from the server
    const getAirport = async () => {
        
        try {
            const { data, status } = await axios.get('https://rl.talentcoco.in/v1/airports');
            if (status === 200 && data) {
                setAirports(data?.results ?? [])
            } else {
                setAirports([])
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error.message)
        }
    }

    //function to fetch airport data on component mount
    useEffect(() => {
        
        getAirport()
    }, [])
    
    //function to handle form submission
    const onSubmitHandler = (e) => {
        e.preventDefault();
        //i'm printing all the data fetched in console just to verify everything works fine
        console.log(departureAirport);
        console.log(parkingCheckIn);
        console.log(parkingCheckOut);

        //check if check-in date is greater than check-out date
        if(moment(parkingCheckIn) > moment(parkingCheckOut))
        {
           // alert("Check In Date can't be greater than Check Out Date")
            SetErrors((err) => ({ ...err, parkingCheckOut: true }))

        }
        //if departure airport, check-in date and check-out date are selected, navigate to results page
       else if(departureAirport && parkingCheckIn && parkingCheckOut)
        {
            alert("Form Submitted")
           // navigate(`/results?departureAirport=${departureAirport}&checkin=${parkingCheckIn}&checkout=${parkingCheckOut}`)
            window.location.href = `/results?departureAirport=${departureAirport}&checkin=${parkingCheckIn}&checkout=${parkingCheckOut}`

        }
        //if any field is missing, show errors
        else{
            SetErrors({
                departureAirport:!departureAirport,
                parkingCheckIn:!parkingCheckIn,
                parkingCheckOut:!parkingCheckOut
            })
        }
    }

    //function to handle changes in the check-out date
    const parkingCheckOutHandler =(e) => {
        const {value}=e.target;
            setParkingCheckOut(value);
            //check if check-in date is greater than check-out date
            if(moment(parkingCheckIn) > moment(parkingCheckOut))
            {
                SetErrors((err) => ({ ...err, parkingCheckOut: true }))
    
            }
            //if check-out date is selected, remove errors
            if (e.target.value) {
                SetErrors((err) => ({ ...err, parkingCheckOut: false }))
                } 
            else {
                SetErrors((err) => ({ ...err, parkingCheckOut: true }))
                }
                
    }

    //function to handle changes in the check-in date
    const parkingCheckInHandler =(e) => {
        const {value}=e.target;
            setParkingCheckIn(value);
            //if check-in date is selected, remove errors
            if (e.target.value) {
                SetErrors((err) => ({ ...err, parkingCheckIn: false }))
                } else {
                SetErrors((err) => ({ ...err, parkingCheckIn: true }))
                }
    }

    //function to handle changes in the departure airport
    const departureAirportHandler =(e) => {
        const {value}=e.target;
        if(value.length<15){
            setDepartureAirport(value);
        }
        
        if (e.target.value) {
            SetErrors((err) => ({ ...err, departureAirport: false }))
            } else {
            SetErrors((err) => ({ ...err, departureAirport: true }))
        }
        
        //filter airports based on user input
        const filteredAirportsData = airports.filter((airport) => 
        airport.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredAirports(filteredAirportsData?? [])
        console.log(filteredAirports)
    }
    
    return (
        <section id="hero"
        style={{backgroundImage: 'url("assets/generic_landing.jpg")', minHeight: '500px'}}>
        <div className="hero-backdrop"></div>
        <div className="container position-relative">
            <div className="hero-heading mb-4">
                <h1>SAVE BIG ON AIRPORT PARKING</h1>
                <h2>We have the best deals for airport parking lots!</h2>
            </div>
            <div className="searchbox landing">
                <div className="row tabs">
                    <div className="tab">
                        <div className="heading">Most Convenient</div>
                        <div className="button">
                            <div className="icon"><i className="fas fa-car"></i></div>
                            Airport Parking Only
                        </div>
                    </div>
                    <div className="tab">
                        <div className="heading">Best Value</div>
                        <div className="button">
                            <div className="icon"><i className="fas fa-bed"></i> + <i
                                    className="fas fa-car"></i></div>
                            Hotel &amp; Parking Package
                        </div>
                    </div> 
                </div>
                {loading && <h3>loading..</h3>}
                <form action="/results.html" method="post" >
                    <div className="options row m-0"><label className="col-12 col-xl-3 p-0 mr-xl-3 mb-2">
                            <div className="heading mb-1">Departure Airport</div>
                            <div className="placeholder placeholder-airport">
                                <input type="text" placeholder="Departure Airport" 
                                onChange={departureAirportHandler} 
                                value={departureAirport} className="placeholder placeholder-airport"/>
                                
                            </div> <i
                                className="fas fa-map-marker-alt input-icon"></i>
                            
                            {loading ?<h1>Loading</h1>:null}
                            {(errors && errors.departureAirport)? <h4 style={{color:"white",backgroundColor:"Highlight"}}>Invalid Departure Airport</h4>:null}
                            <AirportSuggetions airports={filteredAirports} selectAirport={selectAirport} />

                        </label>
                        <div className="col p-0 row m-0 mb-2 dates"><label
                                className="col-sm-6 p-0 pr-sm-3 date_input">
                                <div className="heading mb-1">Parking Check-In</div>
                                <div className="placeholder">
                                    <input name="checkin" type="date" placeholder="Parking Check-In" onChange={parkingCheckInHandler} value={parkingCheckIn} className="placeholder placeholder-airport" style={{width:"100%"}}/>
                                {(errors && errors.parkingCheckIn)? <h2 style={{color: "white",backgroundColor:"Highlight"}}>Invalid checkin Date</h2>:null}
                                </div> 
                            </label> <label className="col-sm-6 p-0 pl-sm-0 date_input">
                                <div className="heading mb-1">Parking Check-Out</div>
                                    <input name="Check-Out" type="date" placeholder="Parking Check-Out" onChange={parkingCheckOutHandler} value={parkingCheckOut} className="placeholder placeholder-airport" style={{width:"100%"}}/>
                                {(errors && errors.parkingCheckOut)? <h2 style={{color: "white",backgroundColor:"Highlight"}}>Invalid checkout Date</h2>:null}
                            </label></div>
                        <div className="col-12 col-xl-2 p-0 pl-xl-3 my-3 my-xl-0">
                            <div className="d-none d-xl-block heading mb-1 invisible">Submit</div>
                            <button type="submit" onClick={onSubmitHandler} className="btn btn-secondary btn-big btn-block p-2"><span>SEARCH</span></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
}


const HomePage =(props)=>{

    return(
        <div id="app" className="generic">
        <div>
            <div className="content">
               
                    <section id="home_page">
                        <div className="years-of-service">
                            <div className="container">
                                For 20 years, we’ve helped travelers on their way. With free cancellations & a customer
                                service team in the US, we are committed to serving you.
                            </div>
                        </div>
                        <SearchForm />
                        <section id="benefits">
                            <div className="container">
                                <h5>What Can You Save with AirportParkingReservations.com?</h5>

                                <ul className="row">
                                    <li className="col-12 col-lg-4 p-3">
                                        <img src="/assets/check.png" alt="Tick" width="50" height="50" />
                                        <div>
                                            <h6>Save Money</h6>
                                            <p>Save up to 70% off on our site compared to the cost of on-airport
                                                parking.</p>
                                        </div>
                                    </li>
                                    <li className="col-12 col-lg-4 p-3">
                                        <img src="/assets/check.png" alt="Tick" width="50" height="50" />
                                        <div>
                                            <h6>Save Time</h6>
                                            <p>
                                                It's easy to compare parking at all major airports.<br />
                                                Booking a reservation is quick & simple!
                                            </p>
                                        </div>
                                    </li>
                                    <li className="col-12 col-lg-4 p-3">
                                        <img src="/assets/check.png" alt="Tick" width="50" height="50" />
                                        <div>
                                            <h6>Save Stress</h6>
                                            <p>
                                                Guarantee your parking spot by booking in advance. Can't make it?
                                                Cancellations are free.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                    </section>
                
            </div>


            
        </div>
    </div>
    )
}

export default HomePage;