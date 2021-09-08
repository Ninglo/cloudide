
import React, { useCallback } from 'react';
import type { FC } from 'react';

interface IProps<P> {
  active: boolean;
  ActiveComponent: FC<{ active: boolean } & P>;
  onChange: (active: boolean) => void;
  childrenProps: P;
}
type IClickHandler = <P>(props: IProps<P>) => JSX.Element;
const ClickHandler: IClickHandler = ({ active, ActiveComponent, onChange, childrenProps }) => {
  const handleClick = useCallback(() => {
    onChange(true);
  }, [onChange]);

  return (
    <div onClick={handleClick}>
      <ActiveComponent active={active} {...childrenProps} />
    </div>
  );
};

export default ClickHandler;
