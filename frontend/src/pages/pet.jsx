import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import "./pet.css";
import {Card, Container, Spinner} from "react-bootstrap";

const Pet = () => {
    const {id} = useParams();
    const [animal, setAnimal] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    console.log(id);

    useEffect(() => {
        if (!id) {
            return;
        }
        fetch(`${process.env.REACT_APP_FETCH_URL}/api/animals/` + id)
            .then(data => data.json())
            .then(json => {
                setAnimal(json);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, [id])

    return (
        <Container className="my-3">
            {isLoading ? (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <>
                    {animal && (
                        <Card>
                            <Card.Img variant="top" src={animal.picture01} alt={animal.name}/>
                            <Card.Body>
                                <Card.Title>{animal.name}</Card.Title>
                                <Card.Text>
                                    <b>Age:</b> {animal.age} years
                                    <br/>
                                        <b>Breed:</b> {animal.breed}
                                    <br/>
                                        <b>Gender:</b> {animal.gender}
                                </Card.Text>
                                {animal.description && <Card.Text><b>Description:</b> {animal.description}</Card.Text>}
                            </Card.Body>
                        </Card>
                    )}
                </>
            )}
        </Container>
    )
}

export default Pet

