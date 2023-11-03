function Name({profileDetails, setProfileDetails}) {
    const handleFirstNameChange = (e) => {
        setProfileDetails({ ...profileDetails, firstName: e.target.value })
    }
    const handleLastNameChange = (e) => {
        setProfileDetails({ ...profileDetails, lastName: e.target.value })
    }
    return (
        <div className="name">
            <fieldset>
                <legend>Name</legend>
                <label htmlFor="firstName">First Name 
                    <input 
                        id="firstName" 
                        type="text" 
                        value={profileDetails.firstName}
                        onChange={handleFirstNameChange}
                    />
                </label>
                <label htmlFor="lastName">Last Name
                    <input 
                        id="lastName" 
                        type="text" 
                        value={profileDetails.lastName}
                        onChange={handleLastNameChange}
                    />
                </label>
            </fieldset>
        </div>
    )
}

function Contact({profileDetails, setProfileDetails}) {
    const handlePhoneChange = (e) => {
        setProfileDetails({ ...profileDetails, phone: e.target.value })
    }
    const handleEmailChange = (e) => {
        setProfileDetails({ ...profileDetails, email: e.target.value })
    }
    return (
        <div className="contact">
            <fieldset>
                <legend>Contacts</legend>
                <label htmlFor="phone">Phone 
                    <input 
                        type="tel"
                        value={profileDetails.phone}
                        onChange={handlePhoneChange} 
                    />
                </label>
                <label htmlFor="email">Email
                    <input 
                        type="email"
                        value={profileDetails.email}
                        onChange={handleEmailChange} />
                </label>
            </fieldset>
        </div>
    )
}

function Links({profileDetails, setProfileDetails}) {
    const handleLinkedInLinkChange = (e) => {
        setProfileDetails({ ...profileDetails, linkedInLink: e.target.value })
    }
    const handleGithubLinkChange = (e) => {
        setProfileDetails({ ...profileDetails, githubLink: e.target.value })
    }
    const handlePersonalPortfolioLinkChange = (e) => {
        setProfileDetails({ ...profileDetails, personalPortfolioLink: e.target.value })
    }
    return (
        <div className="links">
            <fieldset>
                <legend>Links</legend>
                <label htmlFor="linkedin">LinkedIn 
                    <input 
                        type="url" 
                        value={profileDetails.linkedInLink}
                        onChange={handleLinkedInLinkChange}
                    />
                </label>
                <label htmlFor="github">GitHub 
                    <input 
                        type="url" 
                        value={profileDetails.githubLink}
                        onChange={handleGithubLinkChange}
                    />
                </label>
                <label htmlFor="personalPortfolio">Personal Portfolio 
                    <input 
                        type="url" 
                        value={profileDetails.personalPortfolioLink}
                        onChange={handlePersonalPortfolioLinkChange}
                    />
                </label>
            </fieldset>
        </div>
    )
}

export default function ProfileEditor({activeEditor, profileDetails, setProfileDetails}) {
    let className = 'profileEditor  ';
    if (activeEditor === 'Profile') {
        className += 'active';
    }
    return (
        <div className={className}>
            <h2>Profile</h2>
            <Name 
                profileDetails={profileDetails}
                setProfileDetails={setProfileDetails}
            />
            <Contact 
                profileDetails={profileDetails}
                setProfileDetails={setProfileDetails}
            />
            <Links 
                profileDetails={profileDetails}
                setProfileDetails={setProfileDetails}
            />
        </div>
    )
}