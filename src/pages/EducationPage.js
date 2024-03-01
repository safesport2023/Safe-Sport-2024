import React, { useState, useEffect } from 'react';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './EducationPages.css';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { InView } from 'react-intersection-observer';

/**
 * Authenticator component from AWS Amplify UI React library
 * Used to add authentication flows to application
*/



Amplify.configure(awsconfig);

const EducationPage = () => {
    const [videoStatus, setVideoStatus] = useState(() => {
        // Initialize videoStatus from localStorage if available, or use the default state
        const storedStatus = localStorage.getItem('videoStatus');
        return storedStatus ? JSON.parse(storedStatus) : [
            { unlocked: true, watched: false },
            { unlocked: false, watched: false },
            { unlocked: false, watched: false },
            { unlocked: false, watched: false },
            { unlocked: false, watched: false },
            { unlocked: false, watched: false },
            { unlocked: false, watched: false },
            { unlocked: false, watched: false },

        ]
    });

    useEffect(() => {
        // Update localStorage whenever videoStatus changes
        localStorage.setItem('videoStatus', JSON.stringify(videoStatus));
        const allVideosWatched = videoStatus.every(video => video.watched);
        if (allVideosWatched) {
            console.log('User has watched all the videos!');
        }
    }, [videoStatus]);

    //language handler 
    const [language, setLanguage] = useState('english'); // Default language is English


    // Define video URLs based on the selected language

    const toggleLanguage = () => {
        // Toggle between English and French
        setLanguage(prevLanguage => prevLanguage === 'english' ? 'french' : 'english');
        console.log('Language:', language);
    };


    const englishVideos = {

        intro: 'https://dqdi1yce51qjt.cloudfront.net/english-with-caption/Education_Course_00_Intro_V6_SRT_English.mp4',
        bullying: 'https://dqdi1yce51qjt.cloudfront.net/english-with-caption/Education_Course_01_Bullying_V6_SRT_English.mp4',
        hazing: 'https://dqdi1yce51qjt.cloudfront.net/english-with-caption/Education_Course_02_Hazing_V6_SRT_English.mp4',
        boundaries: 'https://dqdi1yce51qjt.cloudfront.net/english-with-caption/Education_Course_03_Boundery Transgression_V6_SRT_English.mp4',
        grooming: 'https://dqdi1yce51qjt.cloudfront.net/english-with-caption/Education_Course_04_Grooming_V6_SRT_English.mp4',
        discrimination: 'https://dqdi1yce51qjt.cloudfront.net/english-with-caption/Education_Course_05_Discrimination_V6_SRT_English.mp4',
        neglect: 'https://dqdi1yce51qjt.cloudfront.net/english-with-caption/Education_Course_06_Neglect_V6_SRT_English.mp4',
        report: 'https://dqdi1yce51qjt.cloudfront.net/english-with-caption/Education_Course_07_Report_V6_SRT_English.mp4',
        // Include other English video URLs here...
    };
    const frenchVideos = {
        intro: 'https://dqdi1yce51qjt.cloudfront.net/french-with-caption/Education_Course_00_Intro_V6_SRT_French.mp4',
        bullying: 'https://dqdi1yce51qjt.cloudfront.net/french-with-caption/Education_Course_01_Bullying_V6_SRT_French.mp4',
        hazing: 'https://dqdi1yce51qjt.cloudfront.net/french-with-caption/Education_Course_02_Hazing_V6_SRT_French.mp4',
        boundaries: 'https://dqdi1yce51qjt.cloudfront.net/french-with-caption/Education_Course_03_Boundery Transgression_V6_SRT_French.mp4',
        grooming: 'https://dqdi1yce51qjt.cloudfront.net/french-with-caption/Education_Course_04_Grooming_V6_SRT_French.mp4',
        discrimination: 'https://dqdi1yce51qjt.cloudfront.net/french-with-caption/Education_Course_05_Discrimination_V6_SRT_French.mp4',
        neglect: 'https://dqdi1yce51qjt.cloudfront.net/french-with-caption/Education_Course_06_Neglect_V6_SRT_French.mp4',
        report: 'https://dqdi1yce51qjt.cloudfront.net/french-with-caption/Education_Course_07_Report_V6_SRT_French.mp4',
        // Include other French video URLs here...
    };
    //this switches the videos from englisht to french
    const videoUrls = language === 'english' ? englishVideos : frenchVideos;
    console.log('Video URLs:', videoUrls);



    const handleVideoCompletion = (index) => {
        // Mark the current video as watched
        setVideoStatus((prevStatus) =>
            prevStatus.map((video, i) => (i === index ? { ...video, watched: true } : video))
        );

        // Unlock the next video if there is one
        if (index + 1 < videoStatus.length) {
            setVideoStatus((prevStatus) =>
                prevStatus.map((video, i) =>
                    i === index + 1 ? { ...video, unlocked: true } : video
                )
            );
        }
    };

    const handleVideoEnded = (index) => {
        // Check if the user has finished watching the entire video
        console.log(`Video ${index + 1} fully watched!`);
        handleVideoCompletion(index);
    };

    return (
        <InView>
            <div className="education-page">
                <div className='page-title-div'>
                    <h1 className='page-title'>{language === 'english' ? 'Educational Video Content' : 'Contenu Vidéo Éducatif'}</h1>


                </div>
                <Authenticator className='education-page-authenticator'>
                    {({ signOut, user }) => (
                        <div className="education-page1">
                            <div className="logout-btn">
                                <button className="signOut-btn" onClick={signOut}>
                                    Sign Out
                                </button>
                            </div>

                            {/* <div className='default-div'>
                                 Button to toggle language 
                                <button onClick={toggleLanguage}>Switch to {language === 'english' ? 'French' : 'English'}</button>
                                Render videos based on selected language 
                            </div> */}
                            <div className='lang-button-div'>
                                <button className=' mobile-btn-lang' onClick={toggleLanguage}>Switch to {language === 'english' ? 'French' : 'English'}</button>
                            </div>
                            <div className="video-container">




                                <video
                                    key={language} // Add key prop here to force re-render
                                    id='education-Video'
                                    controls
                                    onEnded={() => handleVideoEnded(0)}
                                    className={videoStatus[0].unlocked ? '' : 'locked'}
                                >
                                    <source src={language === 'english' ? videoUrls.intro : videoUrls.intro} type="video/mp4" />
                                </video>
                                <div className='titles-container'>
                                    <h3 className="video-title">{language === 'english' ? 'Introduction' : 'Introduction'}</h3>

                                    <p className='video-info'>{language === 'english' ? `Safe Sport for Youth Intro - We will explain how these educational videos will flow, what we hope and trust you will learn from them, and set you up for success in sport.` : `Intro pour Safe Sport pour les Jeunes - Nous expliquerons comment ces vidéos éducatives seront organisées, ce que nous espérons et croyons que vous apprendrez d'elles, et vous préparerons pour réussir dans le sport.`}</p>

                                </div>





                                <div className={`video-wrapper ${videoStatus[1].unlocked ? '' : 'locked'}`}>
                                    <video
                                        key={language}
                                        id='education-Video'
                                        controls
                                        onEnded={() => handleVideoEnded(1)}
                                        className="video-player"
                                    >

                                        <source src={language === 'english' ? videoUrls.bullying : videoUrls.bullying} type="video/mp4" />
                                    </video>
                                    {videoStatus[1].unlocked ? null : <div className="lock-overlay"></div>}
                                </div>
                                <div className='titles-container'>
                                    <h3 className="video-title">{language === 'english' ? 'Bullying' : 'Intimidation'}</h3>

                                    <p className='video-info'>{language === 'english' ? "We've all heard of bullying, but it may show up differently in sport than at school or other settings. Let's look at how bullying can be a reality in sport today and equip ourselves with the knowledge and support available to stop bullying in its tracks." : "Nous avons tous entendu parler de l'intimidation, mais elle peut se manifester différemment dans le sport qu'à l'école ou dans d'autres contextes. Voyons comment l'intimidation peut être une réalité dans le sport aujourd'hui et équipons-nous des connaissances et du soutien disponibles pour arrêter l'intimidation sur place."}</p>

                                </div>


                                <div className={`video-wrapper ${videoStatus[2].unlocked ? '' : 'locked'}`}>
                                    <video
                                        key={language} // Add key prop here to force re-render
                                        id='education-Video'
                                        controls
                                        onEnded={() => handleVideoEnded(2)}
                                        className="video-player"
                                    >

                                        <source src={language === 'english' ? videoUrls.hazing : videoUrls.hazing} type="video/mp4" />
                                    </video>
                                    {videoStatus[2].unlocked ? null : <div className="lock-overlay"></div>}
                                </div>
                                <div className='titles-container'>
                                    <h3 className="video-title">{language === 'english' ? 'Hazing' : 'Bizutage'}</h3>

                                    <p className='video-info'>{language === 'english' ? "Often masked as tradition, hazing is sometimes hard to identify. Just because it's happened in the past, doesn't make it ok today. This video helps us to identify what hazing is, and if it is happening to you. We provide solutions to ending any tolerance for hazing. It's not ok." : "Souvent masqué comme une tradition, le bizutage est parfois difficile à identifier. Le fait que cela se soit produit dans le passé ne le rend pas acceptable aujourd'hui. Cette vidéo nous aide à identifier ce qu'est le bizutage et s'il se produit à votre égard. Nous proposons des solutions pour mettre fin à toute tolérance envers le bizutage. Ce n'est pas acceptable."}</p>

                                </div>



                                <div className={`video-wrapper ${videoStatus[3].unlocked ? '' : 'locked'}`}>
                                    <video
                                        key={language} // Add key prop here to force re-render
                                        id='education-Video'
                                        controls
                                        onEnded={() => handleVideoEnded(3)}
                                        className="video-player"
                                    >

                                        <source src={language === 'english' ? videoUrls.boundaries : videoUrls.boundaries} type="video/mp4" />
                                    </video>
                                    {videoStatus[3].unlocked ? null : <div className="lock-overlay"></div>}
                                </div>
                                <div className='titles-container'>
                                    <h3 className="video-title">{language === 'english' ? 'Boundary Transgressions' : 'Transgressions des limites'}</h3>

                                    <p className='video-info'>{language === 'english' ? 'Coaches and any other persons of authority must maintain professional boundaries with athletes. The video explains why this is important and how to identify red flags or warning signs that your boundaries are being crossed.' : 'Les entraîneurs et toute autre personne ayant une autorité doivent maintenir des limites professionnelles avec les athlètes. La vidéo explique pourquoi c`est important et comment identifier les signaux d`alarme ou les signes avant-coureurs indiquant que vos limites sont franchies.'}</p>

                                </div>




                                <div className={`video-wrapper ${videoStatus[4].unlocked ? '' : 'locked'}`}>
                                    <video
                                        key={language} // Add key prop here to force re-render
                                        id='education-Video'
                                        controls
                                        onEnded={() => handleVideoEnded(4)}
                                        className="video-player"
                                    >

                                        <source src={language === 'english' ? videoUrls.grooming : videoUrls.grooming} type="video/mp4" />
                                    </video>
                                    {videoStatus[4].unlocked ? null : <div className="lock-overlay"></div>}
                                </div>
                                <div className='titles-container'>
                                    <h3 className="video-title">{language === 'english' ? 'Grooming' : 'Toilettage'}</h3>
                                    <p className='video-info'>{language === 'english' ? 'Grooming may be a new term for you. The video demonstrates common steps that can be used to groom youth and athletes so you can identify them in real life. We provide first hand examples from survivors of grooming and explain how a groomer can try to manipulate athletes into going along with this form of abuse' : 'Le toilettage peut être un nouveau terme pour vous. La vidéo montre les étapes communes qui peuvent être utilisées pour toiletter les jeunes et les athlètes afin que vous puissiez les identifier dans la vraie vie. Nous fournissons des exemples concrets de survivants du toilettage et expliquons comment un toiletteur peut essayer de manipuler les athlètes pour qu`ils acceptent cette forme d`abus.'}</p>
                                </div>




                                <div className={`video-wrapper ${videoStatus[5].unlocked ? '' : 'locked'}`}>
                                    <video
                                        key={language} // Add key prop here to force re-render
                                        id='education-Video'
                                        controls
                                        onEnded={() => handleVideoEnded(5)}
                                        className="video-player"
                                    >
                                        <source src={language === 'english' ? videoUrls.discrimination : videoUrls.discrimination} type="video/mp4" />
                                    </video>
                                    {videoStatus[5].unlocked ? null : <div className="lock-overlay"></div>}
                                </div>
                                <div className='titles-container'>
                                    <h3 className="video-title">{language === 'english' ? 'Discrimination, Psychological, and Physical Maltreatment' : 'Discrimination, Maltraitance Psychologique et Physique'}</h3>

                                    <p className='video-info'>{language === 'english' ? 'Hang in there, you are doing great. In the next two videos we will cover the other forms of maltreatment we feel are important so keep those eyes and ears open, you’re almost there.' : 'Accrochez-vous, vous vous en sortez très bien. Dans les deux prochaines vidéos, nous aborderons les autres formes de maltraitance que nous estimons importantes, alors gardez les yeux et les oreilles ouverts, vous y êtes presque.'}</p>
                                </div>




                                <div className={`video-wrapper ${videoStatus[6].unlocked ? '' : 'locked'}`}>
                                    <video
                                        key={language} // Add key prop here to force re-render
                                        id='education-Video'
                                        controls
                                        onEnded={() => handleVideoEnded(6)}
                                        className="video-player"
                                    >
                                        <source src={language === 'english' ? videoUrls.neglect : videoUrls.neglect} type="video/mp4" />
                                    </video>
                                    {videoStatus[6].unlocked ? null : <div className="lock-overlay"></div>}
                                </div>
                                <div className='titles-container'>
                                    <h3 className="video-title">{language === 'english' ? 'Neglect, Sexual Maltreatment, and Micro-aggressions' : 'Négligence, Maltraitance Sexuelle et Micro-agressions'}</h3>
                                    <p className='video-info'>{language === 'english' ? 'Maltreatment often starts with subtle micro-aggressions, which can be harder to identify. Let`s dig in to what those are along with two more forms of maltreatment some athletes may encounter.' : 'La maltraitance commence souvent par des micro-agressions subtiles, qui peuvent être plus difficiles à identifier. Explorons ce que sont ces micro-agressions ainsi que deux autres formes de maltraitance que certains athlètes peuvent rencontrer.'}</p>

                                </div>



                                <div className={`video-wrapper ${videoStatus[7].unlocked ? '' : 'locked'}`}>
                                    <video
                                        key={language} // Add key prop here to force re-render
                                        id='education-Video'
                                        controls
                                        onEnded={() => handleVideoEnded(7)}
                                        className="video-player"
                                    >
                                        <source src={language === 'english' ? videoUrls.report : videoUrls.report} type="video/mp4" />
                                    </video>
                                    {videoStatus[7].unlocked ? null : <div className="lock-overlay"></div>}
                                </div>
                                <div className='titles-container'>
                                    <h3 className="video-title">{language === 'english' ? 'Report and Support' : 'Signaler et Soutien'}</h3>
                                    <p className='video-info'>{language === 'english' ? 'Final video! And an important one as we will discuss how you can report maltreatment and get support. Recognizing maltreatment is key so that you can speak out and get the help and support you need. We hope you enjoyed these short informative videos and we wish you all the best on your athletic journey, wherever that takes you. Stay safe and speak out.' : 'Dernière vidéo ! Et une vidéo importante car nous discuterons de la manière dont vous pouvez signaler les mauvais traitements et obtenir du soutien. Reconnaître les mauvais traitements est essentiel pour que vous puissiez vous exprimer et obtenir l`aide et le soutien dont vous avez besoin. Nous espérons que vous avez apprécié ces courtes vidéos informatives et nous vous souhaitons tout le meilleur dans votre parcours sportif, où que cela vous mène. Restez en sécurité et parlez.'}</p>

                                </div>

                                {/* Repeat the pattern for other videos */}
                            </div>
                        </div>
                    )}
                </Authenticator>
            </div>
        </InView>
    );
};

export default EducationPage;

