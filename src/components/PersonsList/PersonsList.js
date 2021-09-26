import React from 'react';
import './PersonList.css'

const PersonsList = (props) => {
    let totalCost = 0;
    let peoples = [];
    for (const person of props.techPersons) {
        totalCost = totalCost + person.cost;
        peoples.push(person.name);
    }
    return (
        <div>
            <h2 style={{ color: 'dodgerblue' }}>Persons Added: {props.techPersons.length}</h2>
            <h2>Total Cost: ${totalCost}</h2>
            <h2 style={{ color: 'dodgerblue' }}>Persons List</h2>
            <ul className="persons-list">
                {
                    peoples.map(people => <li key={people}>{people}</li>)
                }
            </ul>
        </div>
    );
};

export default PersonsList;