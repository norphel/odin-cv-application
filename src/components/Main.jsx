import { useState } from 'react';

import Editor from './Editor';
import Preview from './Preview'

import '../styles/Main.css';

export default function Main () {
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('')
    const [linkedInLink, setLinkedInLink] = useState('');
    const [githubLink, setGithubLink] = useState('');
    const [personalPortfolioLink, setPersonalPortfolioLink] = useState('');
    return (
        <>
            <main>
                <Editor
                    onFirstNameChange={setFirstName} 
                    onLastNameChange={setLastName}  
                    onPhoneChange={setPhone} 
                    onEmailChange={setEmail}
                    onLinkedInLinkChange={setLinkedInLink}
                    onGithubLinkChange={setGithubLink}
                    onPersonalPortfolioLinkChange={setPersonalPortfolioLink}
                />
                <Preview 
                    firstName={firstName}
                    lastName={lastName}
                    phone={phone}
                    email={email}
                    linkedInLink={linkedInLink}
                    githubLink={githubLink}
                    personalPortfolioLink={personalPortfolioLink}
                />
            </main>
        </>
    )
}