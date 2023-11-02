function Education({education, onDegreeChange, onInstituteChange, onAdmYearChange, onGradYearChange, onGpaScoreChange, onScoreOutOfChange}) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <>
            <label htmlFor="degree">Degree
                <input 
                    type="text" 
                    value={education.degree}
                    onChange={(e) => onDegreeChange(e.target.value)}
                />
            </label>
            <label htmlFor="institute">Institute
                <input 
                    type="text" 
                    value={education.institute}
                    onChange={(e) => onInstituteChange(e.target.value)}
                />
            </label>
            <label htmlFor="admissionYear">Admission Year
                <input 
                    type="number" 
                    min={'1920'} 
                    max={currentYear} 
                    step={'1'}
                    value={education.admYear}
                    onChange={(e) => onAdmYearChange(e.target.value)}
                />
            </label>
            <label htmlFor="graduationYear">Graduation Year
                <input 
                    type="number" 
                    min={'1920'} 
                    max={currentYear} 
                    step={'1'}
                    value={education.gradYear}
                    onChange={(e) => onGradYearChange(e.target.value)}
                />
            </label>
            <label htmlFor="scoreObtained">GPA / Score Obtained
                <input 
                    type="number" 
                    min={'0'} 
                    max={'100'} 
                    value={education.gpaScore}
                    onChange={(e) => onGpaScoreChange(e.target.value)}
                />
            </label>
            <label htmlFor="scoreOutOf">Score Out Of
                <input 
                    type="number" 
                    min={'0'} 
                    max={'100'} 
                    value={education.scoreOutOf}
                    onChange={(e) => onScoreOutOfChange(e.target.value)}
                />
            </label>
        </>
    )
}

export default function EducationEditor({activeEditor, educationDetails, setEducationDetails}) {
    let className = 'educationEditor ';
    if (activeEditor === 'Education') {
        className += 'active';
    }

    const addEducation = () => {
        setEducationDetails([...educationDetails, {degree: '', institute: '', admYear: '', gradYear: '', gpaScore: '', scoreOutOf: ''}])
    }
    const handleDegreeChange = (index, value) => {
        const updatedEducationDetails = [...educationDetails];
        updatedEducationDetails[index].degree = value;
        setEducationDetails(updatedEducationDetails);
    }
    const handleInstituteChange = (index, value) => {
        const updatedEducationDetails = [...educationDetails];
        updatedEducationDetails[index].institute = value;
        setEducationDetails(updatedEducationDetails);
    }
    const handleAdmYearChange = (index, value) => {
        const updatedEducationDetails = [...educationDetails];
        updatedEducationDetails[index].admYear = value;
        setEducationDetails(updatedEducationDetails);
    }
    const handleGradYearChange = (index, value) => {
        const updatedEducationDetails = [...educationDetails];
        updatedEducationDetails[index].gradYear = value;
        setEducationDetails(updatedEducationDetails);
    }
    const handleGpaScoreChange = (index, value) => {
        const updatedEducationDetails = [...educationDetails];
        updatedEducationDetails[index].gpaScore = value;
        setEducationDetails(updatedEducationDetails);
    }
    const handleScoreOutOfChange = (index, value) => {
        const updatedEducationDetails = [...educationDetails];
        updatedEducationDetails[index].scoreOutOf = value;
        setEducationDetails(updatedEducationDetails);
    }
    return (
        <div className={className}>
            <h2>Education Details</h2>
            {educationDetails.map((education, index) => (
                <Education
                    key={index}
                    education={education}
                    onDegreeChange={(value) => handleDegreeChange(index, value)}
                    onInstituteChange={(value) => handleInstituteChange(index, value)}
                    onAdmYearChange={(value) => handleAdmYearChange(index, value)}
                    onGradYearChange={(value) => handleGradYearChange(index, value)}
                    onGpaScoreChange={(value) => handleGpaScoreChange(index, value)}
                    onScoreOutOfChange={(value) => handleScoreOutOfChange(index, value)}
                />
            ))}
            <button type="button" onClick={addEducation}>Add More</button>
        </div>
    )
}