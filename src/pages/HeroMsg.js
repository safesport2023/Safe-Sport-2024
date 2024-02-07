import '@aws-amplify/ui-react/styles.css';
import './HeroMsg.css';
import React, { useRef, useState } from 'react';
import { InView } from 'react-intersection-observer';


//english video import

const videoDamianEnglish = 'https://dqdi1yce51qjt.cloudfront.net/english-with-caption/Warner_V3_SRT_English.mp4';
const videoFinlayEnglish = 'https://dqdi1yce51qjt.cloudfront.net/english-with-caption/Knox_V3_SRT_English.mp4';
const videoMarissaEnglish = 'https://dqdi1yce51qjt.cloudfront.net/english-with-caption/Papaconstantinou_V3_SRT_English.mp4';
const videoJavierEnglish = 'https://dqdi1yce51qjt.cloudfront.net/english-with-caption/Acevedo_V3_SRT_English.mp4';
const videoEllaEnglish = 'https://dqdi1yce51qjt.cloudfront.net/english-with-caption/Jansen_V3_SRT_English.mp4';

//french video import

const videoDamianFrench = 'https://dqdi1yce51qjt.cloudfront.net/french-with-caption/Warner_V3_SRT_French.mp4';
const videoFinlayFrench = 'https://dqdi1yce51qjt.cloudfront.net/french-with-caption/Knox_V3_SRT_French.mp4';
const videoMarissaFrench = 'https://dqdi1yce51qjt.cloudfront.net/french-with-caption/Papaconstantinou_V3_SRT_French.mp4';
const videoJavierFrench = 'https://dqdi1yce51qjt.cloudfront.net/french-with-caption/Acevedo_V3_SRT_French.mp4';
const videoEllaFrench = 'https://dqdi1yce51qjt.cloudfront.net/french-with-caption/Jansen_V3_SRT_French.mp4';



