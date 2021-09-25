import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import PersonsList from '../PersonsList/PersonsList';
import './Persons.css';

const Persons = () => {
    const [persons, setPersons] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('./techPersons.json')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, []);

    const handleAddToList = person => {
        if (info.indexOf(person) === -1) {
            const personInfo = [...info, person];
            setInfo(personInfo);
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
                <PersonsList info={info}></PersonsList>
            </div>
        </div>
    );
};

export default Persons;