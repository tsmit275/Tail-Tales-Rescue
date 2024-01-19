// This page is the "gallery" page showing all adoptable animals.
import { useEffect, useState } from 'react';

const Animals = ({ animal = '' }) => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        // need to change out this url depending on how the backend is built
        
        fetch('http://localhost:3001/api/animals/' + animal)
            .then(res => res.json())
            .then(json => setData(json));
    }, [])

    return (
        <div className="d-flex flex-wrap justify-content-space-between">
            {data.map(({ id, name, age, img, desc }) => (
                <a className="card" href={`/animal/${id}`}>
                    <div><img src={img} /></div>
                    <p>{name}</p>
                    <p>{age} years old</p>
                    <p>{desc}</p>
                </a>
            ))}
        </div>
    )
}

export default Animals;