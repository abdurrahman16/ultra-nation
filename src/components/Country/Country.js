import React from 'react';

const Country = (props) => {

    const {name, flag, population, region} = props.country;
    const countryStyle ={border: '1px solid red', margin:'10px', padding:'10px'};
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style ={countryStyle}>
            <h2>Country Name: {name}</h2>
            <img style={{height:"500px"}} src={flag} alt="" />
            <h3>Population: {population}</h3>
            <h3>Region: {region}</h3>
            <button onClick={()=> handleAddCountry(props.country) } >Add Country</button>

        </div>
    );
};

export default Country;