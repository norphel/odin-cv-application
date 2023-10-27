function getMonthString(month) {
    return month === 0 ? 'Jan' : month === 1 ? 'Feb' : month === 2 ? 'Mar' : month === 3 ? 'Apr' : month === 4 ? 'May' : month === 5 ? 'June' : month === 6 ? 'July' : month === 7 ? 'Aug' : month === 8 ? 'Sept' : month === 9 ? 'Oct' : month === 10 ? 'Nov' : 'Dec'; 
}

function Work({position, company, fromDateWE, tillDateWE, contribution}) {
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
                <h4>{company}</h4>
                <p>{fromDate} - {tillDate}</p>
            </div>
            <p className='description'>{contribution}</p>
        </div>
    )
}
export default function WorkExperience({position, organization, fromDateWE, tillDateWE, contribution}) {
    return (
        <section className='workExperience'>
            <h2>Work Experience</h2>
            <Work 
                position={position}
                company={organization}
                fromDateWE={fromDateWE}
                tillDateWE={tillDateWE}
                contribution={contribution}
            />
        </section>
    )
}