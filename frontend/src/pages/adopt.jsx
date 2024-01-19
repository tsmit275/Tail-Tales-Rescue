// This form is so a person can submit an application to adopt a pet

function Adopt(){
    return(
            <main className="container">
            <h2>Apply for Animal Adoption</h2>
            <p>We greatly appreciate all the animal lovers who have given their time to help. Let us know you're interested in helping our animals find FURever homes.</p>
            <form method="POST" action="/volunteers">
                <div className="row">
                    <div className="form-group col-sm-4">
                        <label htmlFor="firstName" className="form-label">First Name:</label>
                        <input className="form-control" type="text" id="firstName" name="first-name" required/>
                    </div>

                    <div className="form-group col-sm-4">
                        <label htmlFor="lastName" className="form-label">Last Name:</label>
                        <input className="form-control" type="text" id="lastName" name="last-name" required/>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="email" className="form-label">E-mail Address:</label>
                        <input className="form-control" type="text" id="email" name="email" required/>
                    </div>
                </div>

                <div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                        <input className="form-control" type="number" id="phoneNumber" name="phone-number"/>
                    </div>
                </div>

                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>

                <div className="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>

                <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose a state we serve...</option>
                        <option>GA</option>
                        <option>KY</option>
                        <option>NC</option>
                        <option>SC</option>
                        <option>TN</option>
                        <option>VA</option>
                    </select>
                </div>

                <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
                </div>
                
                <fieldset className="form-group">
                <div className="row">
                    <legend className="col-form-label col-sm-4 pt-0">I'm interested in adopting a:</legend>
                    <div className="col-sm-10">
                    <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                            <label clasNames="form-check-label" for="gridRadios2">Dog</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                            <label clasNames="form-check-label" for="gridRadios2">Cat</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"/>
                            <label clasNames="form-check-label" for="gridRadios3">Exotic</label>
                        </div>
                    </div>
                </div>
            </fieldset>

                <button className="btn btn-primary">Submit Application</button>
            </form>
            </main>
    )
}

export default Adopt