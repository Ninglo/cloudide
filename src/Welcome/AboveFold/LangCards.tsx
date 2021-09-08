import React, { FC } from 'react';
import LangIcon, { LangName } from '../LangIcon';
import Card from '../../components/Card/Card';

const openDemoEnv = (some: any) => null

export type ICard = Readonly<{
  className: string;
  framework: string;
  details: string[];
  langName: LangName;
  repoFrameWorkName?: string;
}>;

const LangCards: FC<{ active: boolean } & ICard> = ({
  active,
  className,
  framework,
  details,
  langName,
  repoFrameWorkName,
}) => {
  const lowerLangName = langName.toLowerCase();
  return (
    <Card
      className={`${className}${active ? '-active' : ''}`}
      title={framework}
      details={details}
      icon={<LangIcon active={active} name={langName} />}
      onClick={() =>
        openDemoEnv({
          branch: 'master',
          language: lowerLangName,
          repoId: `ide/demo-${lowerLangName}-${repoFrameWorkName ? repoFrameWorkName : framework}`,
          template: lowerLangName,
        })
      }
    />
  );
};

export default LangCards;
