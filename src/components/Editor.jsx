import Navigation from "./Navigation"
import ProfileEditor from "./ProfileEditor"
import WorkExperienceEditor from "./WorkExperienceEditor"
import ProjectsEditor from "./ProjectsEditor"

export default function Editor() {
    return (
        <div className="editor">
            <Navigation />
            <ProfileEditor />
            <WorkExperienceEditor />
            <ProjectsEditor />
        </div>
    )
}