import React from 'react';
import '../css/VideoSection.css';
import VideoItem from '../components/VideoItem';

const videos = [
  {
    id: 1,
    title: 'Me importa una mierda',
    videoUrl: 'https://www.youtube.com/embed/2T5dSgoQlu0',
  },
  {
    id: 2,
    title: 'Lumbalgia indefinida',
    videoUrl: 'https://www.youtube.com/embed/34hhktoJQLA?si=NFj2Rvt35tqwzVZW',
  },
  {
    id: 3,
    title: 'Delfines',
    videoUrl: 'https://www.youtube.com/embed/qm1ENDWeOAk?si=kC88z014QxP9ASfd',
  },
  {
    id: 4,
    title: '"." Full album',
    videoUrl: 'https://www.youtube.com/embed/KCrS5lv6f14?si=hH5vWoQJWWi4t90a',
  },
  {
    id: 5,
    title: 'Me importa un Mierda (Live set)',
    videoUrl: 'https://www.youtube.com/embed/Jc5PLQKtLWE',

  },
  {
    id: 6,
    title: 'CAFÉ EGIPCIO (Live set)',
    videoUrl: 'https://www.youtube.com/embed/99SmXmIG5n8',
  },
  {
    id: 7,
    title: 'El niño libre',
    videoUrl: 'https://www.youtube.com/embed/_uYaG_qzP50',
  },
  {
    id: 8,
    title: 'Odio ser alternativo',
    videoUrl: 'https://www.youtube.com/embed/H9uhHQJgRLY',
  },
  {
    id: 9,
    title: 'Cafe egipcio',
    videoUrl: 'https://www.youtube.com/embed/d_xlVC5TjgI',
  },
];

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="layout-grid">
        {videos.map((video) => (
          <VideoItem key={video.id} videoUrl={video.videoUrl} title={video.title} />
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
