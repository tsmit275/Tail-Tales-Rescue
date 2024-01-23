import React, {useEffect, useState} from 'react';
import {Table, Container, Spinner, Dropdown, DropdownButton, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faSave, faTimes, faTrash} from '@fortawesome/free-solid-svg-icons';

const VolunteerTable = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [volunteers, setVolunteers] = useState([]);
    const [editRowId, setEditRowId] = useState(null);

    const handleEdit = (id) => {
        setEditRowId(id);
    };

    const handleSave = async (id) => {
        await updateRow(id, volunteers.find(row => row.id === id));
        setEditRowId(null);
        fetchVolunteers();
    };

    const updateRow = async (id, data) => {
        setIsLoading(true);
        fetch(`${process.env.REACT_APP_FETCH_URL}/api/volunteer/${id}`, {
            method: "PUT",
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(() => {
                alert('Volunteer Updated')
                fetchVolunteers();
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
        fetch(`${process.env.REACT_APP_FETCH_URL}/api/volunteer/${id}`, {
            method: "DELETE",
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(() => {
                alert('Volunteer Deleted')
                fetchVolunteers();
                setIsLoading(false)
            })
            .catch(error => {
                console.error(error);
                alert(error)
                setIsLoading(false);
            });
    };

    const handleApprovedChange = (value, id) => {
        const newVolunteers = volunteers.map(volunteer => {
            if (volunteer.id === id) {
                return {...volunteer, approved: value};
            }
            return volunteer;
        });
        setVolunteers(newVolunteers);
    };

    const fetchVolunteers = () => {
        setIsLoading(true);
        fetch(`${process.env.REACT_APP_FETCH_URL}/api/volunteer/`)
            .then(res => res.json())
            .then(json => {
                setVolunteers(json)
                setIsLoading(false)
            })
            .catch(error => {
                console.error(error);
                alert(error)
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchVolunteers();
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
                            <th>About You</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Approved</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {volunteers.map(volunteer => (
                            <tr key={volunteer.id}>
                                <td>{volunteer.firstName}</td>
                                <td>{volunteer.lastName}</td>
                                <td>{volunteer.aboutYou}</td>
                                <td>{volunteer.phoneNumber}</td>
                                <td>{volunteer.email}</td>
                                <td>
                                    {editRowId === volunteer.id ? (
                                        <DropdownButton id="dropdown-basic-button"
                                                        title={volunteer.approved ? "Yes" : "No"}>
                                            <Dropdown.Item
                                                onClick={() => handleApprovedChange(true, volunteer.id)}>Yes</Dropdown.Item>
                                            <Dropdown.Item
                                                onClick={() => handleApprovedChange(false, volunteer.id)}>No</Dropdown.Item>
                                        </DropdownButton>
                                    ) : volunteer.approved ? "Yes" : "No"}
                                </td>
                                <td>
                                    {editRowId === volunteer.id ? (
                                        <>
                                            <Button variant="success" onClick={() => handleSave(volunteer.id)}
                                                    className="me-2">
                                                <FontAwesomeIcon icon={faSave}/>
                                            </Button>
                                            <Button variant="secondary" onClick={() => setEditRowId(null)}>
                                                <FontAwesomeIcon icon={faTimes}/>
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button onClick={() => handleEdit(volunteer.id)}>
                                                <FontAwesomeIcon icon={faEdit}/>
                                            </Button>
                                            <Button variant="danger" onClick={() => deleteRow(volunteer.id)}>
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

export default VolunteerTable;
