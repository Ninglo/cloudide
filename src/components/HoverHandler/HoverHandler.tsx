
import React, { useCallback } from 'react';
import type { FC } from 'react';

interface IProps<P> {
  active: boolean;
  ActiveComponent: FC<{ active: boolean } & P>;
  onChange: (active: boolean) => void;
  childrenProps: P;
}
type IHoverHandler = <P>(props: IProps<P>) => JSX.Element;
const HoverHandler: IHoverHandler = ({ active, ActiveComponent, onChange, childrenProps }) => {
  const handleMouseEnter = useCallback(() => {
    onChange(true);
  }, [onChange]);
  const handleMouseLeave = useCallback(() => {
    onChange(false);
  }, [onChange]);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ActiveComponent active={active} {...childrenProps} />
    </div>
  );
};

export default HoverHandler;
