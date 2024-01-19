// This form is for volunteer candidates to submit their interest

function Volunteer(){
    return(
            <main className="container">
            <h2>Volunteer Inquiry</h2>
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

                <div className="form-group col-sm-12">
                    <label htmlFor="aboutYou" className="form-label">Tell us about yourself and why you'd like to join our organization:</label>
                    <textarea className="form-control" type="text" id="aboutYou" name="about-you"/>
                </div>
                
                <div className="form-group col-sm-12 custom-file">
                    <label className="custom-file-label" for="customFile">Have a pet of your own? Show us your animal bestie!:</label>
                    <input type="file" class="custom-file-input" id="customFile"/>
                </div>

                <div className="form-group col-sm-12 custom-file">
                    <label className="custom-file-label" for="customFile">Upload Resume</label>
                    <input type="file" class="custom-file-input" id="customFile"/>
                </div>

                <button className="btn btn-primary">Sign Me Up</button>
            </form>
            </main>
    )
}

export default Volunteer