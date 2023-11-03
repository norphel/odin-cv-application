function Skills({skill, onSkillsetChange, onSkillsListChange}) {
    return (
        <>
            <label htmlFor="skillsetTitle">Skillset
                <input 
                    type="text" 
                    value={skill.skillset}
                    onChange={(e) => onSkillsetChange(e.target.value)}
                />
            </label>
            <label htmlFor="skills">Skills (comma separated) 
                <textarea 
                    rows={5}
                    value={skill.skillsList}
                    onChange={(e) => onSkillsListChange(e.target.value)}
                />
            </label>
        </>
    )
}

export default function SkillsEditor({activeEditor, skills, setSkills}) {
    let className = 'skillsEditor ';
    if (activeEditor === 'Skills') {
        console.log(activeEditor);
        className += 'active';
    }

    const addSkill = () => {
        setSkills([...skills, {skillset: '', skillsList: ''}])
    }
    const handleSkillsetChange = (index, value) => {
        const updatedSkills = [...skills];
        updatedSkills[index].skillset = value;
        setSkills(updatedSkills);
    }
    const handleSkillsListChange = (index, value) => {
        const updatedSkills = [...skills];
        updatedSkills[index].skillsList = value;
        setSkills(updatedSkills);
    }
    return (
        <div className={className}>
            <h2>Skills</h2>
            {skills.map((skill, index) => (
                <Skills 
                    key={index}
                    skill={skill}
                    onSkillsetChange={(value) => handleSkillsetChange(index, value)}
                    onSkillsListChange={(value) => handleSkillsListChange(index, value)}
                />
            ))}
            <button type="button" onClick={addSkill}>Add More</button>
        </div>
    )
}