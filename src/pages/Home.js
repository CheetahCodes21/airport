import React from "react";
import { useState } from "react";
import moment from "moment";
import axios from "axios";
import AirportSuggestions from "../components/AirportSuggestions";
import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";
const SearchForm = () => {
  const [airports, setAirports] = useState([]);
  const [filteredAirports, setFilteredAirports] = useState("");

  // const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [Loading, setLoading] = useState(true);
  const fetchData = async () => {
    setLoading(true);
    const { data } = await axios.get("https://rl.talentcoco.in/v1/airports");
    setLoading(false);
    setRecords(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    getAirport();
  }, []);

  const selectAirport = (value) => {
    setDepartureAirport(value);
    setFilteredAirports([]);
  };

  const getAirport = async () => {
    try {
      const { data, status } = await axios.get(
        "https://rl.talentcoco.in/v1/airports"
      );
      if (status === 200 && data) {
        setAirports(data?.results ?? []);
      } else {
        setAirports([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
// moment-to compare the validation of date
  const today = moment().format("YYYY-MM-DD").toString();
  const tomorrow = moment().add(1, "days").format("YYYY-MM-DD").toString();

  const [departureAirport, setDepartureAirport] = useState("");
  const [parkingCheckIn, setparkingCheckIn] = useState(today);
  const [parkingCheckOut, setparkingCheckOut] = useState(tomorrow);

  const [error, setError] = useState({
    departureAirport: false,
    parkingCheckIn: false,
    parkingCheckOut: false,
  });

  const departureAirportHandler = (e) => {
    const { value } = e.target;
    setDepartureAirport(value);
    if (e.target.value) {
      setError((error) => ({ ...error, departureAirport: false }));
    } else {
      setError((error) => ({ ...error, departureAirport: true }));
    }
    const filteredAirportsData = airports.filter((airport) =>
      airport.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredAirports(filteredAirportsData ?? []);
    console.log(filteredAirports);
  };
  const parkingCheckInHandler = (e) => {
    const { value } = e.target;
    setparkingCheckIn(value);
    if (e.target.value) {
      setError((error) => ({ ...error, parkingCheckIn: false }));
    }
    if (moment(value) > moment(parkingCheckOut)) {
      setError((error) => ({ ...error, parkingCheckIn: true }));
    } else {
      setError((error) => ({ ...error, parkingCheckIn: false }));
    }
  };
  const parkingCheckOutHandler = (e) => {
    const { value } = e.target;
    setparkingCheckOut(value);
    if (e.target.value) {
      setError((err) => ({ ...error, parkingCheckOut: false }));
    }
    if (moment(parkingCheckIn) > moment(value)) {
      setError((err) => ({ ...error, parkingCheckOut: true }));
    } else {
      setError((err) => ({ ...error, parkingCheckOut: false }));
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (moment(parkingCheckIn) > moment(parkingCheckOut)) {
      setError((error) => ({ ...error, parkingCheckOut: true }));
    } else {
      if (departureAirport && parkingCheckIn && parkingCheckOut) {
        // navigate(
        //   `/results?departureAirport=${departureAirport}&parkingCheckIn=${parkingCheckIn}&parkingCheckOut=${parkingCheckOut}`
        // );
        window.location.href = `/results?departureAirport=${departureAirport}&checkin=${parkingCheckIn}&checkout=${parkingCheckOut}`
        alert("Form has been submitted successfully 👍");
      } else {
        setError({
          departureAirport: !departureAirport,
          parkingCheckIn: !parkingCheckIn,
          parkingCheckOut: !parkingCheckOut,
        });
      }

      console.log("Data Entered:");
      console.log(departureAirport);
      console.log(parkingCheckIn);
      console.log(parkingCheckOut);
    }
  };
  return (
    <section
      id="hero"
      style={{
        backgroundImage: "url('assets/generic_landing.jpg')",
        minHeight: "500px",
      }}
    >
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
                <div className="icon">
                  <i className="fas fa-car"></i>
                </div>
                Airport Parking Only
              </div>
            </div>
            <div className="tab">
              <div className="heading">Best Value</div>
              <div className="button">
                <div className="icon">
                  <i className="fas fa-bed"></i> +{" "}
                  <i className="fas fa-car"></i>
                </div>
                Hotel &amp; Parking Package
              </div>
            </div>
          </div>
          <form
            action="/results.html"
            method="post"
            autocomplete="off"
            novalidate=""
          >
            <div className="options row m-0">
              <label className="col-12 col-xl-3 p-0 mr-xl-3 mb-2">
                <div className="heading mb-1">Departure Airport</div>
                <div className="placeholder placeholder-airport">
                  <input
                    type="text"
                    placeholder="Departure Airport"
                    className="placeholder placeholder-airport"
                    onChange={departureAirportHandler}
                    value={departureAirport}
                  />
                  {Loading ? <h1>loading..</h1> : null}
                  <AirportSuggestions
                    airports={filteredAirports}
                    selectAirport={selectAirport}
                  />
                  {error.departureAirport ? (
                    <div className="error">
                      <h2>Invalid Departure Airport</h2>
                    </div>
                  ) : null}
                </div>{" "}
                <i className="fas fa-map-marker-alt input-icon"></i>
              </label>
              <div className="col p-0 row m-0 mb-2 dates">
                <label className="col-sm-6 p-0 pr-sm-3 date_input">
                  <div className="heading mb-1">Parking Check-In</div>
                  <div className="placeholder">
                    <input
                      name="checkin"
                      type="date"
                      placeholder="Parking Check-In"
                      className="placeholder placeholder-airport"
                      style={{ width: "100%" }}
                      value={parkingCheckIn}
                      onChange={parkingCheckInHandler}
                    />
                    {error && error.parkingCheckIn ? (
                      <h3>Invalid Parking Check-In</h3>
                    ) : null}
                  </div>
                </label>{" "}
                <label className="col-sm-6 p-0 pl-sm-0 date_input">
                  <div className="heading mb-1">Parking Check-Out</div>
                  <input
                    name="Check-Out"
                    type="date"
                    placeholder="Parking Check-Out"
                    className="placeholder placeholder-airport"
                    style={{ width: "100%" }}
                    value={parkingCheckOut}
                    onChange={parkingCheckOutHandler}
                  />
                  {error && error.parkingCheckOut ? (
                    <h3>Invalid Parking Check-Out</h3>
                  ) : null}
                </label>
              </div>
              <div className="col-12 col-xl-2 p-0 pl-xl-3 my-3 my-xl-0">
                <div className="d-none d-xl-block heading mb-1 invisible">
                  Submit
                </div>
                <button
                  type="submit"
                  className="btn btn-secondary btn-big btn-block p-2"
                  onClick={onSubmitHandler}
                >
                  <span>SEARCH</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
const HomePage = () =>{
    return(
    <div id="app" className="generic">
        <div>
            {/* <app-header>
                <Header/>
            </app-header> */}
            <div className="content">
                <us-page-home inline-template>
                    <section id="home_page">
                        <div className="years-of-service">
                            <div className="container">
                                For 20 years, we’ve helped travelers on their way. With free cancellations & a customer
                                service team in the US, we are committed to serving you.
                            </div>
                        </div>
                        <section id="hero"
                            style={{backgroundImage:'url("assets/generic_landing.jpg")', minHeight: `500px`}}>
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
                                    <form action="/results.html" method="post">
                                       <SearchForm/>
                                    </form>
                                </div>
                            </div>
                        </section>
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
                        {/* <Footer/> */}
                    </section>
                </us-page-home>
            </div>


            <section id="footer">

            </section>
        </div>
    </div>
    );       
}


export default HomePage;
