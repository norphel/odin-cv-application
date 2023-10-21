import Profile from './Profile';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';

import '../styles/Preview.css';

export default function Preview({firstName, lastName, phone, email, linkedInLink, githubLink, personalPortfolioLink}) {
    return (
        <div className="preview">
            <Profile
                firstName={firstName}
                lastName={lastName}
                phone={phone}
                email={email}
                linkedInLink={linkedInLink}
                githubLink={githubLink}
                personalPortfolioLink={personalPortfolioLink}
            />
            <hr />
            <WorkExperience />
            <Projects />
            <Education />
            <Skills />
        </div>
    )
}