const HeroMsg = () => {
    const videoRefs = {
        damian: useRef(null),
        finlay: useRef(null),
        ella: useRef(null),
        javier: useRef(null),
        marissa: useRef(null)
        // Add refs for other videos as needed
    };

    const [currentVideo, setCurrentVideo] = useState(null);

    const handlePlay = (videoName) => {
        // Pause the currently playing video
        if (currentVideo && currentVideo !== videoName) {
            videoRefs[currentVideo].current.pause();
        }

        // Play the selected video
        videoRefs[videoName].current.play();

        // Update the current video state
        setCurrentVideo(videoName);
    };

    return (
        <InView>
            <div className='messages-page'>
                <div className='page-title-div'>
                    <h1 className='page-title'>Hear from your Heroes</h1>
                </div>
                <div className='welcome-statement default-div'>
                    <p className='Athlete-message'>
                        We asked some of the top Canadian athletes in swimming, athletics, and volleyball why Safe Sport is  important for athletes and what it means to them. Have a look.
                    </p>
                </div>
                <div className='hero-messages'>
                    <div className='content-section'>
                        <h2 className='Header-hero'> Damian Warner </h2>
                        <p className='Athlete-message'> Damian won decathlon gold at Tokyo 2020, setting an Olympic record as he became just the fourth man to ever break the 9000-point mark. Warner led the two-day Olympic decathlon from start to finish across, 10-discipline event with 9018 points to become the first Canadian to earn the honourary title of World's Greatest Athlete. Warner had previously won bronze at Rio 2016 and finished fifth in his Olympic debutin London 2012.<br></br><br></br> Damian started in track and field at 17, at the suggestion of his high school basketball coaches. He had his Olympic dream sparked by watching Catriona Le May Doan and Donovan Bailey compete in track and field when he was a kid. Because of his basketball roots, his role model and athletic inspiration was the NBA's Vince Carter. Outside of sport Damian graduated from Fanshawe College in 2010 and enjoys art, video games, and travelling. His favourite motto is: “You can do anything you set your mind to” </p>
                        <div className="video-Container">
                            <video
                                id='HFYHVideo'
                                ref={videoRefs.damian}
                                width="750"
                                height="500"
                                controls
                                onPlay={() => handlePlay('damian')}
                            >
                                <source src={videoDamianEnglish} type="video/mp4" />
                            </video>

                        </div>
                    </div>
                    <div className='content-section'>
                        <h2 className='Header-hero'> Marissa Papaconstantinou </h2>
                        <p className='Athlete-message'> Marissa is a two-time Paralympian and medalist in track and field where she competes in the T64 100m and 200m. Born without her right foot, Marissa competes in the T64 category, a classification for athletes with the absence of one leg below the knee.<br></br><br></br> Marissa made her impressive international debut at the 2015 IPC World Championships where she finished seventh in the 200m and eighth in the 100m. In 2016, just a year later she made her Paralympic Games debut at age 16 in Rio de Janeiro where she ran a personal best 13.65 seconds in the 100m, finishing third in her heat, Marissa returned to the 2020 Paralympic Games, in Tokyo, where she won Bronze in the T64 200m. <br></br><br></br>Marissa took up Para athletics at age 11 at the Phoenix Track Club in Scarborough, Ont. , and soon after was fitted with her first running blade. She's always participated in sport and also enjoys soccer and basketball
                        </p>
                        <div className="video-Container">
                            <video
                                id='HFYHVideo'
                                ref={videoRefs.marissa}
                                width="750"
                                height="500"
                                controls
                                onPlay={() => handlePlay('marrissa')}
                            >
                                <source src={videoMarissaEnglish} type="video/mp4" />
                            </video>

                        </div>
                    </div>
                    <div className='content-section'>
                        <h2 className='Header-hero'> Finlay Knox </h2>
                        <p className='Athlete-message'> Finlay Knox, was a member of the Canadian Olympic swim team in Tokyo 2020 and also  a two-time world championship medallist. Finlay is also a Pan American Games champion in the 200-metre individual medley and won two bronze in the 2023 PanAm games as part of the men's 4x100 metre freestyle relay and the mixed 4x100 freestyle relay teams.  He fell in love with the water while living in New Zealand before he and his family moved to Okotoks, Alberta, where he began his competetive swimming career. </p>
                        <div className="video-Container">
                            <video
                                id='HFYHVideo'
                                ref={videoRefs.finlay}
                                width="750"
                                height="500"
                                controls
                                onPlay={() => handlePlay('finlay')}
                            >
                                <source src={videoFinlayEnglish} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className='content-section'>
                        <h2 className='Header-hero'> Javier Acevedo </h2>
                        <p className='Athlete-message'> Two-time Olympian Javier Acevedo was the youngest Canadian to earn a spot on the Rio 2016 Olympic swim team at age 18. He represented Canada again at the 2020 Olympic Games in Tokyo. Hailing from Toronto, Acevedo is a five-time world championship medallist and four-time Commonwealth Games medalist. Acevedo trains at the High Performance Centre - Ontario located in Toronto.</p>
                        <div className="video-Container">
                            <video
                                id='HFYHVideo'
                                ref={videoRefs.javier}
                                width="750"
                                height="500"
                                controls
                                onPlay={() => handlePlay('javier')}
                            >
                                <source src={videoJavierEnglish} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className='content-section'>
                        <h2 className='Header-hero'> Ella Jansen </h2>
                        <p className='Athlete-message'> Ella Jansen is a two-time medalist at the 2022 Commonwealth Games and was named Swimming Canada's Breakout Swimmer of the Year in 2022. She was also part of the 2023 World Aquatics Championships team that competed in Fukuoka, Japan. Jansen trains at the High Performance Centre - Ontario located in Toronto.
                        </p>
                        <div className="video-Container">
                            <video
                                id='HFYHVideo'
                                ref={videoRefs.ella}
                                width="750"
                                height="500"
                                controls
                                onPlay={() => handlePlay('ella')}
                            >
                                <source src={videoEllaEnglish} type="video/mp4" />
                            </video>
                        </div>
                    </div>


                </div>
            </div>
        </InView>
    );
};

export default HeroMsg;