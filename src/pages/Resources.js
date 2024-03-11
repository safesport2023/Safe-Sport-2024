import './Resources.css'
import KidsHelpPhoneLogo from '../assets/Kids-Help-Phone-Logo.png'
import CCCPlogo from '../assets/CCCP-logo.png'
import AbuseFreeSport from '../assets/AFSSA.png'
import emergencyLogoA from '../assets/911helpline.png'
import emergencyLogoB from '../assets/988helpline.png'
import AoSlogo from '../assets/AoSLogo.png'
import BullyingCanadaLogo from '../assets/bullyingcanadalogo.png'
import SwimmingLogo from '../assets/logos/Swim Canada Logo.png'
import VolleyballLogo from '../assets/logos/Volleyball Canada Logo.jpg'
import AthleticsLogo from '../assets/logos/Athletics Canada Logo.png'
import React, { useRef, useState } from 'react';
// eslint-disable-next-line
const Resources = () => {


    //language handler 
    const [language, setLanguage] = useState('english'); // Default language is English


    // Define video URLs based on the selected language

    const toggleLanguage = () => {
        // Toggle between English and French
        setLanguage(prevLanguage => prevLanguage === 'english' ? 'french' : 'english');
        console.log('Language:', language);
    };


    return (
        <div className='resources-page'>
            <div className='page-title-div'>
                <h1 className='page-title'>{language === 'english' ? 'Resources and Support' : 'Ressources et Soutien'}</h1>

            </div>
            <div className='lang-button-div'>
                <button className='mobile-btn-lang' onClick={toggleLanguage}>Switch to {language === 'english' ? 'French' : 'English'}</button>
            </div>
            <div className='welcome-statement default-div'>

                <h4 className='Athlete-message'>{language === 'english' ? 'Just remember you are not alone. There are lots of groups that are dedicated to providing you with the support you need.' : 'Rappelez-vous que vous n`êtes pas seul. Il y a beaucoup de groupes qui sont dédiés à vous fournir le soutien dont vous avez besoin.'}</h4>

            </div>
            <div className='content-section'>


                <h3>{language === 'english' ? 'Emergencies' : 'Urgences'}</h3>
                <h4 className='important-text'>{language === 'english' ? 'If you are in need of immediate support and/ or this is an emergency:' : 'Si vous avez besoin d`un soutien immédiat et/ou s`il s`agit d`une urgence :'}</h4>


                <hr className='thickLine clearfix' /> {/* Horizontal line divider */}

                <div>
                    <p className='logo-title'>{language === 'english' ? 'Call or text 911' : 'Appelez ou envoyez un SMS au 911'}</p>

                    {/*  eslint-disable-next-line */}
                    <a href='https://crtc.gc.ca/eng/phone/911/' target="_blank"><img className="image-links1" src={emergencyLogoA} alt="Call 911 or text 911" ></img> </a>

                </div>
                <hr className='thickLine clearfix' /> {/* Horizontal line divider */}
                <div>
                    <p className='logo-title'>Kids Help Phone</p>
                    {/*  eslint-disable-next-line */}
                    <a href='https://kidshelpphone.ca/need-help-now-text-us/' target="_blank"><img className="image-links2" src={KidsHelpPhoneLogo} alt="Kids Helpphone" ></img> </a>
                    <p className='logo-title'>Or text: 686868</p>
                </div>
                <hr className='thickLine clearfix' /> {/* Horizontal line divider */}
                <div>
                    <p className='logo-title'>9-8-8 Suicide Crisis helpline:</p>
                    {/*  eslint-disable-next-line */}
                    <a href='https://988.ca/' target="_blank"><img className="image-links1" src={emergencyLogoB} alt="998 Helpline" ></img> </a>
                    <p className='logo-title'>Text: 988</p>
                </div>










            </div>
            <div className='content-section'>
                <h3>{language === 'english' ? 'Abuse Reporting Resources' : 'Ressources de signalement de mauvais traitements'}</h3>
                <p>
                    {language === 'english' ? 'If you would like to file a complaint, need more information on where and how to file a complaint, or just want to talk to someone who can support you in the process please contact' : 'Si vous souhaitez déposer une plainte, avez besoin de plus d\'informations sur où et comment déposer une plainte, ou si vous souhaitez simplement parler à quelqu\'un qui peut vous soutenir dans le processus, veuillez contacter'}
                    abusefreesport.ca
                </p>

                <hr className='thickLine clearfix' /> {/* Horizontal line divider */}
                <div>
                    <p className='logo-title'>Abuse Free Sport</p>
                    {/*  eslint-disable-next-line */}
                    <a href='https://abuse-free-sport.ca/' target="_blank"><img className="abuse-free image-links1" src={AbuseFreeSport} alt="Abuse Free Sport" ></img> </a>

                </div>



            </div>
            <div className='content-section'>
                <h2>{language === 'english' ? 'Additional Resources' : 'Ressources supplémentaires'}</h2>
                <p>
                    {language === 'english' ? "If it's not an emergency and you need help or support, there's plenty of other options available to you." : "S'il ne s'agit pas d'une urgence et que vous avez besoin d'aide ou de soutien, de nombreuses autres options s'offrent à vous."}
                </p>
                <p>
                    {language === 'english' ? 'For Safe Sport information for the following sports (and please check out your club\'s or National Sporting Organizations website as well):' : 'Pour des informations sur le sport sécuritaire pour les sports suivants (et veuillez également consulter le site Web de votre club ou de votre organisation sportive nationale):'}
                </p>

                <hr className='thickLine clearfix' /> {/* Horizontal line divider */}
                <div className='logoandtextline'>
                    {/*  eslint-disable-next-line */}
                    <a href='https://athletics.ca/safesport/' target="_blank"><img className="image-links3" src={AthleticsLogo} alt="Athletics Canada Logo" ></img> </a>
                    <h4>{language === 'english' ? "Athletics Canada Safe Sport page" : "Page Safe Sport d'Athlétisme Canada"}</h4>

                </div>

                <div className='logoandtextline'>
                    {/*  eslint-disable-next-line */}
                    <a href='https://www.swimming.ca/en/safe-sport/ ' target="_blank"><img className="image-links3" src={SwimmingLogo} alt="Swimming Canada Logo" ></img> </a>

                    <h4>{language === 'english' ? "Swimming Canada's Safe Sport page" : "Page Safe Sport de Natation Canada"}</h4>

                </div>
                <div className='logoandtextline'>
                    {/*  eslint-disable-next-line */}
                    <a href='https://volleyball.ca/en/about/safe-sport/' target="_blank"><img className="image-links3" src={VolleyballLogo} alt="Volleyball Canada Logo" ></img> </a>
                    <h4>{language === 'english' ? "Volleyball Canada's Safe Sport page" : "Page Safe Sport de Volleyball Canada"}</h4>

                </div>




                <hr className='thickLine clearfix' /> {/* Horizontal line divider */}

                <h4>{language === 'english' ? "For some other resources:" : "Pour d'autres ressources:"}</h4>


                <br></br>

                {/*  eslint-disable-next-line */}
                <a href='https://thearmyofsurvivors.org/' target="_blank"><img className="AOS-custom image-links2" src={AoSlogo} alt="Army of Survivors Logo" ></img> </a>
                <p>{language === 'english' ? "The Army of Survivors' goal is to end sexual assault against young athletes by ensuring perpetrators and enablers are held accountable, creating transparency in reporting, building an environment in which athletes do not fear retaliation when reporting abuse, and advocating for change to protect survivors." : "L'objectif de l'Armée des Survivants est de mettre fin à l'agression sexuelle contre les jeunes athlètes en veillant à ce que les auteurs et les complices soient tenus responsables, en créant une transparence dans le signalement, en construisant un environnement dans lequel les athlètes ne craignent pas de représailles lorsqu'ils signalent des abus, et en plaidant en faveur du changement pour protéger les survivants."}</p>

                <hr className='thickLine clearfix' /> {/* Horizontal line divider */}

                {/*  eslint-disable-next-line */}
                <a href='https://www.protectchildren.ca/en/' target="_blank"><img className="image-links3" src={CCCPlogo} alt="CCCP Logo" ></img> </a>
                <p>{language === 'english' ? "The Canadian Centre for Child Protection is a national charity dedicated to the personal safety of all children. Our goal is to reduce the sexual abuse and exploitation of children, assist in the location of missing children, and prevent child victimization." : "Le Centre canadien de protection de l'enfance est un organisme de bienfaisance national dédié à la sécurité personnelle de tous les enfants. Notre objectif est de réduire l'abus sexuel et l'exploitation des enfants, d'aider à localiser les enfants disparus et de prévenir la victimisation des enfants."}</p>

                <hr className='thickLine clearfix' /> {/* Horizontal line divider */}

                <h4>
                    {/*  eslint-disable-next-line */}
                    <a className='bulliedbrain' href='https://bulliedbrain.com/' target="_blank">Bullied Brain</a>
                </h4>
                <p>{language === 'english' ? "The Bullied Brain provides confidential, preventative, proactive, and protective evidence-based approaches to psychological health and safety in your organization." : "Le Bullied Brain propose des approches préventives, proactives et protectrices, fondées sur des preuves, pour la santé psychologique et la sécurité dans votre organisation."}</p>

            </div>
        </div >
    );
};

export default Resources;