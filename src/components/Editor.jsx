import { useState } from "react"

import Navigation from "./Navigation"
import ProfileEditor from "./ProfileEditor"
import WorkExperienceEditor from "./WorkExperienceEditor"
import ProjectsEditor from "./ProjectsEditor"
import EducationEditor from "./EducationEditor"
import SkillsEditor from "./SkillsEditor"

export default function Editor({onFirstNameChange, onLastNameChange}) {
    const [activeEditor, setActiveEditor] = useState('Profile');
    
    return (
        <div className="editor">
            <Navigation activeEditor={activeEditor} onActiveEditorChange={setActiveEditor} />
            <ProfileEditor 
                activeEditor={activeEditor} 
                onFirstNameChange={onFirstNameChange}
                onLastNameChange={onLastNameChange}
            />
            <WorkExperienceEditor activeEditor={activeEditor} />
            <ProjectsEditor activeEditor={activeEditor} />
            <EducationEditor activeEditor={activeEditor} />
            <SkillsEditor activeEditor={activeEditor} />
        </div>
    )
}