function WorkDetails() {
    return (
        <>
            <label htmlFor="position" id="position">Position
                <input id="position" htmlFor="position" type="text" />
            </label>
            <label htmlFor="organization" id="organization">Organization
                <input id="organization" htmlFor="organization" type="text" />
            </label>
            <label htmlFor="fromDate" id="fromDate">From
                <input id="fromDate" htmlFor="fromDate" type="date" />
            </label>
            <label htmlFor="toDate" id="toDate">Till
                <input id="toDate" htmlFor="toDate" type="date" />
            </label>
            <label htmlFor="description" id="description">Contribution/Impact
                <textarea id="description" htmlFor="description" rows={'5'}/>
            </label>
            <button type="button">Add More</button>
        </>
    )
}

export default function WorkExperienceEditor({activeEditor}) {
    let className = 'workExperienceEditor ';
    if (activeEditor === 'WorkExperience') {
        console.log(activeEditor);
        className += 'active';
    }
    return (
        <div className={className}>
            <h2>Work Experience</h2>
            <WorkDetails />
        </div>
    )
}