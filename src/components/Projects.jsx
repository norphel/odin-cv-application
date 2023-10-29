function Project({title, linkToProject, description}) {
    return (
        <div>
            <a href={linkToProject}><h3>{title}</h3></a>
            <p>{description}</p>
        </div>
    )
}
export default function Projects({projectTitle, projectDescription}) {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <Project 
                title={projectTitle}
                linkToProject={'https://linktoproject1'}
                description={projectDescription}
            />
            <Project 
                title={'Project 2 title'}
                linkToProject={'https://linktoproject2'}
                description={'Describe about the project in few sentences.'}
            />
            <Project 
                title={'Project 3 title'}
                linkToProject={'https://linktoproject3'}
                description={'Describe about the project in few sentences.'}
            />
        </section>
    )
}