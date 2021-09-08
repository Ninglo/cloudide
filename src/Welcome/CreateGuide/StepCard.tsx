
import React from 'react';
import type { FC } from 'react';
import { StepIcons, JUMP_ICON } from './Icons';
import { CREATE_ENV, introConfigs } from './config';
import Card from '../../components/Card/Card';

const getNewEnvPath = () => ''

export interface IStepCard {
  index: 0 | 1 | 2;
  className: string;
}

const StepCard: FC<IStepCard & { active: boolean }> = ({ active, index, className }) => (
  <Card
    className={`${className}${active ? '-active' : ''}`}
    icon={StepIcons[index]}
    title={introConfigs[index].title}
    details={active ? introConfigs[index].details : undefined}
    onClick={() => window.open(getNewEnvPath())}>
    {active && (
      <div className="jump">
        <div className="text">{CREATE_ENV}</div>
        <div className="icon">{JUMP_ICON}</div>
      </div>
    )}
  </Card>
);

export default StepCard;
