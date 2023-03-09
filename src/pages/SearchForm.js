import React,{useEffect, useState} from 'react'
import moment from 'moment'
import axios from 'axios'
const SearchForm = () =>{
    const [Errors,setErrors]=useState({
        DepartureName:false,
        Checkin:false,
        Checkout:false
    });
    const today =moment().format('YYYY-MM-DD').toString()
    const tomorrow = moment().add(1,'days').format('YYYY-MM-DD').toString()
    const[DepartureName,setDepartureName]=useState('Delhi');
    const[Checkin,setCheckin]=useState(today);
    const[Checkout,setCheckout]=useState(tomorrow);

    const DepartureHandler = (e) =>{
      const {value} = e.target;
      if(value.length<10){
        setDepartureName(value);
      }
      setDepartureName(value);
      if(e.target.value){
        setErrors((err)=>({...err, DepartureName:false}))
    }else{
        setErrors((err)=>({...err, DepartureName:true}))
    }

    }

    const CheckinHandler = (e)=>{
      const {value}=e.target;
      setCheckin(value);
      if(e.target.value){
        setErrors((err)=>({...err, Checkin:false}))
    }else{
        setErrors((err)=>({...err, Checkin:true}))
    }
    }
    
    const CheckoutHandler = (e) =>{
        const {value} = e.target;
        setCheckout(value);
        if(moment(Checkin)>moment(Checkout)){
            setErrors((err)=>({...err,Checkout:true}))
        }
        if(e.target.value){
            setErrors((err)=>({...err, Checkout:false}))
        }else{
            setErrors((err)=>({...err, Checkout:true}))
        }
    }
    
    const SubmitHandler = (e) =>{
        e.preventDefault();
        console.log(DepartureName);
        console.log(Checkin);
        console.log(Checkout);
        if(moment(Checkin)>moment(Checkout)){
            alert("Invalid")
            setErrors((err)=>({...err,Checkout:true}))
        }else
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

    const [records,setRecords]=useState([]);
    const [loading,setLoading]=useState(false);

    const fetchData=async()=>{
        setLoading(true)
        const{data}=await axios.get('http://43.205.1.85:9009/v1/airports')
        setLoading(false)
        setRecords(data.results)
    }
    useEffect(()=>{
        fetchData()
    },[])

    return(
    <form action="/results.html" method="post">
    <div className="options row m-0"><label className="col-12 col-xl-3 p-0 mr-xl-3 mb-2">
            <div className="heading mb-1">Departure Airport</div>
            <div className="placeholder placeholder-airport">
                <input type="text" placeholder="Departure Airport" className="placeholder placeholder-airport" onChange={DepartureHandler} value={DepartureName} />
                </div> <i className="fas fa-map-marker-alt input-icon"></i>
                <ul>
                    {records.map((record,index)=>{
                        const isEven = index%2;
                        return(
                            <li key={index}style={{backgroundColor:isEven?'black':'silver',color: isEven ? 'white' : 'black'}}>
                                {record.name}
                            </li>
                        )
                    })}
                </ul>
                {(Errors && Errors.DepartureName)?<h3 style={{backgroundColor: 'rgba(100, 100, 100, 0.5)'}}>Invalid DepartureName</h3>:null}
                {loading ?<h1>Loading</h1>:null}
        </label>
        <div className="col p-0 row m-0 mb-2 dates"><label
                className="col-sm-6 p-0 pr-sm-3 date_input">
                <div className="heading mb-1">Parking Check-In</div>
                <div className="placeholder">
                    <input name="checkin" type="date" placeholder="Parking Check-Out" className="placeholder placeholder-airport" style={{width:'100%'}} onChange={CheckinHandler}/>
                    {(Errors && Errors.Checkin)?<h3 style={{backgroundColor: 'rgba(100, 100, 100, 0.5)'}}>Invalid checkin date</h3>:null}
                </div> 
            </label> <label className="col-sm-6 p-0 pl-sm-0 date_input">
                <div className="heading mb-1">Parking Check-Out</div>
                    <input name="Check-Out" type="date" placeholder="Parking Check-Out" className="placeholder placeholder-airport" style={{width:'100%'}} onChange={CheckoutHandler}/>
                    {(Errors && Errors.Checkout)?<h3 style={{backgroundColor: 'rgba(100, 100, 100, 0.5)'}}>Invalid checkout date</h3>:null}
               
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