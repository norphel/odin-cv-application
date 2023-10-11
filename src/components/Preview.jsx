import Profile from './Profile';
import WorkExperience from './WorkExperience';
import Projects from './Projects';

import '../styles/Preview.css';

function Education() {

}

function Skills() {

}

export default function Preview() {
    return (
        <div className="preview">
            <Profile />
            <hr />
            <WorkExperience />
            <Projects />
        </div>
    )
}