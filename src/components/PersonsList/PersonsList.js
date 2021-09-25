import React from 'react';
import './PersonList.css'

const PersonsList = (props) => {
    let totalCost = 0;
    let peoples = [];
    for (const person of props.info) {
        totalCost = totalCost + person.cost;
        peoples.push(person.name);
    }
    return (
        <div>
            <h2>Persons Added: {props.info.length}</h2>
            <p>Total Cost: ${totalCost}</p>
            <h2>Persons List</h2>
            <ul className="persons-list">
                {
                    peoples.map(people => <li key={people}>{people}</li>)
                }
            </ul>
        </div>
    );
};

export default PersonsList;