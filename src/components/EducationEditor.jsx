function Education() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <>
            <label htmlFor="degree">Degree
                <input type="text" />
            </label>
            <label htmlFor="institute">Institute
                <input type="text" />
            </label>
            <label htmlFor="admissionYear">Admission Year
                <input type="number" min={'1920'} max={currentYear} step={'1'}/>
            </label>
            <label htmlFor="graduationYear">Graduation Year
                <input type="number" min={'1920'} max={currentYear} step={'1'}/>
            </label>
            <label htmlFor="scoreObtained">GPA / Score Obtained
                <input type="number" min={'0'} max={'100'} />
            </label>
            <label htmlFor="scoreOutOf">Score Out Of
                <input type="number" min={'0'} max={'100'} />
            </label>
            <button type="button">Add More</button>
        </>
    )
}

export default function EducationEditor() {
    return (
        <div className="educationEditor">
            <h2>Education Details</h2>
            <Education />
        </div>
    )
}