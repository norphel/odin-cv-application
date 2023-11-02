function EducationDetails({degree, institute, score, scoreOutOf, admissionYear, graduationYear}) {
    return (
        <div>
            <h3>{degree}</h3>
            <p>{score} / {scoreOutOf}</p>
            <h4>{institute}<span> ({admissionYear} - {graduationYear})</span></h4>
        </div>
    )
}

export default function Education({educationDetails}) {
    return (
        <section className="education">
            <h2>Education</h2>
            {educationDetails.map((education, index) => (
                <EducationDetails 
                    key={index}
                    degree={education.degree}
                    institute={education.institute}
                    score={education.gpaScore}
                    scoreOutOf={education.scoreOutOf}
                    admissionYear={education.admYear}
                    graduationYear={education.gradYear}
                />
            ))}
        </section>
    )
}