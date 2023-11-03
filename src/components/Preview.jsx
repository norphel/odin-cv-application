import Profile from './Profile';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';

import '../styles/Preview.css';

export default function Preview({profileDetails, workExperiences, projects, educationDetails, skills}) {
    return (
        <div className="preview">
            <Profile
                profileDetails={profileDetails}
            />
            <hr />
            <WorkExperience 
                workExperiences={workExperiences}
            />
            <Projects 
                projects={projects}
            />
            <Education 
                educationDetails={educationDetails}
            />
            <Skills 
                skills={skills}
            />
        </div>
    )
}