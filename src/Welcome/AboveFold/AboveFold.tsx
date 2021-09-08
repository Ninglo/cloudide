import React, { useRef } from 'react';
import type { FC } from 'react';
import ArrowIcon from './ArrowIcon';
import { cardsConfigs, DEMO_PROJECT, NEW_ENV, titleContent } from './config';
import ActiveHandler from '../../components/ActiveController/ActiveController';
import createComplexController from '../../components/ActiveController/ComplexController';
import Intro from '../../components/Intro/Intro';
import './background.png';
import './index.scss';

const getNewEnvPath = () => ''

const AboveFold: FC = () => {
  const handlerRef = useRef({
    setActive: (() => null) as React.Dispatch<React.SetStateAction<string>>,
  });
  const Cards = createComplexController(cardsConfigs, 'cards');

  type IClickType = 'demoProject' | 'newEnv';
  type IHandleClick = (type: IClickType) => void;
  const handleClick: IHandleClick = (type) => {
    if (type === 'demoProject') {
      handlerRef.current.setActive('Hertz');
      setTimeout(() => document.querySelector('.main-card-hertz')?.classList.add('border-action'));
    } else if (type === 'newEnv') {
      window.open(getNewEnvPath());
    }
  };

  return (
    <header className="above-fold">
      <div className="content">
        <Intro content={titleContent} className="intro" />
        <div className="buttons">
          <div className="main-button" onClick={() => handleClick('demoProject')}>
            <div className="text">{DEMO_PROJECT}</div>
            <ArrowIcon />
          </div>
          <div className="button" onClick={() => handleClick('newEnv')}>
            <div className="text">{NEW_ENV}</div>
          </div>
        </div>
        <ActiveHandler handlerRef={handlerRef} Controller={Cards} defaultValue="Hertz" />
      </div>
    </header>
  );
};

export default AboveFold;
