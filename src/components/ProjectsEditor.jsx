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

export default function ProjectsEditor({activeEditor}) {
    let className = 'projectsEditor ';
    if (activeEditor === 'Projects') {
        console.log(activeEditor);
        className += 'active';
    }
    return (
        <div className={className}>
            <h2>Projects</h2>
            <Project />
        </div>
    )
}