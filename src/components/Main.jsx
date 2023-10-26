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
    const [position, setPosition] = useState('');
    const [organization, setOrganization] = useState('');
    const [fromDateWE, setFromeDateWE] = useState('');
    const [tillDateWE, setTillDateWE] = useState('');
    const [contribution, setContribution] = useState('');

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
                    onPostionChange={setPosition}
                    onOrganizationChange={setOrganization}
                    onFromDateWEChange={setFromeDateWE}
                    onTillDateWEChange={setTillDateWE}
                    onContributionChange={setContribution}
                />
                <Preview 
                    firstName={firstName}
                    lastName={lastName}
                    phone={phone}
                    email={email}
                    linkedInLink={linkedInLink}
                    githubLink={githubLink}
                    personalPortfolioLink={personalPortfolioLink}
                    position={position}
                    organization={organization}
                    fromDateWE={fromDateWE}
                    tillDateWE={tillDateWE}
                    contribution={contribution}
                />
            </main>
        </>
    )
}