import { useState } from 'react';

import Editor from './Editor';
import Preview from './Preview'

import '../styles/Main.css';

export default function Main () {
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState('');
    return (
        <>
            <main>
                <Editor
                    onFirstNameChange={setFirstName} 
                    onLastNameChange={setLastName}   
                />
                <Preview 
                    firstName={firstName}
                    lastName={lastName}
                />
            </main>
        </>
    )
}