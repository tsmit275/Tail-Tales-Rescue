import {useEffect, useState} from 'react';
import "./animals.css";
import {Card, Col, Container, Row, Spinner} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


const Animals = () => {
    const [animals, setAnimals] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        fetch(`${process.env.REACT_APP_FETCH_URL}/api/animals/`)
            .then(res => res.json())
            .then(json => {
                setAnimals(json)
                setIsLoading(false)
            })
            .catch(error => {
                console.error(error);
                alert(error)
                setIsLoading(false);
            });
    }, [])
    const handleCardClick = (animalId) => {
        navigate(`/animal/${animalId}`);
    };


    return (
        <Container>
            {isLoading ? (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <Row>
                    {animals && animals.map((animal, index) => (
                        <Col key={index} md={4} className="mb-4">
                            <Card className="h-100" onClick={() => handleCardClick(animal.id)}>
                                <Card.Img variant="top" src={animal.picture01} alt={animal.name} className="animal-card-img"/>
                                <Card.Body>
                                    <Card.Title className="text-center">{animal.name}/{animal.gender}</Card.Title>
                                    <div className="d-flex justify-content-between">
                                        {animal.age && <span>{animal.age} years</span>}
                                        {animal.breed && <span>{animal.breed}</span>}
                                    </div>
                                    {animal.description && <div>{animal.description}</div>}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default Animals;

