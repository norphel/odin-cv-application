import Profile from './Profile';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Education from './Education';

import '../styles/Preview.css';

function Skills() {

}

export default function Preview() {
    return (
        <div className="preview">
            <Profile />
            <hr />
            <WorkExperience />
            <Projects />
            <Education />
        </div>
    )
}