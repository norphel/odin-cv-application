function Project({title, description}) {
    return (
        <div>
            <h3>{title}</h3>
            <p className="description">{description}</p>
        </div>
    )
}
export default function Projects({projects}) {
    return (
        <section className="projects">
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <Project 
                    key={index}
                    title={project.title}
                    description={project.description}
                />
            ))}
        </section>
    )
}