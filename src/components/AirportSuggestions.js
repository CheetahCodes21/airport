import React from 'react';


const AirportSuggestions = ({airports=[],selectAirport}) => {

    if(airports.length===0){
        return null;
    }
    return (
        <div style={{
            position: 'absolute',
            backgroundColor: 'gray',
            borderRadius: '5px'
          }}>
            <ul>
                {airports.map((airport)=>(
                    <li  key={airport.id} className="suggestion-list" style={{
                            listStyle: 'none',
                            padding: '10px 0px',
                            borderBottom: '1px solid',
                            cursor:'pointer'
                          
                    }}
                    onClick={()=>selectAirport(airport.name)}
                    >
                        {airport.name}
                    </li>
                ))}
            </ul>
           
        </div>
    )
}

export default AirportSuggestions;