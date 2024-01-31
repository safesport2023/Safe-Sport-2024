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
// eslint-disable-next-line
const Resources = () => {
    return (
        <div className='resources-page'>
            <div className='page-title-div'>
                <h1 className='page-title'> Resources and Support</h1>
            </div>
            <div className='welcome-statement default-div'>

                <h4 className='Athlete-message'>
                    Just remember you are not alone. There are lots of groups that are dedicated to providing you with the support you need.
                </h4>
            </div>
            <div className='content-section'>


                <h3>Emergencies</h3>
                <h4 className='important-text'>If you are in need of immediate support and/ or this is an emergency:

                </h4>

                <hr className='thickLine clearfix' /> {/* Horizontal line divider */}

                <div>
                    <p className='logo-title'>Call or text 911</p>
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
                <h3>Abuse Reporting Resources</h3>
                <p>
                    If you would like to file a complaint, need more information on where and how to file a complaint, or just want to talk to someone who can support you in the process please contact abusefreesport.ca
                </p>
                <hr className='thickLine clearfix' /> {/* Horizontal line divider */}
                <div>
                    <p className='logo-title'>Abuse Free Sport</p>
                    {/*  eslint-disable-next-line */}
                    <a href='https://abuse-free-sport.ca/' target="_blank"><img className="abuse-free image-links1" src={AbuseFreeSport} alt="Abuse Free Sport" ></img> </a>

                </div>



            </div>
            <div className='content-section'>
                <h2>Additional Resources</h2>
                <p>
                    If it's not an emergency and you need help or support, there's plenty of other options available to you.
                </p>
                <p>
                    For Safe Sport information for the following sports (and please check out your club's or National Sporting Organizations website as well):
                </p>
                <hr className='thickLine clearfix' /> {/* Horizontal line divider */}
                <div className='logoandtextline'>
                    {/*  eslint-disable-next-line */}
                    <a href='https://athletics.ca/safesport/' target="_blank"><img className="image-links3" src={AthleticsLogo} alt="Athletics Canada Logo" ></img> </a>
                    <h4>
                        Athletics Canada Safe Sport page
                    </h4>
                </div>

                <div className='logoandtextline'>
                    {/*  eslint-disable-next-line */}
                    <a href='https://www.swimming.ca/en/safe-sport/ ' target="_blank"><img className="image-links3" src={SwimmingLogo} alt="Swimming Canada Logo" ></img> </a>

                    <h4>
                        Swimming Canada's Safe Sport page
                    </h4>
                </div>
                <div className='logoandtextline'>
                    {/*  eslint-disable-next-line */}
                    <a href='https://volleyball.ca/en/about/safe-sport/' target="_blank"><img className="image-links3" src={VolleyballLogo} alt="Volleyball Canada Logo" ></img> </a>
                    <h4>
                        Volleyball Canada's Safe Sport page
                    </h4>
                </div>




                <hr className='thickLine clearfix' /> {/* Horizontal line divider */}

                <h4>
                    For some other resources:
                </h4>
                <br></br>
                {/*  eslint-disable-next-line */}
                <a href='https://www.bullyingcanada.ca/' target="_blank"><img className="AOS-custom image-links2" src={BullyingCanadaLogo} alt="Bullying Canada Logo" ></img> </a>
                <p>BullyingCanada's trained support volunteers and professional counsellors work one-on-one with bullied Canadian youth, their parents and local supports to stop bullying and heal victims.</p>
                <hr className='thickLine clearfix' /> {/* Horizontal line divider */}
                <br></br>

                {/*  eslint-disable-next-line */}
                <a href='https://thearmyofsurvivors.org/' target="_blank"><img className="AOS-custom image-links2" src={AoSlogo} alt="Army of Survivors Logo" ></img> </a>
                <p>The Army of Survivors' goal is to end sexual assault against young athletes by ensuring perpetrators and enablers are held accountable, creating transparency in reporting, building an environment in which athletes do not fear retaliation when reporting abuse, and advocating for change to protect survivors. </p>
                <hr className='thickLine clearfix' /> {/* Horizontal line divider */}

                {/*  eslint-disable-next-line */}
                <a href='https://www.protectchildren.ca/en/' target="_blank"><img className="image-links3" src={CCCPlogo} alt="CCCP Logo" ></img> </a>
                <p>The Canadian Centre for Child Protection is a national charity dedicated to the personal safety of all children. Our goal is to reduce the sexual abuse and exploitation of children, assist in the location of missing children, and prevent child victimization.</p>
                <hr className='thickLine clearfix' /> {/* Horizontal line divider */}

                <h4>
                    {/*  eslint-disable-next-line */}
                    <a className='bulliedbrain' href='https://bulliedbrain.com/' target="_blank">Bullied Brain</a>
                </h4>
                <p>The Bullied Brain provides confidential, preventative, proactive, and protective evidence-based approaches to psychological health and safety in your organization.</p>
            </div>
        </div >
    );
};

export default Resources;