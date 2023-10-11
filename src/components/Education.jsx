function EducationDetails({degree, institute, score, scoreOutOf}) {
    return (
        <div>
            <h3>{degree}</h3>
            <p>{score} / {scoreOutOf}</p>
            <h4>{institute}</h4>
        </div>
    )
}

export default function Education() {
    return (
        <section className="education">
            <h2>Education</h2>
            <EducationDetails
                degree={'Master of Technology - Computer Science'}
                institute={'XYZ institute'}
                score={'9'}
                scoreOutOf={'10'}
            />
            <EducationDetails
                degree={'Bachelors of Technology - Computer Science'}
                institute={'ABCD institute'}
                score={'8.7'}
                scoreOutOf={'10'}
            />
        </section>
    )
}