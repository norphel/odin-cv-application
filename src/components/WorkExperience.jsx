function Work({position, company, duration, description}) {
    return (
        <div>
            <div className="info">
                <h3>{position}</h3>
                <h4>{company}</h4>
                <p>{duration}</p>
            </div>
            <p className='description'>{description}</p>
        </div>
    )
}
export default function WorkExperience() {
    return (
        <section className='workExperience'>
            <h2>Work Experience</h2>
            <Work 
                position={'Software Engineer - II'}
                company={'Comapny X'}
                duration={"fromDate - toDate"}
                description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, vel unde. Corporis, molestiae quod doloremque excepturi sunt veniam in vero dolor asperiores distinctio odio quaerat ullam. Exercitationem fuga corporis possimus!'}
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