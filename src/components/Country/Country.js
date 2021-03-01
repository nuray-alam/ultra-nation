import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, population, region,flag} = props.country;
    return (
        <div className= 'country'>
            <h4>This is {name}</h4>
            <img src= {flag} alt=""/>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick = {() => props.handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;