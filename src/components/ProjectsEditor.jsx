function Project() {
    return (
        <>
            <label htmlFor="projectTitle">Project title
                <input type="text" />
            </label>
            <label htmlFor="projectDescription">Description
                <textarea rows={5} />
            </label>
            <button type="button">Add more</button>
        </>
    )
}

export default function ProjectsEditor() {
    return (
        <div className="projectsEditor">
            <h2>Projects</h2>
            <Project />
        </div>
    )
}