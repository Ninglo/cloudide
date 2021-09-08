
import React from 'react';
import type { FC } from 'react';

type ICard = Readonly<{
  className?: string;
  title: string;
  details?: string[];
  onClick?: () => void;
  icon?: JSX.Element;
}>;
const Card: FC<ICard> = ({ className, title, details, icon, onClick, children }) => {
  return (
    <div className={className} onClick={onClick}>
      <div className="head">
        {icon && <div className="icon">{icon}</div>}
        <div className="title">{title}</div>
      </div>
      {details?.map((detail, i) => (
        <div className="detail" key={i}>
          {detail}
        </div>
      ))}
      {children}
    </div>
  );
};

export default Card;
