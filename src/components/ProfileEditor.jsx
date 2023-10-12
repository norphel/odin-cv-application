function Name() {
    return (
        <div className="name">
            <fieldset>
                <legend>Name</legend>
                <label htmlFor="firstName">First Name: 
                    <input htmlFor="firstName" type="text" />
                </label>
                <label htmlFor="lastName">Last Name: 
                    <input htmlFor="lastName" type="text" />
                </label>
            </fieldset>
        </div>
    )
}

function Contact() {
    return (
        <div className="contact">
            <fieldset>
                <legend>Contacts</legend>
                <label htmlFor="phone">Phone: 
                    <input type="tel" />
                </label>
                <label htmlFor="email">Email:
                    <input type="email" />
                </label>
            </fieldset>
        </div>
    )
}

function Links() {
    return (
        <div className="links">
            <fieldset>
                <legend>Links</legend>
                <label htmlFor="linkedin">LinkedIn: 
                    <input type="url" />
                </label>
                <label htmlFor="github">GitHub: 
                    <input type="url" />
                </label>
                <label htmlFor="personalPortfolio">Personal Portfolio: 
                    <input type="url" />
                </label>
            </fieldset>
        </div>
    )
}

export default function ProfileEditor() {
    return (
        <div className="profileEditor active">
            <h2>Profile</h2>
            <Name />
            <Contact />
            <Links />
        </div>
    )
}