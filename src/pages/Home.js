import './Home.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './EducationPages.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';






// const localVideoPath = '../../public/assets/placeholder1.mp4';
const Home = () => {





    //language handler 
    const [language, setLanguage] = useState('english');
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            // set user state and show alert 
            setUserEmail(user.attributes.email); // Update userEmail state with user email
            console.log('Logged in user email:', userEmail);
        } catch (error) {
            console.log('Error getting current user', error);
        }
    };


    // Define video URLs based on the selected language

    const toggleLanguage = () => {
        // Toggle between English and French
        setLanguage(prevLanguage => prevLanguage === 'english' ? 'french' : 'english');
        console.log('Language:', language);
    };


    const englishVideos = {

        promo: 'https://dqdi1yce51qjt.cloudfront.net/english-with-caption/main-promo-eng.mp4'

        // Include other English video URLs here...
    };
    const frenchVideos = {
        promo: 'https://dqdi1yce51qjt.cloudfront.net/french-with-caption/main-promo-french.mp4'

        // Include other French video URLs here...
    };
    //this switches the videos from englisht to french
    const videoUrls = language === 'english' ? englishVideos : frenchVideos;
    console.log('Video URLs:', videoUrls);




    return (
        <div className='home-page'>
            <div className='page-title-div'>
                <h1 className='page-title'>Welcome to Safe Sport <br></br> Education for Youth</h1>
            </div>
            <Authenticator

            >
                {({ signOut, user }) => (
                    <div className="logout-btn">
                        <button className="signOut-btn" onClick={signOut}>
                            Sign Out
                        </button>
                    </div>
                )}
            </Authenticator>


            <div className='lang-button-div'>
                <button className='mobile-btn-lang' onClick={toggleLanguage}>Switch to {language === 'english' ? 'French' : 'English'}</button>
            </div>
            {userEmail ? (
                <div className="user-email-container">
                    <p>Your email: {userEmail}</p>
                </div>
            ) : null}
            <div className="video-Container" >
                <video
                    id='HFYHVideo'
                    key={language}
                    width="800px"
                    height="auto"
                    controls

                >
                    <source src={language === 'english' ? videoUrls.promo : videoUrls.promo} type="video/mp4" />
                </video>

            </div>
            <div className='welcome-statement default-div'>
                <p>Welcome to Safe Sport Education for Youth! This educational program will provide you with all the tools you need to have a safe and positive sports experience. Safe Sport Education for Youth is brought to you by the National Sports Organizations representing athletics, volleyball, and swimming. These videos are short and all you need to do is watch them. Easy right? Check out the videos and be a part of our new movement called Safe Sport.
                    <br></br>
                    <br></br>

                    Every athlete deserves a sports experience that's free of maltreatment and abuse. Sports can provide the fun and positive environment you deserve, but sometimes it doesn't exactly work out that way.We have tailored this education program to provide you with the tools to protect yourself from negative sporting situations. This program has been designed specifically for athletes age 13-19. If you are under 13, please get permission from your parent(s) or guardian(s) before you start the program.

                    <br></br>
                    <br></br>
                    Some of the information you hear may be hard to hear and could make you uncomfortable. We've got a page <Link className='custom-links' to="/resources"> (Resources)</Link> with links to some of the support and resources available to help you get through it. There are there to help you.  </p>
            </div>
            <div className='gap-container'>
            </div>
            <div className='welcome-statement default-div'>
                <p>So how does the Safe Sport for Youth program work. We kept it simple for anyone to use. Just follow these step by step instructions and be open to learning:
                    <br></br>
                    <br></br>

                    <ul>
                        <li>Register for the website using an email that we can send your certificate of completion to.</li>
                        <br></br>
                        <li>Watch the videos on the education page in order. No skipping ahead.</li>
                        <br></br>
                        <li>Stay present and pay attention to the videos. The information matters!</li>
                        <br></br>
                        <li>Recieve your certificate of completion by email and submit it to your sports club if they have asked for it.</li>
                        <br></br>
                        <li>Spread the word! We all need to do our part to keep sport safe.</li>
                    </ul>
                </p>
            </div>



            <div className='gap-container'>
            </div>
        </div>
    );
};



export default Home;