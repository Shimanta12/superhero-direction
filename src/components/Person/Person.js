import React from 'react';
import './Person.css';

const Person = (props) => {
    const { img, name, age, founderOf, netWorth, nationality, cost } = props.person;
    return (
        <div className="person">
            <div className="person-image">
                <img src={img} alt="" />
            </div>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Founder of: {founderOf}</p>
            <p>Net worth: {netWorth}</p>
            <p>Nationality: {nationality}</p>
            <p>Cost: ${cost}</p>
            <button onClick={() => props.handleAddToList(props.person)} className="add-to-list-btn">Add To List</button>
        </div>
    );
};

export default Person;