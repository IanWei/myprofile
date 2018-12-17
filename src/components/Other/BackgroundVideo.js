import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import mp4 from '../../assets/images/Beetle-Nut-Trees.mp4';
import webm from '../../assets/images/Beetle-Nut-Trees.webm';
import 'react-html5video/dist/styles.css';

const BackgroundVideo = props => {
  return (
    <div className="bg-video">
      <Video className="bg-video__content" autoPlay muted loop>
        <source src={mp4} type="video/mp4"/>
        <source src={webm} type="video/webm"/>
      </Video>
    </div>
  );
};

export default BackgroundVideo;