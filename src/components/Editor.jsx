import { useState } from "react"

import Navigation from "./Navigation"
import ProfileEditor from "./ProfileEditor"
import WorkExperienceEditor from "./WorkExperienceEditor"
import ProjectsEditor from "./ProjectsEditor"
import EducationEditor from "./EducationEditor"
import SkillsEditor from "./SkillsEditor"

export default function Editor({onFirstNameChange, onLastNameChange, onPhoneChange, onEmailChange, onLinkedInLinkChange, onGithubLinkChange, onPersonalPortfolioLinkChange, workExperiences, setWorkExperiences, projects, setProjects}) {
    const [activeEditor, setActiveEditor] = useState('Profile');
    
    return (
        <div className="editor">
            <Navigation activeEditor={activeEditor} onActiveEditorChange={setActiveEditor} />
            <ProfileEditor 
                activeEditor={activeEditor} 
                onFirstNameChange={onFirstNameChange}
                onLastNameChange={onLastNameChange}
                onPhoneChange={onPhoneChange}
                onEmailChange={onEmailChange}
                onLinkedInLinkChange={onLinkedInLinkChange}
                onGithubLinkChange={onGithubLinkChange}
                onPersonalPortfolioLinkChange={onPersonalPortfolioLinkChange}
            />
            <WorkExperienceEditor 
                activeEditor={activeEditor} 
                workExperiences={workExperiences}
                setWorkExperiences={setWorkExperiences}
            />
            <ProjectsEditor 
                activeEditor={activeEditor}
                projects={projects}
                setProjects={setProjects}
            />
            <EducationEditor activeEditor={activeEditor} />
            <SkillsEditor activeEditor={activeEditor} />
        </div>
    )
}