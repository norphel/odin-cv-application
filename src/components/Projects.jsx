function Project({title, link, description}) {
    return (
        <div>
            <a href={link}><h3>{title}</h3></a>
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
                    link={project.link}
                    description={project.description}
                />
            ))}
        </section>
    )
}