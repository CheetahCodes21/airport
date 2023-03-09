import Header from "./Header";
import Footer from "./Footer";
import SearchForm from "./SearchForm";
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
