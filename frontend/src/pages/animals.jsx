
import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import "./animals.css";

const Animals = ({ animal = '' }) => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        // need to change out this url depending on how the backend is built
        
        fetch('https://temptails.onrender.com/api/animals/')
            .then(res => res.json())
            .then(json => setData(json));
    }, [])

    return (
        <div className="pet-grid">
            {data && data.map((pet, index) => (
                <Link to={`/animal/${pet.id}`} key={index} className="pet-card">
                    <img src={pet.picture01} alt={pet.picture01} className="pet-image" />
                    <div className="pet-info">
                        <h3>{pet.name}</h3>
                        <p>{pet.gender}</p>
                        <p>{pet.breed}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Animals;
