function WorkDetails({onPositionChange, onOrganizationChange, onFromDateWEChange, onTillDateWEChange, onContributionChange}) {
    return (
        <>
            <label htmlFor="position" id="position">Position
                <input 
                    id="position" 
                    htmlFor="position" 
                    type="text"
                    onChange={(e) => onPositionChange(e.target.value)} 
                />
            </label>
            <label htmlFor="organization" id="organization">Organization
                <input 
                    id="organization" 
                    htmlFor="organization" 
                    type="text" 
                    onChange={(e) => onOrganizationChange(e.target.value)}
                />
            </label>
            <label htmlFor="fromDate" id="fromDate">From
                <input 
                    id="fromDate" 
                    htmlFor="fromDate" 
                    type="date" 
                    onChange={(e) => onFromDateWEChange(e.target.value)}
                />
            </label>
            <label htmlFor="toDate" id="toDate">Till
                <input 
                    id="toDate" 
                    htmlFor="toDate" 
                    type="date" 
                    onChange={(e) => onTillDateWEChange(e.target.value)}
                />
            </label>
            <label htmlFor="description" id="description">Contribution/Impact
                <textarea 
                    id="description" 
                    htmlFor="description" 
                    rows={'5'}
                    onChange={(e) => onContributionChange(e.target.value)}
                />
            </label>
            <button type="button">Add More</button>
        </>
    )
}

export default function WorkExperienceEditor({activeEditor, onPositionChange, onOrganizationChange, onFromDateWEChange, onTillDateWEChange, onContributionChange}) {
    let className = 'workExperienceEditor ';
    if (activeEditor === 'WorkExperience') {
        console.log(activeEditor);
        className += 'active';
    }
    return (
        <div className={className}>
            <h2>Work Experience</h2>
            <WorkDetails 
                onPositionChange={onPositionChange}
                onOrganizationChange={onOrganizationChange}
                onFromDateWEChange={onFromDateWEChange}
                onTillDateWEChange={onTillDateWEChange}
                onContributionChange={onContributionChange}
            />
        </div>
    )
}