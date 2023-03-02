const Header = ()=>{
    return(
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
    )
}

export default Header;