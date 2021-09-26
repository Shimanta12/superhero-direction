import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import PersonsList from '../PersonsList/PersonsList';
import './Persons.css';

const Persons = () => {
    const [persons, setPersons] = useState([]);
    const [techPersons, setTechPersons] = useState([]);

    useEffect(() => {
        fetch('./techGeniuses.json')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, []);

    const handleAddToList = person => {
        if (techPersons.indexOf(person) === -1) {
            const techGuys = [...techPersons, person];
            setTechPersons(techGuys);
        }
    }

    return (
        <div className="persons">
            <div className="persons-container">
                {
                    persons.map(person => <Person
                        key={person.id}
                        person={person}
                        handleAddToList={handleAddToList}
                    ></Person>)
                }
            </div>
            <div className="persons-info">
                <PersonsList techPersons={techPersons}></PersonsList>
            </div>
        </div>
    );
};

export default Persons;