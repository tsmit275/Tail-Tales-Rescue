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
        fetch('/animals/' + id)
            .then(data => data.json())
            .then(json => setData(json))
    }, [])

    if (data.id){
        return (
        <>
            <h1>{data.name} ({data.sex})</h1>
            <h2>{data.age} years old</h2>
            <div>
                <img src={data.photo} alt={data.name} />
            </div>
            <p>{data.description}</p>
        </>
    )
    } else {
        return null;
    }
}

export default Pet