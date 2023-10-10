import profile from '../assets/profile.svg';
import work from '../assets/work.svg';
import projects from '../assets/projects.svg'
import education from '../assets/education.svg';
import skills from '../assets/skills.svg';

function Navigation() {
    return (
        <nav>
            <div className='active'>
                <img src={profile} alt="profile icon" />
            </div>
            <div>
                <img src={work} alt="work experience icon" />
            </div>
            <div>
                <img src={projects} alt="projects icon" /></div>
            <div>
                <img src={education} alt="education icon" />
            </div>
            <div>
                <img src={skills} alt="skills icon" />
            </div>
        </nav>
    )
}

export default function Editor() {
    return (
        <div className="editor">
            <Navigation />
        </div>
    )
}