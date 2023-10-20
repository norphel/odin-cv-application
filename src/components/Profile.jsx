import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import linkedIn from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import personalWebsite from '../assets/personalWebsite.svg';

function Contact({src, alt, contact}) {
    return (
        <div>
            <img src={src} alt={alt} />
            <p>{contact}</p>
        </div>
    )
}

function Link({src, alt, url}) {
    return (
        <a href={url}><img src={src} alt={alt} /></a>
    )
}

export default function Profile({firstName, lastName}) {
    return (
        <div className="profile">
            <h1 className='name'>{firstName} {lastName}</h1>
            <div className="contactsAndLinks">
            <div className="contacts">
                    <Contact src={phoneIcon} alt={'phone icon'} contact={'0000000000'} />
                    <Contact src={emailIcon} alt={'email icon'} contact={'username@domain'} />
                </div>
                <div className="links">
                    <Link src={linkedIn} alt={'linkedIn icon'} url={'https://linkedin.com/username'} />
                    <Link src={github} alt={'github icon'} url={'https://github.com/username'} />
                    <Link src={personalWebsite} alt={'personal website icon'} url={'https://username.domain'} />
                </div>
            </div>
        </div>
    )
}