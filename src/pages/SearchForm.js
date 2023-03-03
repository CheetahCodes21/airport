import React,{useState} from 'react'
const SearchForm = () =>{

    const [Errors,setErrors]=useState({
        DepartureName:false,
        Checkin:false,
        Checkout:false
    });

    const[DepartureName,setDepartureName]=useState('Delhi');
    const[Checkin,setCheckin]=useState('');
    const[Checkout,setCheckout]=useState('');

    const DepartureHandler = (e) =>{
      const {value} = e.target;
      setDepartureName(value);
      if(e.target.value){
        setErrors((err)=>({...err, DepartureName:null}))
    }

    }

    const CheckinHandler = (e)=>{
      const {value}=e.target;
      setCheckin(value);
      if(e.target.value){
        setErrors((err)=>({...err, Checkin:null}))
    }
    }

    const CheckoutHandler = (e) =>{
        const {value} = e.target;
        setCheckout(value);
        if(e.target.value){
            setErrors((err)=>({...err, Checkout:null}))
        }
    }
    
    const SubmitHandler = (e) =>{
        e.preventDefault();
        console.log(DepartureName);
        console.log(Checkin);
        console.log(Checkout);

        if(DepartureName && Checkin && Checkout){
            alert('Form has been Submitted');
        }else{
            setErrors({
                DepartureName:!DepartureName,
                Checkin:!Checkin,
                Checkout:!Checkout
            })
        }
    }
    return(
    <form action="/results.html" method="post">
    <div className="options row m-0"><label className="col-12 col-xl-3 p-0 mr-xl-3 mb-2">
            <div className="heading mb-1">Departure Airport</div>
            <div className="placeholder placeholder-airport">
                <input type="text" placeholder="Departure Airport" className="placeholder placeholder-airport" onChange={DepartureHandler} value={DepartureName} />
                {(Errors && Errors.DepartureName)?<h5 style={{backgroundColor: 'rgba(100, 100, 100, 0.5)'}}>Enter Departure Point</h5>:null}
            </div> <i
                className="fas fa-map-marker-alt input-icon"></i>
        </label>
        <div className="col p-0 row m-0 mb-2 dates"><label
                className="col-sm-6 p-0 pr-sm-3 date_input">
                <div className="heading mb-1">Parking Check-In</div>
                <div className="placeholder">
                    <input name="checkin" type="date" placeholder="Parking Check-Out" className="placeholder placeholder-airport" style={{width:'100%'}} onChange={CheckinHandler}/>
                    {(Errors && Errors.Checkin)?<h5 style={{backgroundColor: 'rgba(100, 100, 100, 0.5)'}}>Checkin Date Mandatory</h5>:null}
                </div> 
            </label> <label className="col-sm-6 p-0 pl-sm-0 date_input">
                <div className="heading mb-1">Parking Check-Out</div>
                    <input name="Check-Out" type="date" placeholder="Parking Check-Out" className="placeholder placeholder-airport" style={{width:'100%'}} onChange={CheckoutHandler}/>
                    {(Errors && Errors.Checkout)?<h5 style={{backgroundColor: 'rgba(100, 100, 100, 0.5)'}}>Checkout Date Mandatory</h5>:null}
               
            </label></div>
        <div className="col-12 col-xl-2 p-0 pl-xl-3 my-3 my-xl-0">
            <div className="d-none d-xl-block heading mb-1 invisible">Submit</div>
            <button type="submit"className="btn btn-secondary btn-big btn-block p-2" onClick={SubmitHandler}><span>SEARCH</span></button>
        </div>
    </div>
</form>
    );
}
export default SearchForm;