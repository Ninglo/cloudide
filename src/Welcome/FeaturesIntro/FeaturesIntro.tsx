
import React from 'react';
import type { FC } from 'react';
import { introConfig, cardConfigs } from './config';
import Card from '../../components/Card/Card';
import Intro from '../../components/Intro/Intro';
import './index.scss';

const FeaturesIntro: FC = () => {
  return (
    <div className="features">
      <div className="features-content">
        <Intro content={introConfig} className="features-intro" />
        <div className="features-cards">
          {cardConfigs.map((config, i) => (
            <Card className="features-card" key={i} {...config} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesIntro;
