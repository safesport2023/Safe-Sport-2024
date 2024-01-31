import React, { useState, useRef, useEffect } from 'react';
import './vidComponent.css';

const VideoPlayer = ({ videoSource, onCompletion }) => {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        const handleTimeUpdate = () => {
            setCurrentTime(videoRef.current.currentTime);
            setDuration(videoRef.current.duration);
        };

        const handleVideoCompletion = () => {
            // Check if the video is fully watched
            if (videoRef.current.currentTime === videoRef.current.duration) {
                console.log('Video fully watched!');
                onCompletion();
            }
        };

        videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
        videoRef.current.addEventListener('ended', handleVideoCompletion);

        return () => {
            // Cleanup event listeners when the component unmounts
            videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            videoRef.current.removeEventListener('ended', handleVideoCompletion);
        };
    }, [onCompletion]);

    return (
        <div className="video-player">
            <video ref={videoRef} controls>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p className='progress-text'>{`Progress: ${(currentTime / duration * 100).toFixed(2)}%`}</p>
        </div>
    );
};

export default VideoPlayer;




// import React from 'react';
// import './vidComponent.css';
// import { useEffect, useRef, useState } from 'react';
// import { ProgressBar } from 'react-bootstrap';

// function VideoPlayer({ src }) {
//     const videoRef = useRef(null);
//     const [currentTime, setCurrentTime] = useState(0);
//     const [duration, setDuration] = useState(0);

//     const playVideo = () => {
//         videoRef.current.play();
//     };
//     const pauseVideo = () => {
//         videoRef.current.pause();
//     };
//     const fastForward = () => {
//         videoRef.current.currentTime += 10;
//     };
//     const rewind = () => {
//         videoRef.current.currentTime -= 10;
//     };

//     useEffect(() => {
//         const video = videoRef.current;

//         const timeUpdateHandler = () => {
//             setCurrentTime(video.currentTime);
//         };

//         const loadedMetadataHandler = () => {
//             setCurrentTime(video.currentTime);
//         };

//         video.addEventListener('timeupdate', timeUpdateHandler);
//         video.addEventListener('loadedmetadata', loadedMetadataHandler);

//         return () => {
//             video.removeEventListener('timeupdate', timeUpdateHandler);
//             video.removeEventListener('loadedmetadata', loadedMetadataHandler);
//         };
//     }, []);

//     return (
//         <div className="video-player">
//             <video className='video-player' ref={videoRef} src={src}></video>
//             <div className="video-controls">
//                 <button className='control-btn' onClick={playVideo}>
//                     Play
//                 </button>
//                 <button className='control-btn' onClick={pauseVideo}>
//                     Pause
//                 </button>
//             </div>
//             <div className='progress-bar-container'>
//                 <div className='progress-bar'>
//                     <div className='progress-bar-fill' style={{ width: `${currentTime / duration * 100}%` }} />
//                 </div>
//                 <div className='time-indicators'>
//                     <span className='current-time'>
//                         {currentTime.toFixed(2)}
//                     </span>
//                     <span classname='duration'>
//                         {duration.toFixed(2)}
//                     </span>
//                 </div>
//             </div>
//         </div>
//     );


// }

// export default VideoPlayer;