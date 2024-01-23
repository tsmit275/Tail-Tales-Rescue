import React, {useEffect, useState} from 'react';
import {Table, Container, Spinner, Dropdown, DropdownButton, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faSave, faTimes, faTrash} from '@fortawesome/free-solid-svg-icons';

const AdoptionTable = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [adoptions, setAdoptions] = useState([]);
    const [editRowId, setEditRowId] = useState(null);

    const handleEdit = (id) => {
        setEditRowId(id);
    };

    const handleSave = async (id) => {
        await updateRow(id, adoptions.find(row => row.id === id));
        setEditRowId(null);
        fetchAdoptions();
    };

    const updateRow = async (id, data) => {
        setIsLoading(true);
        fetch(`${process.env.REACT_APP_FETCH_URL}/api/adoption/${id}`, {
            method: "PUT",
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(() => {
                alert('Adoption Record Updated')
                fetchAdoptions();
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
        fetch(`${process.env.REACT_APP_FETCH_URL}/api/adoption/${id}`, {
            method: "DELETE",
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(() => {
                alert('Adoption Deleted')
                fetchAdoptions();
                setIsLoading(false)
            })
            .catch(error => {
                console.error(error);
                alert(error)
                setIsLoading(false);
            });
    };

    const handleApprovedChange = (value, id) => {
        const newAdoptions = adoptions.map(adoption => {
            if (adoption.id === id) {
                return {...adoption, approved: value};
            }
            return adoption;
        });
        setAdoptions(newAdoptions);
    };

    const fetchAdoptions = () => {
        setIsLoading(true);
        fetch(`${process.env.REACT_APP_FETCH_URL}/api/adoption/`)
            .then(res => res.json())
            .then(json => {
                setAdoptions(json)
                setIsLoading(false)
            })
            .catch(error => {
                console.error(error);
                alert(error)
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchAdoptions();
    }, []);

    return (
        <Container fluid className="my-4 h-100">
            {isLoading ? (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <div className="table-min-height">
                    <Table striped bordered hover responsive className="mb-5 h-100">
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Address 2</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Approved</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {adoptions.map(adoption => (
                            <tr key={adoption.id}>
                                <td>{adoption.firstName}</td>
                                <td>{adoption.lastName}</td>
                                <td>{adoption.email}</td>
                                <td>{adoption.phoneNumber}</td>
                                <td>{adoption.address}</td>
                                <td>{adoption.address2}</td>
                                <td>{adoption.city}</td>
                                <td>{adoption.state}</td>
                                <td>{adoption.zip}</td>
                                <td>
                                    {editRowId === adoption.id ? (
                                        <DropdownButton id="dropdown-basic-button"
                                                        title={adoption.approved ? "Yes" : "No"}>
                                            <Dropdown.Item
                                                onClick={() => handleApprovedChange(true, adoption.id)}>Yes</Dropdown.Item>
                                            <Dropdown.Item
                                                onClick={() => handleApprovedChange(false, adoption.id)}>No</Dropdown.Item>
                                        </DropdownButton>
                                    ) : adoption.approved ? "Yes" : "No"}
                                </td>
                                <td>
                                    {editRowId === adoption.id ? (
                                        <>
                                            <Button variant="success" onClick={() => handleSave(adoption.id)}
                                                    className="me-2">
                                                <FontAwesomeIcon icon={faSave}/>
                                            </Button>
                                            <Button variant="secondary" onClick={() => setEditRowId(null)}>
                                                <FontAwesomeIcon icon={faTimes}/>
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button onClick={() => handleEdit(adoption.id)}>
                                                <FontAwesomeIcon icon={faEdit}/>
                                            </Button>
                                            <Button variant="danger" onClick={() => deleteRow(adoption.id)}>
                                                <FontAwesomeIcon icon={faTrash}/>
                                            </Button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            )}
        </Container>
    );
};

export default AdoptionTable;
