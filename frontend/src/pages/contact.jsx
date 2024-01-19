// This form is for viewers to reach out to rescue representatives with questions etc.

function Contact(){
    return(
            <main className="container">
            <h2>Contact Us</h2>
            <p>We are so happy you've taken an interest in our rescue! Let us know what questions you have, and we will be back in touch within 24-48 hours.</p>
            <form method="POST" action="/volunteers">
                <div className="row">
                    <div className="form-group col-sm-4">
                        <label htmlFor="firstName" className="form-label">First Name:</label>
                        <input className="form-control" type="text" id="firstName" name="first-name" required/>
                    </div>

                    <div className="form-group col-sm-4">
                        <label htmlFor="lastName" className="form-label">Last Name:</label>
                        <input className="form-control" type="text" id="lastName" name="last-name"/>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="email" className="form-label">E-mail Address:</label>
                        <input className="form-control" type="text" id="email" name="email" required/>
                    </div>
                </div>

                <div className="form-group col-sm-12">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea className="form-control" type="text" id="message" name="message"/>
                </div>

                <button className="btn btn-primary">Sumbit Inquiry</button>
            </form>
            </main>
    )
}

export default Contact