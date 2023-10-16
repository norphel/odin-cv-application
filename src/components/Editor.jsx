import Navigation from "./Navigation"
import ProfileEditor from "./ProfileEditor"
import WorkExperienceEditor from "./WorkExperienceEditor"
import ProjectsEditor from "./ProjectsEditor"
import EducationEditor from "./EducationEditor"
import SkillsEditor from "./SkillsEditor"

export default function Editor() {
    return (
        <div className="editor">
            <Navigation />
            <ProfileEditor />
            <WorkExperienceEditor />
            <ProjectsEditor />
            <EducationEditor />
            <SkillsEditor />
        </div>
    )
}