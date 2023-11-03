function Skillset({title, listOfSkills}) {
    return (
        <div>
            <h3>{title}:</h3>
            <p>{listOfSkills}</p>
        </div>
    )
}

export default function Skills({skills}) {
    return (
        <section className="skills">
            <h2>Skills</h2>
            {skills.map((skill, index) => (
                <Skillset 
                    key={index}
                    title={skill.skillset}
                    listOfSkills={skill.skillsList}
                />
            ))}
        </section>
    )
}