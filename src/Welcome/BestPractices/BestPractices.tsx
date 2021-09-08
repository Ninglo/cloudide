
import type { FC } from 'react';
import React from 'react';
import Video from './Video';
import type { LANG_NAME } from './config';
import { tabConfigs, config } from './config';
import ActiveHandler from '../../components/ActiveController/ActiveController';
import createComplexController from '../../components/ActiveController/ComplexController';
import Intro from '../../components/Intro/Intro';
import './index.scss';

const BestPractices: FC = () => {
  const Controller = createComplexController(tabConfigs, 'practices-tabs');
  const defaultValue: LANG_NAME = 'cPlusPlus';
  return (
    <div className="practices">
      <Intro content={config} className="practices-intro" />
      <ActiveHandler Controller={Controller} Responser={Video} defaultValue={defaultValue} />
    </div>
  );
};

export default BestPractices;
