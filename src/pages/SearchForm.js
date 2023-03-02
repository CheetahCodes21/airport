const SearchForm = () =>{
    return(
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
    );
}

export default SearchForm