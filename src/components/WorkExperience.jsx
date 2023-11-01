function getMonthString(month) {
    return month === 0 ? 'Jan' : month === 1 ? 'Feb' : month === 2 ? 'Mar' : month === 3 ? 'Apr' : month === 4 ? 'May' : month === 5 ? 'June' : month === 6 ? 'July' : month === 7 ? 'Aug' : month === 8 ? 'Sept' : month === 9 ? 'Oct' : month === 10 ? 'Nov' : 'Dec'; 
}

function Work({position, organization, fromDateWE, tillDateWE, contribution}) {
    let fromDate = undefined;
    let tillDate = undefined;
    let today =  new Date();
    const fromDateWEValue = new Date(fromDateWE);
    const tillDateWEValue = new Date(tillDateWE)

    if (fromDateWE !== '') {
        fromDate = `${getMonthString(fromDateWEValue.getMonth())}'${fromDateWEValue.getFullYear()}`;
    }
    if (tillDateWE !== '') {
        if(tillDateWEValue.toDateString() === today.toDateString()) {
            tillDate = 'present';
        } else {
            tillDate = `${getMonthString(tillDateWEValue.getMonth())}' ${tillDateWEValue.getFullYear()}`;
        }
    }
    return (
        <div>
            <div className="info">
                <h3>{position}</h3>
                <h4>{organization}</h4>
                <p>{fromDate} - {tillDate}</p>
            </div>
            <p className='description'>{contribution}</p>
        </div>
    )
}
export default function WorkExperience({workExperiences}) {
    return (
        <section className='workExperience'>
            <h2>Work Experience</h2>
            {workExperiences.map((workExperience, index) => (
                <Work
                    key={index}
                    position={workExperience.position}
                    organization={workExperience.organization}
                    fromDateWE={workExperience.fromDateWE}
                    tillDateWE={workExperience.tillDateWE}
                    contribution={workExperience.contribution}
                />
            ))}
        </section>
    )
}