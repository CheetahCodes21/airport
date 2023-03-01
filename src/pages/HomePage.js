const HomePage = () =>{
    return(
    <div id="app" className="generic">
        <div>
            <app-header>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="/"><img src="/assets/navigation_logo.png"
                                alt="AIRPORT PARKING - RESERVATIONS.COM"  height="40" /></a>


                        <div className="col"></div>



                        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
                            <ul className="navbar-nav">

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        My Account
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="navbarDropdownMenuLink">

                                        <a className="dropdown-item sign-in" href="#">Sign In</a>
                                        <a className="dropdown-item sign-up" href="#">Register</a>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </header>
            </app-header>
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
                                        <div className="options row m-0"><label className="col-12 col-xl-3 p-0 mr-xl-3 mb-2">
                                                <div className="heading mb-1">Departure Airport</div>
                                                <div className="placeholder placeholder-airport">
                                                    <input type="text" placeholder="Departure Airport" className="placeholder placeholder-airport"/>
                                                </div> <i
                                                    className="fas fa-map-marker-alt input-icon"></i>
                                            </label>
                                            <div className="col p-0 row m-0 mb-2 dates"><label
                                                    className="col-sm-6 p-0 pr-sm-3 date_input">
                                                    <div className="heading mb-1">Parking Check-In</div>
                                                    <div className="placeholder">
                                                        <input name="checkin" type="date" placeholder="Parking Check-Out" className="placeholder placeholder-airport" style={{width:'100%'}}/>
                                                    </div> 
                                                </label> <label className="col-sm-6 p-0 pl-sm-0 date_input">
                                                    <div className="heading mb-1">Parking Check-Out</div>
                                                        <input name="Check-Out" type="date" placeholder="Parking Check-Out" className="placeholder placeholder-airport" style={{width:'100%'}}/>
                                                   
                                                </label></div>
                                            <div className="col-12 col-xl-2 p-0 pl-xl-3 my-3 my-xl-0">
                                                <div className="d-none d-xl-block heading mb-1 invisible">Submit</div>
                                                <button type="submit"className="btn btn-secondary btn-big btn-block p-2"><span>SEARCH</span></button>
                                            </div>
                                        </div>
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

                    </section>
                </us-page-home>
            </div>


            <section id="footer">
                <div className="container">

                    <div className="row">
                        <div className="col-4 col-lg-2 footer-links text-center text-lg-left">
                            <p>Navigation</p>
                            <ul>
                                <li><a href="/" title="Home">Home</a></li>


                            </ul>
                        </div>

                        <div className="col-4 col-lg-2 footer-links text-center text-lg-left">
                            <p>Get Involved</p>
                            <ul>
                                <li><a href="/register/partner" title="Parking Partners">Parking Partners</a></li>

                            </ul>
                        </div>

                        <div className="col-4 col-lg-2 footer-links text-center text-lg-left">
                            <p>Discover</p>
                            <ul>
                                <li><a href="/help" title="Customer Service">Help</a></li>

                            </ul>
                        </div>
 
                        <div className="social-media col-md-6 hidden-md-down">
                            <div className="row">
                                <div className="col">
                                    <div className="social-media-icons">
                                        <a href="#"
                                            title="Facebook" target="_blank">
                                            <div className="fab fa-facebook-f fa-2x"></div>
                                            <span>Facebook</span>
                                        </a>
                                    </div>

                                </div>

                                <div className="col">
                                    <div className="social-media-icons">
                                        <a href="#" title="Instagram"
                                            target="_blank">
                                            <div className="fab fa-instagram fa-2x"></div>
                                            <span>Instagram</span>
                                        </a>
                                    </div>

                                </div>

                                <div className="col">
                                    <div className="social-media-icons">
                                        <a href="#"
                                            title="Linkedin" target="_blank">
                                            <div className="fab fa-linkedin-in fa-2x"></div>
                                            <span>Linkedin</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright">
                        © 2000 - 2023 AirportParkingReservations.com, Inc. All Rights Reserved.<br />
                        MAG USA, 100 North Lasalle Street, Chicago, IL, 60602
                    </div>
                </div>
            </section>
        </div>
    </div>
    );       
}


export default HomePage;
