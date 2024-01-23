import React, {useState} from "react";
import {Container} from "react-bootstrap";
import LoginForm from "../component/login";
import AdminPanels from "../component/adminPanels";

function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Container fluid>
            <div>username: admin / password: admin</div>
            {!isLoggedIn ? <LoginForm onLogin={setIsLoggedIn}/> : <AdminPanels/>}
        </Container>
    );
}

export default Admin
