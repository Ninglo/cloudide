
import React from 'react';
import type { LANG_NAME } from './config';
import { videoPathMap, cardConfigsMap } from './config';
import type { IResponser } from '../../components/ActiveController/ActiveController';
import Card from '../../components/Card/Card';

const Video: IResponser<LANG_NAME> = ({ active }) => {
  const videoPath = videoPathMap[active];
  return (
    <div className="practices-video">
      <div className="video">
        <video key={videoPath} muted controls>
          <source src={videoPath} type="video/mp4" />
        </video>
      </div>
      <div className="cards">
        {cardConfigsMap[active]?.map((cardConfig, i) => (
          <Card className="card" key={i} {...cardConfig} />
        ))}
      </div>
    </div>
  );
};

export default Video;
