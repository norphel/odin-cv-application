function getMonthString(month) {
    return month === 1 ? 'Jan' : month === 2 ? 'Feb' : month === 3 ? 'Mar' : month === 4 ? 'Apr' : month === 5 ? 'May' : month === 6 ? 'June' : month === 7 ? 'July' : month === 8 ? 'Aug' : month === 9 ? 'Sept' : month === 10 ? 'Oct' : month === 11 ? 'Nov' : 'Dec'; 
}

function Work({position, company, fromDateWE, tillDateWE, description}) {
    // const fromDate = `${getMonthString(duration.fromDateWE.getMonth())}'${duration.fromDateWE.getFullYear()}`
    // let tillDate = undefined;
    // const today = new Date();
    // if (duration.tillDateWE.toDateString() === today.toDateString()) {
    //     tillDate = 'present'
    // } else {
    //     tillDate = `${getMonthString(duration.tillDateWE.getMonth())}' ${duration.tillDateWE.getFullYear()}`
    // }
    return (
        <div>
            <div className="info">
                <h3>{position}</h3>
                <h4>{company}</h4>
                <p>{fromDateWE} - {tillDateWE}</p>
            </div>
            <p className='description'>{description}</p>
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
                description={contribution}
            />
            <Work 
                position={'Software Engineer - I'}
                company={'Comapny Y'}
                duration={"fromDate - toDate"}
                description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, vel unde. Corporis, molestiae quod doloremque excepturi sunt veniam in vero dolor asperiores distinctio odio quaerat ullam. Exercitationem fuga corporis possimus!'}
            />
            <Work 
                position={'Software Engineer Intern'}
                company={'Comapny Z'}
                duration={"fromDate - toDate"}
                description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, vel unde. Corporis, molestiae quod doloremque excepturi sunt veniam in vero dolor asperiores distinctio odio quaerat ullam. Exercitationem fuga corporis possimus!'}
            />
        </section>
    )
}