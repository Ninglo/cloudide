
import React, { FC } from 'react';
import HoverHandler from '../HoverHandler/HoverHandler';
import type { IController, IValue } from './ActiveController';
import ClickHandler from '../../components/HoverHandler/ClickHandler';

export type IConfig<T extends IValue, P> = {
  ActiveComponent: FC<P & { active: boolean }>;
  name: T;
  childrenProps: P;
  action?: 'hover' | 'click';
};
type GetInnerType<S> = S extends IConfig<infer T, infer P>[] ? [T, P] : never;
type ICreateComplexController = <T extends Exclude<IValue, boolean>, P>(
  configs: IConfig<T, P>[],
  className?: string,
) => IController<T>;

const ComponentMap = {
  hover: HoverHandler,
  click: ClickHandler,
} as const;

const createComplexController: ICreateComplexController = (configs, className) => {
  type T = GetInnerType<typeof configs>[0];
  const ComplexController: IController<T> = ({ active, onChange }) => {
    return (
      <div className={className}>
        {configs.map(({ ActiveComponent, name, childrenProps, action = 'hover' }) => {
          const Component = ComponentMap[action];
          return (
            <Component
              ActiveComponent={ActiveComponent}
              key={name}
              active={active === name}
              onChange={(value) => value && onChange(name)}
              childrenProps={childrenProps}
            />
          );
        })}
      </div>
    );
  };
  return ComplexController;
};

export default createComplexController;
