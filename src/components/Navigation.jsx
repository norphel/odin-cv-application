import profile from '../assets/profile.svg';
import work from '../assets/work.svg';
import projects from '../assets/projects.svg'
import education from '../assets/education.svg';
import skills from '../assets/skills.svg';

export default function Navigation({activeEditor, onActiveEditorChange}) {
    return (
        <nav>
            <div 
                className={activeEditor === 'Profile' ? 'active' : ''}
                onClick={() => onActiveEditorChange('Profile')}>
                    <img src={profile} alt="profile icon" />
            </div>
            <div
                className={activeEditor === 'WorkExperience' ? 'active' : ''}
                onClick={() => onActiveEditorChange('WorkExperience')}>
                    <img src={work} alt="work experience icon" />
            </div>
            <div
                className={activeEditor === 'Projects' ? 'active' : ''}
                onClick={() => onActiveEditorChange('Projects')}>
                    <img src={projects} alt="projects icon" /></div>
            <div
                className={activeEditor === 'Education' ? 'active' : ''}
                onClick={() => onActiveEditorChange('Education')}>
                    <img src={education} alt="education icon" />
            </div>
            <div
                className={activeEditor === 'Skills' ? 'active' : ''}
                onClick={() => onActiveEditorChange('Skills')}>
                    <img src={skills} alt="skills icon" />
            </div>
        </nav>
    )
}