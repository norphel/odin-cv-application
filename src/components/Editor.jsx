import { useState } from "react"

import Navigation from "./Navigation"
import ProfileEditor from "./ProfileEditor"
import WorkExperienceEditor from "./WorkExperienceEditor"
import ProjectsEditor from "./ProjectsEditor"
import EducationEditor from "./EducationEditor"
import SkillsEditor from "./SkillsEditor"

export default function Editor() {
    const [activeEditor, setActiveEditor] = useState('Profile');
    
    return (
        <div className="editor">
            <Navigation activeEditor={activeEditor} onActiveEditorChange={setActiveEditor} />
            <ProfileEditor activeEditor={activeEditor} />
            <WorkExperienceEditor activeEditor={activeEditor} />
            <ProjectsEditor activeEditor={activeEditor} />
            <EducationEditor activeEditor={activeEditor} />
            <SkillsEditor activeEditor={activeEditor} />
        </div>
    )
}