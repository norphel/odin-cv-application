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

function Contact({onPhoneChange, onEmailChange}) {
    return (
        <div className="contact">
            <fieldset>
                <legend>Contacts</legend>
                <label htmlFor="phone">Phone 
                    <input 
                        type="tel"
                        onChange={(e) => onPhoneChange(e.target.value)} 
                    />
                </label>
                <label htmlFor="email">Email
                    <input 
                        type="email"
                        onChange={(e) => onEmailChange(e.target.value)} />
                </label>
            </fieldset>
        </div>
    )
}

function Links({onLinkedInLinkChange, onGithubLinkChange, onPersonalPortfolioLinkChange}) {
    return (
        <div className="links">
            <fieldset>
                <legend>Links</legend>
                <label htmlFor="linkedin">LinkedIn 
                    <input 
                        type="url" 
                        onChange={(e) => onLinkedInLinkChange(e.target.value)}
                    />
                </label>
                <label htmlFor="github">GitHub 
                    <input 
                        type="url" 
                        onChange={(e) => onGithubLinkChange(e.target.value)}
                    />
                </label>
                <label htmlFor="personalPortfolio">Personal Portfolio 
                    <input 
                        type="url" 
                        onChange={(e) => onPersonalPortfolioLinkChange(e.target.value)}
                    />
                </label>
            </fieldset>
        </div>
    )
}

export default function ProfileEditor({activeEditor, onFirstNameChange, onLastNameChange, onPhoneChange, onEmailChange, onLinkedInLinkChange, onGithubLinkChange, onPersonalPortfolioLinkChange}) {
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
            <Contact 
                onPhoneChange={onPhoneChange}
                onEmailChange={onEmailChange}
            />
            <Links 
                onLinkedInLinkChange={onLinkedInLinkChange}
                onGithubLinkChange={onGithubLinkChange}
                onPersonalPortfolioLinkChange={onPersonalPortfolioLinkChange}
            />
        </div>
    )
}