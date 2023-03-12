import React from "react";
const AirportAvailability = () => {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div
            role="alert"
            className="component-alert alert alert-dismissible col-12 m-0 text-center alert-info"
          >
            <button
              type="button"
              data-dismiss="alert"
              aria-label="Close"
              className="close"
            >
              <span aria-hidden="true">×</span>
            </button>{" "}
            <i className="fas fa-info-sign"></i>
            <span>Searching for the best parking deals available...</span>
          </div>
          <div className="heading w-100">
            <div className="searchbox-inline">
              <div className="searchbox">
                <form action="" method="post" autocomplete="off" novalidate="">
                  <div className="display row m-0 px-3 pt-2 pb-3">
                    <div className="mt-2 pr-3">
                      <h6>Departure Airport</h6> <span>Anchorage (ANC)</span>
                    </div>
                    <div className="dates-display mt-2 pt-3 p-sm-0 d-flex">
                      <div className="pr-3">
                        <h6>Parking Check-In</h6>{" "}
                        <span>
                          Mon, Mar 27
                          <i className="fas fa-long-arrow-alt-right ml-3"></i>
                        </span>
                      </div>
                      <div className="pr-3">
                        <h6>Parking Check-Out</h6> <span>Tue, Mar 28</span>
                      </div>
                      <div className="pr-3">
                        <h6 className="invisible">e</h6>{" "}
                        <span className="cancel">
                          <a href="\">Edit Search</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg p-0 search_results_wrapper">
            <section id="search_list_section">
              <div className="filters-line container-fluid">
                <div className="row">
                  <div className="col filters-col">
                    <div className="filter-bar noselect">
                      <ul className="row filter-options p-0">
                        <li className="parking-options filter-container">
                          <p className="filter-button">
                            Filter Parking Types
                            <i className="fas fa-angle-down"></i>
                          </p>
                          <div
                            className="filter-menu"
                            style={{ opacity: 0, top: "0px", display: "none" }}
                          >
                            <div className="parking-options-menu">
                              <span className="filter-title">
                                Filter Parking Types
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="sort-by filter-container">
                          <p className="filter-button">
                            Sort By<i className="fas fa-angle-down"></i>
                          </p>
                          <div
                            className="filter-menu"
                            style={{ opacity: 0, top: "0px", display: "none" }}
                          >
                            <div className="sort-by-menu">
                              <span className="filter-title">Sort By</span>{" "}
                              <label
                                data-option="popular-asc"
                                className="active-label"
                              >
                                Most Popular <i className="fas fa-check"></i>
                              </label>
                              <label data-option="rating-desc">
                                Best Rating <i className="fas fa-check"></i>
                              </label>
                              <label data-option="distance-asc">
                                Closest to Airport{" "}
                                <i className="fas fa-check"></i>
                              </label>{" "}
                              <label data-option="rate-asc">
                                Price: Low to High{" "}
                                <i className="fas fa-check"></i>
                              </label>{" "}
                              <label data-option="rate-desc">
                                Price: High to Low{" "}
                                <i className="fas fa-check"></i>
                              </label>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list">
                <div className="list-heading border-bottom m-0 px-4 p-3">
                  <h6 className="font-weight-light my-1">
                    <strong>7 places to park available.</strong>
                    <span>
                      Your parking dates are popular - 5 places to park are sold
                      out. Book now!
                    </span>
                  </h6>
                </div>
                <div>
                  <div className="list-enter-to">
                    <a
                      href="/lot_sonesta_miami_airport_mia"
                      target="_blank"
                      className="container-fluid lot"
                    >
                      <div className="row w-100 lot-inner">
                        <div className="col-2">
                          <div>
                            <img
                              style={{ width: "100%" }}
                              src="https://dz5vhvq2e26ss.cloudfront.net/media/logo/378606d06aac0b8b4.45839654.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-7 col-product-mid">
                          <div>
                            <h3> Sonesta Miami Airport</h3>
                          </div>
                          <div className="ratings">
                            <div>
                              <i className="fas fa-star"></i>{" "}
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>{" "}
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star half"></i>
                              <span>
                                <strong>Excellent</strong>
                                (617 Ratings)
                              </span>
                            </div>
                          </div>
                          <div className="secondary-info">
                            <div>
                              <i className="fas fa-car"></i> Parking Types: Self
                              Uncovered
                            </div>
                            <div>
                              <i className="fas fa-plane"></i> 2.3 miles to MIA
                            </div>
                            <div>
                              <i className="fas fa-taxi"></i>
                              Free Shuttle
                            </div>
                            <div>
                              <i className="far fa-clock"></i> Open 24/7
                            </div>
                          </div>
                          <div className="extra-info"></div>
                        </div>
                        <div className="col-3">
                          <div className="payment">
                            <div>
                              <h2 className="">
                                <sup>$</sup>7<sup>99</sup>
                              </h2>{" "}
                              <span className="">per day</span>
                            </div>
                          </div>{" "}
                          <button className="btn btn-red btn-p-2">
                            Park Here
                          </button>
                          <div className="info cancellation">
                            <i className="fas fa-check"></i> Free Cancellation
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg p-0 map-section">
            <section id="map_container" className="">
              <img src="/assets/map.png" alt="" style={{ width: "500px" }} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportAvailability;