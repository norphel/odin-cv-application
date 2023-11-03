import { useState } from "react"

import Navigation from "./Navigation"
import ProfileEditor from "./ProfileEditor"
import WorkExperienceEditor from "./WorkExperienceEditor"
import ProjectsEditor from "./ProjectsEditor"
import EducationEditor from "./EducationEditor"
import SkillsEditor from "./SkillsEditor"

export default function Editor({profileDetails, setProfileDetails, workExperiences, setWorkExperiences, projects, setProjects, educationDetails, setEducationDetails, skills, setSkills}) {
    const [activeEditor, setActiveEditor] = useState('Profile');
    
    return (
        <div className="editor">
            <Navigation activeEditor={activeEditor} onActiveEditorChange={setActiveEditor} />
            <ProfileEditor 
                activeEditor={activeEditor} 
                profileDetails={profileDetails}
                setProfileDetails={setProfileDetails}
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
            <EducationEditor 
                activeEditor={activeEditor}
                educationDetails={educationDetails}
                setEducationDetails={setEducationDetails}
            />
            <SkillsEditor 
                activeEditor={activeEditor} 
                skills={skills}
                setSkills={setSkills}
            />
        </div>
    )
}