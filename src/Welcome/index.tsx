
import React from 'react';
import type { FC } from 'react';
import AboveFold from './AboveFold/AboveFold';
import BestPractices from './BestPractices/BestPractices';
import CreateGuide from './CreateGuide/CreateGuide';
import FeaturesIntro from './FeaturesIntro/FeaturesIntro';
import Footer from './Footer/Footer';
import './index.scss';

const Index: FC = () => {
  return (
    <div className="cloudide-welcome">
      <AboveFold />
      <CreateGuide />
      <FeaturesIntro />
      <BestPractices />
      <Footer />
    </div>
  );
};

export default Index;
