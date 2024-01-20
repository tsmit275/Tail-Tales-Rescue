// This form is so a person can submit an application to adopt a pet
import React, {useState} from "react";

function Adopt(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [dog, setDog] = useState(true);
    const [cat, setCat] = useState(false);
    const [exotic, setExotic] = useState(false);

    const clearForm = () => {
        setDog(true);
        setCat(false);
        setExotic(false);

        setFirstName('');
        setLastName('')
        setEmail('')
        setPhoneNumber('')
        setAddress('')
        setAddress2('')
        setCity('')
        setState('')
        setZip('')
    }


    const submitForm = () => {
        const newAdoption = {
            firstName,
            lastName,
            email,
            phoneNumber,
            address,
            address2,
            city,
            state,
            zip,
            dog,
            cat,
            exotic
        }

        fetch('https://temptails.onrender.com/api/adoption/',{
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(newAdoption),
        }).then(response => response.json())
        .then(resp => {
            console.log(resp)
            alert('Adoption Form submitted successfully');
            clearForm();
        }).catch(e => {
            alert(e.message);
        })
    }

    return(
            <main className="container">
            <h2>Apply for Animal Adoption</h2>
            <p>We greatly appreciate all the animal lovers who have given their time to help. Let us know you're interested in helping our animals find FURever homes.</p>
                <div className="row">
                    <div className="form-group col-sm-4">
                        <label className="form-label">First Name:</label>
                        <input className="form-control" type="text" id="firstName" name="first-name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        required/>
                    </div>

                    <div className="form-group col-sm-4">
                        <label className="form-label">Last Name:</label>
                        <input className="form-control" type="text" id="lastName" name="last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required/>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-sm-6">
                        <label className="form-label">E-mail Address:</label>
                        <input className="form-control" type="text" id="email" name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        
                        required/>
                    </div>
                </div>

                <div>
                    <div className="form-group col-sm-6">
                        <label className="form-label">Phone Number:</label>
                        <input className="form-control" type="text" id="phoneNumber" name="phone-number" value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </div>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" id="inputAddress" value={address}
                        onChange={(e) => setAddress(e.target.value)} placeholder="1234 Main St"/>
                </div>

                <div className="form-group">
                    <label >Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" value={address2}
                        onChange={(e) => setAddress2(e.target.value)} placeholder="Apartment, studio, or floor"/>
                </div>
                
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label>City</label>
                    <input type="text" className="form-control" value={city}
                        onChange={(e) => setCity(e.target.value)} id="inputCity"/>
                </div>

                <div className="form-group col-md-4">
                    <label>State</label>
                    <select id="inputState" value={state}
                        onChange={(e) => setState(e.target.value)} className="form-control">
                        <option>Choose a state we serve...</option>
                        <option>GA</option>
                        <option>KY</option>
                        <option>NC</option>
                        <option>SC</option>
                        <option>TN</option>
                        <option>VA</option>
                    </select>
                </div>

                <div className="form-group col-md-2">
                    <label>Zip</label>
                    <input type="text" className="form-control" id="inputZip" value={zip}
                        onChange={(e) => setZip(e.target.value)}/>
                </div>
                </div>
                
                <fieldset className="form-group">
                <div className="row">
                    <legend className="col-form-label col-sm-4 pt-0">I'm interested in adopting a:</legend>
                    <div className="col-sm-10">
                    <div className="form-check">
                            <input className="form-check-input" checked={dog} type="radio" name="gridRadios" id="gridRadios1" value="option1" onChange={() => setDog(true)}/>
                            <label className="form-check-label">Dog</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" checked={cat} type="radio" name="gridRadios" id="gridRadios2" value="option2" onChange={() => setCat(true)}/>
                            <label className="form-check-label">Cat</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" checked={exotic} type="radio" name="gridRadios" id="gridRadios3" value="option3" onChange={() => setExotic(true)}/>
                            <label className="form-check-label">Exotic</label>
                        </div>
                    </div>
                </div>
            </fieldset>
                <button onClick={submitForm} className="btn btn-primary">Submit Application</button>
            </main>
    )
}

export default Adopt
