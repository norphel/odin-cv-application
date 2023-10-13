import Navigation from "./Navigation"
import ProfileEditor from "./ProfileEditor"
import WorkExperienceEditor from "./WorkExperienceEditor"

export default function Editor() {
    return (
        <div className="editor">
            <Navigation />
            <ProfileEditor />
            <WorkExperienceEditor />
        </div>
    )
}