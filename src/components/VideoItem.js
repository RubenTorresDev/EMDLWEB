// src/components/VideoItem.js
import React from 'react';
import '../css/VideoItem.css';

const VideoItem = ({ videoUrl, title }) => {
  return (
    <div className="layout-grid-item">
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="315"
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h3 className="video-title">{title}</h3>
    </div>
  );
};

export default VideoItem;


