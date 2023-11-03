import { useState } from 'react';

import Editor from './Editor';
import Preview from './Preview'

import '../styles/Main.css';

export default function Main () {
    const [profileDetails, setProfileDetails] = useState({firstName: '', lastName: '', phone: '', email: '', linkedInLink: '', githubLink: '', personalPortfolioLink: ''})
    const [workExperiences, setWorkExperiences] = useState([{position: '', organization: '', fromDateWE: '', tillDateWE: '', contribution: ''}]);
    const [projects, setProjects] = useState([{ title: '', link:'', description: ''}]);
    const [educationDetails, setEducationDetails] = useState([{degree: '', institute: '', admYear: '', gradYear: '', gpaScore: '', scoreOutOf: ''}]);
    const [skills, setSkills] = useState([{skillset: '', skillsList: ''}]);
    return (
        <>
            <main>
                <Editor
                    profileDetails={profileDetails}
                    setProfileDetails={setProfileDetails}
                    workExperiences={workExperiences}
                    setWorkExperiences={setWorkExperiences}
                    projects={projects}
                    setProjects={setProjects}
                    educationDetails={educationDetails}
                    setEducationDetails={setEducationDetails}
                    skills={skills}
                    setSkills={setSkills}
                />
                <Preview 
                    profileDetails={profileDetails}
                    workExperiences={workExperiences}
                    projects={projects}
                    educationDetails={educationDetails}
                    skills={skills}
                />
            </main>
        </>
    )
}