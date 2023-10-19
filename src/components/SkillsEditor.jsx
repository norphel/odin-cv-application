function Skills() {
    return (
        <>
            <label htmlFor="skillsetTitle">Skillset
                <input type="text" />
            </label>
            <label htmlFor="skills">Skills (comma separated) 
                <textarea rows={'5'}></textarea>
            </label>
            <button type="button">Add More</button>
        </>
    )
}

export default function SkillsEditor({activeEditor}) {
    let className = 'skillsEditor ';
    if (activeEditor === 'Skills') {
        console.log(activeEditor);
        className += 'active';
    }
    return (
        <div className={className}>
            <h2>Skills</h2>
            <Skills />
        </div>
    )
}