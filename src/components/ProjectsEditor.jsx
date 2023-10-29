function Project({onProjectTitleChange, onProjectDescriptionChange}) {
    return (
        <>
            <label htmlFor="projectTitle">Project title
                <input 
                    type="text" 
                    onChange={(e) => onProjectTitleChange(e.target.value)}
                />
            </label>
            <label htmlFor="projectDescription">Description
                <textarea 
                    rows={5} 
                    onChange={(e) => onProjectDescriptionChange(e.target.value)}
                />
            </label>
            <button type="button">Add more</button>
        </>
    )
}

export default function ProjectsEditor({activeEditor, onProjectTitleChange, onProjectDescriptionChange}) {
    let className = 'projectsEditor ';
    if (activeEditor === 'Projects') {
        className += 'active';
    }
    return (
        <div className={className}>
            <h2>Projects</h2>
            <Project 
                onProjectTitleChange={onProjectTitleChange}
                onProjectDescriptionChange={onProjectDescriptionChange}
            />
        </div>
    )
}