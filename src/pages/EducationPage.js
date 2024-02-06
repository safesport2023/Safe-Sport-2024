import React, { useState, } from 'react';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './EducationPages.css';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { InView } from 'react-intersection-observer';

// Video imports
// import englishVideo00 from '../assets/courses/english/English_Course_00.mp4';
// import englishVideo01 from '../assets/courses/english/English_Course_01.mp4';
// import englishVideo02 from '../assets/courses/english/English_Course_02.mp4';
// import englishVideo03 from '../assets/courses/english/English_Course_03.mp4';
// import englishVideo04 from '../assets/courses/english/English_Course_04.mp4';
// import englishVideo05 from '../assets/courses/english/English_Course_05.mp4';
// import englishVideo06 from '../assets/courses/english/English_Course_06.mp4';
// import englishVideo07 from '../assets/courses/english/English_Course_07.mp4';

Amplify.configure(awsconfig);

const EducationPage = () => {
    const [videoStatus, setVideoStatus] = useState([
        { unlocked: true, watched: false },
        { unlocked: false, watched: false },
        { unlocked: false, watched: false },
        { unlocked: false, watched: false },
        { unlocked: false, watched: false },
        { unlocked: false, watched: false },
        { unlocked: false, watched: false },
        { unlocked: false, watched: false },
    ]);

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
                    <h1 className='page-title'>Educational Video Content</h1>
                </div>
                <Authenticator onAuthStateChange={(authState) => {
                    if (authState === 'signedIn') {
                        // User just signed in
                        console.log('User signed in', authState.user);
                    }
                }}>
                    {({ signOut, user }) => (
                        <div className="education-page1">
                            <div className="logout-btn">
                                <button className="signOut-btn" onClick={signOut}>
                                    Sign Out
                                </button>
                            </div>


                            <div className="video-container">

                                {/* <div className='intro-container'>
                                <p className='intro-paragraph'>Here are the videos!  We’ve designed the user experience to have the most impact when the videos are watched in order. We want to build on foundational knowledge as we go through the content resulting in the best learning experience possible. So no skipping ahead. Once you are done watching one video, the next will automatically unlock for viewing 24/7 at your own pace. Please remember you can check out our resources and support page (link) at any time.</p>
                            </div> */}


                                <video
                                    id='education-Video'
                                    controls
                                    onEnded={() => handleVideoEnded(0)}
                                    className={videoStatus[0].unlocked ? '' : 'locked'}
                                >
                                    <source src='https://www.youtube.com/embed/ScMzIvxBSi4' type="video/mp4" />
                                </video>
                                <div className='titles-container'>
                                    <h3 className="video-title">Introduction</h3>
                                    <p className='video-info'>Safe Sport for Youth Intro - We will explain how these educational videos will flow, what we hope and trust you will learn from them, and set you up for success in sport.</p>
                                </div>


                                {/* <video
                                controls
                                onEnded={() => handleVideoEnded(1)}
                                className={videoStatus[1].unlocked ? '' : 'locked'}
                            >
                                <source src={englishVideo01} type="video/mp4" />
                            </video> */}


                                <div className={`video-wrapper ${videoStatus[1].unlocked ? '' : 'locked'}`}>
                                    <video
                                        id='education-Video'
                                        controls
                                        onEnded={() => handleVideoEnded(1)}
                                        className="video-player"
                                    >
                                        <source src="https://www.youtube.com/embed/ScMzIvxBSi4" type="video/mp4" />
                                    </video>
                                    {videoStatus[1].unlocked ? null : <div className="lock-overlay"></div>}
                                </div>
                                <div className='titles-container'>
                                    <h3 className="video-title">Bullying</h3>
                                    <p className='video-info'>We've all heard of bullying, but it may show up differently in sport than at school or other  other settings. Let's look at how bullying can be a reality in sport today and equip ourselves with the knowledge and support available to stop bullying in its tracks. </p>
                                </div>

                                {/* <video
                                controls
                                onEnded={() => handleVideoEnded(2)}
                                className={videoStatus[2].unlocked ? '' : 'locked'}
                            >
                                <source src={englishVideo02} type="video/mp4" />
                            </video> */}


                                <div className={`video-wrapper ${videoStatus[2].unlocked ? '' : 'locked'}`}>
                                    <video
                                        id='education-Video'
                                        controls
                                        onEnded={() => handleVideoEnded(2)}
                                        className="video-player"
                                    >
                                        <source src="https://www.youtube.com/embed/ScMzIvxBSi4" type="video/mp4" />
                                    </video>
                                    {videoStatus[2].unlocked ? null : <div className="lock-overlay"></div>}
                                </div>
                                <div className='titles-container'>
                                    <h3 className="video-title">Hazing</h3>
                                    <p className='video-info'>Often masked as tradition, hazing is sometimes hard to identify. Just because it's happened in the past, doesn't make it ok today. This video helps us to identify what  hazing is, and if it is happening to you. We provide solutions to ending any tolerance for hazing. It's not ok.</p>
                                </div>
                                {/* <video
                                controls
                                onEnded={() => handleVideoEnded(3)}
                                className={videoStatus[3].unlocked ? '' : 'locked'}
                            >
                                <source src={englishVideo03} type="video/mp4" />
                            </video> */}


                                <div className={`video-wrapper ${videoStatus[3].unlocked ? '' : 'locked'}`}>
                                    <video
                                        id='education-Video'
                                        controls
                                        onEnded={() => handleVideoEnded(3)}
                                        className="video-player"
                                    >
                                        <source src="https://www.youtube.com/embed/ScMzIvxBSi4" type="video/mp4" />
                                    </video>
                                    {videoStatus[3].unlocked ? null : <div className="lock-overlay"></div>}
                                </div>
                                <div className='titles-container'>
                                    <h3 className="video-title">Boundary Transgressions</h3>
                                    <p className='video-info'>Coaches and any other persons of authority must maintain professional boundaries with athletes. The video explains why this is important and how to identify red flags or warning signs that your boundaries are being crossed.</p>
                                </div>

                                {/* <video
                                controls
                                onEnded={() => handleVideoEnded(4)}
                                className={videoStatus[4].unlocked ? '' : 'locked'}
                            >
                                <source src={englishVideo04} type="video/mp4" />
                            </video> */}


                                <div className={`video-wrapper ${videoStatus[4].unlocked ? '' : 'locked'}`}>
                                    <video
                                        id='education-Video'
                                        controls
                                        onEnded={() => handleVideoEnded(4)}
                                        className="video-player"
                                    >
                                        <source src="https://www.youtube.com/embed/ScMzIvxBSi4" type="video/mp4" />
                                    </video>
                                    {videoStatus[4].unlocked ? null : <div className="lock-overlay"></div>}
                                </div>
                                <div className='titles-container'>
                                    <h3 className="video-title">Grooming</h3>
                                    <p className='video-info'>Grooming may be a new term for you. The video demonstrates common steps that can be used to groom youth and athletes so you can identify them in real life. We provide first hand examples from survivors of grooming and explain how a groomer can try to manipulate athletes into going along with this form of abuse</p>
                                </div>

                                {/* <video
                                controls
                                onEnded={() => handleVideoEnded(5)}
                                className={videoStatus[5].unlocked ? '' : 'locked'}
                            >
                                <source src={englishVideo05} type="video/mp4" />
                            </video> */}


                                <div className={`video-wrapper ${videoStatus[5].unlocked ? '' : 'locked'}`}>
                                    <video
                                        id='education-Video'
                                        controls
                                        onEnded={() => handleVideoEnded(5)}
                                        className="video-player"
                                    >
                                        <source src="https://www.youtube.com/embed/ScMzIvxBSi4" type="video/mp4" />
                                    </video>
                                    {videoStatus[5].unlocked ? null : <div className="lock-overlay"></div>}
                                </div>
                                <div className='titles-container'>
                                    <h3 className="video-title">Discrimination, Psychological, and Physical Maltreatment</h3>
                                    <p className='video-info'>Hang in there, you are doing great. In the next two videos we will cover the other forms of maltreatment we feel are important so keep those eyes and ears open, you’re almost there. </p>
                                </div>

                                {/* <video
                                controls
                                onEnded={() => handleVideoEnded(6)}
                                className={videoStatus[6].unlocked ? '' : 'locked'}
                            >
                                <source src={englishVideo06} type="video/mp4" />
                            </video> */}


                                <div className={`video-wrapper ${videoStatus[6].unlocked ? '' : 'locked'}`}>
                                    <video
                                        id='education-Video'
                                        controls
                                        onEnded={() => handleVideoEnded(6)}
                                        className="video-player"
                                    >
                                        <source src="https://www.youtube.com/embed/ScMzIvxBSi4" type="video/mp4" />
                                    </video>
                                    {videoStatus[6].unlocked ? null : <div className="lock-overlay"></div>}
                                </div>
                                <div className='titles-container'>
                                    <h3 className="video-title">Neglect, Sexual Maltreatment, and Micro-aggressions</h3>
                                    <p className='video-info'>Maltreatment often starts with subtle micro-aggressions, which can be harder to identify. Let's dig in to what those are along with two more forms of maltreatment some athletes may encounter.</p>
                                </div>

                                {/* <video
                                controls
                                onEnded={() => handleVideoEnded(7)}
                                className={videoStatus[7].unlocked ? '' : 'locked'}
                            >
                                <source src={englishVideo07} type="video/mp4" />
                            </video> */}


                                <div className={`video-wrapper ${videoStatus[7].unlocked ? '' : 'locked'}`}>
                                    <video
                                        id='education-Video'
                                        controls
                                        onEnded={() => handleVideoEnded(7)}
                                        className="video-player"
                                    >
                                        <source src="https://www.youtube.com/embed/ScMzIvxBSi4" type="video/mp4" />
                                    </video>
                                    {videoStatus[7].unlocked ? null : <div className="lock-overlay"></div>}
                                </div>
                                <div className='titles-container'>
                                    <h3 className="video-title">Report and Support</h3>
                                    <p className='video-info'>Final video! And an important one as we will discuss how you can report maltreatment and get support. Recongizing maltreatment is key so that you can speak out and get the help and support you need. We hope you enjoyed these short informative videos and we wish you all the best on your athletic journey, wherever that takes you. Stay safe and speak out.</p>
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

