import React from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import AnimalTable from "./animalTable";
import VolunteerTable from "./volunteerTable";
import "./adminPanel.css";
import AdoptionTable from "./adoptionTable";

const AdminPanels = () => {
    return (
        <Container fluid className="mt-4">
            <Tabs defaultActiveKey="adoptions" className="mb-3">
                <Tab eventKey="adoptions" title="Adoptions">
                    <AdoptionTable/>
                </Tab>
                <Tab eventKey="volunteers" title="Volunteers">
                    <VolunteerTable/>
                </Tab>
                <Tab eventKey="animals" title="Animals">
                    <AnimalTable/>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default AdminPanels;
