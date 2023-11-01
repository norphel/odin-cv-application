function WorkDetails({workExperience, onPositionChange, onOrganizationChange, onFromDateWEChange, onTillDateWEChange, onContributionChange}) {
    return (
        <>
            <label htmlFor="position" id="position">Position
                <input 
                    id="position" 
                    htmlFor="position" 
                    type="text"
                    value={workExperience.position}
                    onChange={(e) => onPositionChange(e.target.value)} 
                />
            </label>
            <label htmlFor="organization" id="organization">Organization
                <input 
                    id="organization" 
                    htmlFor="organization" 
                    type="text" 
                    value={workExperience.organization}
                    onChange={(e) => onOrganizationChange(e.target.value)}
                />
            </label>
            <label htmlFor="fromDate" id="fromDate">From
                <input 
                    id="fromDate" 
                    htmlFor="fromDate" 
                    type="date" 
                    value={workExperience.fromDateWE}
                    onChange={(e) => onFromDateWEChange(e.target.value)}
                />
            </label>
            <label htmlFor="toDate" id="toDate">Till
                <input 
                    id="toDate" 
                    htmlFor="toDate" 
                    type="date" 
                    value={workExperience.tillDateWE}
                    onChange={(e) => onTillDateWEChange(e.target.value)}
                />
            </label>
            <label htmlFor="description" id="description">Contribution/Impact
                <textarea 
                    id="description" 
                    htmlFor="description" 
                    rows={5}
                    value={workExperience.contribution}
                    onChange={(e) => onContributionChange(e.target.value)}
                />
            </label>
        </>
    )
}

export default function WorkExperienceEditor({activeEditor, workExperiences, setWorkExperiences}) {
    let className = 'workExperienceEditor ';
    if (activeEditor === 'WorkExperience') {
        className += 'active';
    }

    const addWorkExperience = () => {
        setWorkExperiences([...workExperiences, {position: '', organization: '', fromDateWE: '', tillDateWE: '', contribution: ''}])
    }
    const handlePositionChange = (index, value) => {
        const updatedWE = [...workExperiences];
        updatedWE[index].position = value;
        setWorkExperiences(updatedWE);
    }
    const handleOrganizationChange = (index, value) => {
        const updatedWE = [...workExperiences];
        updatedWE[index].organization = value;
        setWorkExperiences(updatedWE);
    }
    const handleFromDateWEChange = (index, value) => {
        const updatedWE = [...workExperiences];
        updatedWE[index].fromDateWE = value;
        setWorkExperiences(updatedWE);
    }
    const handleTillDateWEChange = (index, value) => {
        const updatedWE = [...workExperiences];
        updatedWE[index].tillDateWE = value;
        setWorkExperiences(updatedWE);
    }
    const handleContributionChange = (index, value) => {
        const updatedWE = [...workExperiences];
        updatedWE[index].contribution = value;
        setWorkExperiences(updatedWE);
    }
    return (
        <div className={className}>
            <h2>Work Experience</h2>
            {workExperiences.map((workExperience, index) => (
                <WorkDetails 
                    key={index}
                    workExperience={workExperience}
                    onPositionChange={(value) => handlePositionChange(index, value)}
                    onOrganizationChange={(value) => handleOrganizationChange(index, value)}
                    onFromDateWEChange={(value) => handleFromDateWEChange(index, value)}
                    onTillDateWEChange={(value) => handleTillDateWEChange(index, value)}
                    onContributionChange={(value) => handleContributionChange(index, value)}
                />
            ))}
            <button type="button" onClick={addWorkExperience}>Add More</button>
        </div>
    )
}