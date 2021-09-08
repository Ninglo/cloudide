import type { FC } from 'react';
import React, { useImperativeHandle, useState } from 'react';

export type IValue = boolean | string | number;
export type IController<T = IValue> = FC<{ active: T; onChange: React.Dispatch<T> }>;
export type IResponser<T = IValue> = FC<{ active: T }>;
type IActiveHandlerProps<T> = {
  Controller: IController<T>;
  Responser?: IResponser<T>;
  defaultValue: T;
  handlerRef?: IActiveHandlerRef<T>;
};

export type IActiveHandlerRef<T> = React.ForwardedRef<{
  setActive: React.Dispatch<React.SetStateAction<T>>;
}>;
export type IActiveHandler = <T>(props: IActiveHandlerProps<T>) => JSX.Element;
const ActiveHandler: IActiveHandler = ({ Controller, Responser, defaultValue, handlerRef }) => {
  const [active, setActive] = useState(defaultValue);
  useImperativeHandle(handlerRef, () => ({
    setActive,
  }));

  return (
    <>
      <Controller active={active} onChange={setActive} />
      {Responser && <Responser active={active} />}
    </>
  );
};

export default ActiveHandler;
