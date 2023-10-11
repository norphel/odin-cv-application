function Skillset({title, listOfSkills}) {
    return (
        <div>
            <h3>{title}:</h3>
            <p>{listOfSkills}</p>
        </div>
    )
}

export default function Skills() {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <Skillset
                title={'Skillset title'}
                listOfSkills={'skill1, skill2, skill3'}
            />
            <Skillset
                title={'Eg: Programming Languages'}
                listOfSkills={'HTML, CSS, JavaScript, TypeScript'}
            />
            <Skillset
                title={'Eg: Frameworks'}
                listOfSkills={'React, NodeJS'}
            />
        </section>
    )
}