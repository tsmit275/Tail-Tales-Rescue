// This form is for viewers to reach out to rescue representatives with questions etc.
import React, {useState} from "react";

function Contact(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const clearForm = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setMessage('')
    }

    const submitForm = () => {
        const newContact = {
            firstName,
            lastName,
            email,
            message
        }

        fetch('http://localhost:3001/api/contact/',{
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(newContact),
        }).then(response => response.json())
        .then(resp => {
            console.log(resp)
            alert('Contact Form submitted successfully');
            clearForm();
        }).catch(e => {
            alert(e.message);
        })
    }

    return(
            <main className="container">
            <h2>Contact Us</h2>
            <p>We are so happy you've taken an interest in our rescue! Let us know what questions you have, and we will be back in touch within 24-48 hours.</p>
                <div className="row">
                    <div className="form-group col-sm-4">
                        <label className="form-label">First Name:</label>
                        <input className="form-control" type="text" id="firstName" name="first-name" required value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}/>
                    </div>

                    <div className="form-group col-sm-4">
                        <label className="form-label">Last Name:</label>
                        <input className="form-control" type="text" id="lastName" name="last-name" value={lastName}
                        onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label className="form-label">E-mail Address:</label>
                        <input className="form-control" type="text" id="email" name="email" required value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>

                <div className="form-group col-sm-12">
                    <label className="form-label">Message:</label>
                    <textarea className="form-control" type="text" id="message" name="message" value={message}
                            onChange={(e) => setMessage(e.target.value)}/>
                </div>

                <button onClick={submitForm} className="btn btn-primary">Submit Inquiry</button>
            </main>
    )
}

export default Contact