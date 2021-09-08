
import React from 'react';
import type { FC } from 'react';
import { Photo } from './Icons';
import { content, stepCardConfigs } from './config';
import ActiveHandler from '../../components/ActiveController/ActiveController';
import createComplexController from '../../components/ActiveController/ComplexController';
import Intro from '../../components/Intro/Intro';
import './index.scss';

const CreateGuide: FC = () => {
  const Controller = createComplexController(stepCardConfigs, 'create-guide-step-cards');
  return (
    <section className="create-guide">
      <Intro content={content} className="create-guide-intro" />
      <div className="create-guide-content">
        <ActiveHandler Controller={Controller} Responser={Photo} defaultValue="stepOne" />
      </div>
    </section>
  );
};

export default CreateGuide;
