
// This page will show individual animal listings with more detail.
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pet = () => {
    const { id } = useParams();
    const [data, setData] = useState({
        id: '',
        photo: '',
        name: '',
        type: '',
        breed: '',
        sex: '',
        age: 0,
        description: '',
    })
    useEffect(() => {
        fetch('http://localhost:3001/api/animals/' + id)
            .then(data => data.json())
            .then(json => setData(json))
    }, [])

    if (data.id){
        return (
        <>
            <h1>{data.name} ({data.gender})</h1>
            <h2>{data.breed}</h2>
            <div>
                <img src={data.picture01} alt={data.name} />
            </div>
        </>
    )
    } else {
        return null;
    }
}

export default Pet

