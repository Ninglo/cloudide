import React from 'react';
import type { FC } from 'react';

interface IContent {
  readonly title: string;
  readonly details?: readonly string[];
}
interface IIntro {
  content: IContent;
  className: string;
}
const Intro: FC<IIntro> = ({ content, className }) => {
  const { title, details } = content;
  return (
    <div className={className}>
      <div className="title">{title}</div>
      {details?.map((detail, i) => (
        <div className="detail" key={i}>
          {detail}
        </div>
      ))}
    </div>
  );
};

export default Intro;
