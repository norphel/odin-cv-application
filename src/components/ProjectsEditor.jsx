function Project({project, onProjectTitleChange, onProjectLinkChange, onProjectDescriptionChange}) {

    return (
        <>
            <label htmlFor="projectTitle">Project title
                <input 
                    type="text" 
                    value={project.title}
                    onChange={(e) => onProjectTitleChange(e.target.value)}
                />
            </label>
            <label htmlFor="projectLink">Project Link 
                <input 
                    type="text" 
                    value={project.link}
                    onChange={(e) => onProjectLinkChange(e.target.value)}
                />
            </label>
            <label htmlFor="projectDescription">Description
                <textarea 
                    rows={5} 
                    value={project.description}
                    onChange={(e) => onProjectDescriptionChange(e.target.value)}
                />
            </label>
        </>
    )
}

export default function ProjectsEditor({activeEditor, projects, setProjects}) {
    let className = 'projectsEditor ';
    if (activeEditor === 'Projects') {
        className += 'active';
    }

    const addProject = () => {
        setProjects([...projects, {title: '', link: '', description: ''}]);
    }
    const handleProjectTitleChange = (index, value) => {
        const updatedProjects = [...projects];
        updatedProjects[index].title = value;
        setProjects(updatedProjects);
    }
    const handleProjectLinkChange = (index, value) => {
        const updatedProjects = [...projects];
        updatedProjects[index].link = value;
        setProjects(updatedProjects);
    }
    const handleProjectDescriptionChange = (index, value) => {
        const updatedProjects = [...projects];
        updatedProjects[index].description = value;
        setProjects(updatedProjects);
    }
    return (
        <div className={className}>
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <Project 
                    key={index}
                    project={project}
                    onProjectTitleChange={(value) => handleProjectTitleChange(index, value)}
                    onProjectLinkChange={(value) => handleProjectLinkChange(index, value)}
                    onProjectDescriptionChange={(value) => handleProjectDescriptionChange(index, value)}
                />
            ))}
            <button type="button" onClick={addProject}>Add More</button>
        </div>
    )
}