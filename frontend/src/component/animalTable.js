import React, {useEffect, useState} from 'react';
import {Table, Button, Form, Container, Spinner} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faTimes, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const AnimalTable = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [animals, setAnimals] = useState([]);
    const [editRowId, setEditRowId] = useState(null);
    const [newRow, setNewRow] = useState({name: '', age: '', breed: '', description: '', gender: '', picture01: ''});

    const handleEdit = (id) => {
        setEditRowId(id);
    };

    const handleSave = async (id) => {
        if (id === 'new') {
            await createRow(newRow);
            setEditRowId(null);
            setNewRow({ name: '', age: '', breed: '', description: '', gender: '', picture01: '' });
        } else {
            await updateRow(id, animals.find(row => row.id === id));
            setEditRowId(null);
        }
        fetchAnimals();
    };

    const createRow = async (data) => {
        setIsLoading(true);
        fetch(`${process.env.REACT_APP_FETCH_URL}/api/animals/`,{
            method: "POST",
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                alert('Animal Created')
                fetchAnimals();
                setIsLoading(false)
            })
            .catch(error => {
                console.error(error);
                alert(error)
                setIsLoading(false);
            });
    };

    const updateRow = async (id, data) => {
        setIsLoading(true);
        fetch(`${process.env.REACT_APP_FETCH_URL}/api/animals/${id}`,{
            method: "PUT",
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                alert('Animal Updated')
                fetchAnimals();
                setIsLoading(false)
            })
            .catch(error => {
                console.error(error);
                alert(error)
                setIsLoading(false);
            });
    };

    const deleteRow = async (id) => {
        setIsLoading(true);
        fetch(`${process.env.REACT_APP_FETCH_URL}/api/animals/${id}`,{
            method: "DELETE",
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(json => {
                alert('Animal Deleted')
                fetchAnimals();
                setIsLoading(false)
            })
            .catch(error => {
                console.error(error);
                alert(error)
                setIsLoading(false);
            });
    };

    const handleCancel = () => {
        setEditRowId(null);
        setNewRow({name: '', age: '', breed: '', description: '', gender: '', picture01: ''});
    };

    const handleChange = (e, id) => {
        const {name, value} = e.target;
        if (id === 'new') {
            setNewRow({...newRow, [name]: value});
        } else {
            const newRows = animals.map(row => {
                if (row.id === id) {
                    return {...row, [name]: value};
                }
                return row;
            });
            setAnimals(newRows);
        }
    };

    const fetchAnimals = () => {
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
    }

    useEffect(() => {
        fetchAnimals()
    }, [])

    return (
        <Container fluid className="mt-4">
            {isLoading ? (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <>
                    <Button onClick={() => setEditRowId('new')} className="mb-3">
                        <FontAwesomeIcon icon={faPlus}/> New
                    </Button>
                    <Table striped bordered hover responsive>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Breed</th>
                            <th>Description</th>
                            <th>Gender</th>
                            <th>Picture URL</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {editRowId === 'new' && (
                            <tr>
                                {['name', 'age', 'breed', 'description', 'gender', 'picture01'].map(field => (
                                    <td key={field}>
                                        <Form.Control
                                            type="text"
                                            name={field}
                                            value={newRow[field]}
                                            onChange={(e) => handleChange(e, 'new')}
                                        />
                                    </td>
                                ))}
                                <td>
                                    <Button variant="success" onClick={() => handleSave('new')} className="me-2">
                                        <FontAwesomeIcon icon={faSave} />
                                    </Button>
                                    <Button variant="secondary" onClick={handleCancel}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </Button>
                                </td>
                            </tr>
                        )}
                        {animals && animals.map(row => (
                            <tr key={row.id}>
                                {['name', 'age', 'breed', 'description', 'gender', 'picture01'].map(field => (
                                    <td key={field}>
                                        {editRowId === row.id ? (
                                            <Form.Control
                                                type="text"
                                                name={field}
                                                value={row[field]}
                                                onChange={(e) => handleChange(e, row.id)}
                                            />
                                        ) : (
                                            row[field]
                                        )}
                                    </td>
                                ))}
                                <td>
                                    {editRowId === row.id ? (
                                        <>
                                            <Button variant="success" onClick={() => handleSave(row.id)} className="me-2">
                                                <FontAwesomeIcon icon={faSave} />
                                            </Button>
                                            <Button variant="secondary" onClick={() => setEditRowId(null)}>
                                                <FontAwesomeIcon icon={faTimes} />
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button onClick={() => handleEdit(row.id)} className="me-2">
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Button>
                                            <Button variant="danger" onClick={() => deleteRow(row.id)}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </Button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </>)}
        </Container>
    );
};

export default AnimalTable;
