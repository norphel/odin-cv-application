function Name({onFirstNameChange, onLastNameChange}) {
    return (
        <div className="name">
            <fieldset>
                <legend>Name</legend>
                <label htmlFor="firstName">First Name 
                    <input 
                        htmlFor="firstName" 
                        type="text" 
                        onChange={(e) => onFirstNameChange(e.target.value)}
                    />
                </label>
                <label htmlFor="lastName">Last Name
                    <input 
                        htmlFor="lastName" 
                        type="text" 
                        onChange={(e) => onLastNameChange(e.target.value)}
                    />
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
                <label htmlFor="phone">Phone 
                    <input type="tel" />
                </label>
                <label htmlFor="email">Email
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
                <label htmlFor="linkedin">LinkedIn 
                    <input type="url" />
                </label>
                <label htmlFor="github">GitHub 
                    <input type="url" />
                </label>
                <label htmlFor="personalPortfolio">Personal Portfolio 
                    <input type="url" />
                </label>
            </fieldset>
        </div>
    )
}

export default function ProfileEditor({activeEditor, onFirstNameChange, onLastNameChange}) {
    let className = 'profileEditor  ';
    if (activeEditor === 'Profile') {
        console.log(activeEditor);
        className += 'active';
    }
    return (
        <div className={className}>
            <h2>Profile</h2>
            <Name 
                onFirstNameChange={onFirstNameChange}
                onLastNameChange={onLastNameChange}
            />
            <Contact />
            <Links />
        </div>
    )
}