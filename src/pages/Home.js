import './Home.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './EducationPages.css';
import React from 'react';
import { Link } from 'react-router-dom';



// const localVideoPath = '../../public/assets/placeholder1.mp4';
const Home = () => {
    return (
        <div className='home-page'>
            <div className='page-title-div'>
                <h1 className='page-title'>Welcome to Safe Sport <br></br> Education for Youth</h1>
            </div>
            <Authenticator className='auth-block' onAuthStateChange={(authState) => {
                if (authState === 'signedIn') {
                    // User just signed in
                    console.log('User signed in', authState.user);
                }
            }}>
                {({ signOut, user }) => (
                    <div className='other'>
                        <div className='logout-btn'>


                            <button className='signOut-btn' onClick={signOut}>Sign Out</button>
                        </div>



                    </div>
                )}
            </Authenticator>
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