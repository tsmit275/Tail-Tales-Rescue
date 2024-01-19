
import { useEffect, useState } from 'react';

const Animals = ({ animal = '' }) => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        // need to change out this url depending on how the backend is built
        
        fetch('http://localhost:3001/api/animals/')
            .then(res => res.json())
            .then(json => setData(json));
    }, [])

    return (
        <div className="d-flex flex-wrap justify-content-space-between">
            {data && data.map(({ id, name, breed, gender, picture01, picture02 }) => (
                <a className="card" href={`/animal/${id}`}>
                    <div><img alt="Picture01" src={picture01} /></div>
                    <div><img alt="Picture02" src={picture02} /></div>
                    <p>Name: {name}</p>
                    <p>Gender: {gender}</p>
                    <p>Breed: {breed}</p>
                </a>
            ))}
        </div>
    )
}

export default Animals;

