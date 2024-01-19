// This form is for volunteer candidates to submit their interest
import React, {useState} from "react";

function Volunteer(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [aboutYou, setAboutYou] = useState('');

    const clearForm = () => {
        setFirstName('');
        setLastName('')
        setEmail('')
        setPhoneNumber('')
        setAboutYou('')
    }

    const submitForm = () => {
        const newVolunteer = {
            firstName,
            lastName,
            email,
            phoneNumber,
            aboutYou
        }

        fetch('http://localhost:3001/api/volunteer/',{
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(newVolunteer),
        }).then(response => response.json())
        .then(resp => {
            console.log(resp)
            alert('Volunteer Form submitted successfully');
            clearForm();
        }).catch(e => {
            alert(e.message);
        })
    }

    return(
            <main className="container">
            <h2>Volunteer Inquiry</h2>
            <p>We greatly appreciate all the animal lovers who have given their time to help. Let us know you're interested in helping our animals find FURever homes.</p>
                <div className="row">
                    <div className="form-group col-sm-4">
                        <label className="form-label">First Name:</label>
                        <input className="form-control" type="text" id="firstName" name="first-name" required value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}/>
                    </div>

                    <div className="form-group col-sm-4">
                        <label className="form-label">Last Name:</label>
                        <input className="form-control" type="text" id="lastName" name="last-name" required value={lastName}
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

                <div>
                    <div className="form-group col-sm-6">
                        <label className="form-label">Phone Number:</label>
                        <input className="form-control" type="number" id="phoneNumber" name="phone-number" value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </div>
                </div>

                <div className="form-group col-sm-12">
                    <label className="form-label">Tell us about yourself and why you'd like to join our organization:</label>
                    <textarea className="form-control" type="text" id="aboutYou" name="about-you" value={aboutYou}
                            onChange={(e) => setAboutYou(e.target.value)}/>
                </div>
                { /*
                <div className="form-group col-sm-12 custom-file">
                    <label className="custom-file-label" for="customFile">Have a pet of your own? Show us your animal bestie!:</label>
                    <input type="file" class="custom-file-input" id="customFile"/>
                </div> 

                <div className="form-group col-sm-12 custom-file">
                    <label className="custom-file-label" for="customFile">Upload Resume</label>
                    <input type="file" class="custom-file-input" id="customFile"/>
                </div>
                */}

                <button onClick={submitForm} className="btn btn-primary">Sign Me Up</button>
            </main>
    )
}

export default Volunteer