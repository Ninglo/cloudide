
import React from 'react';
import type { FC } from 'react';

export type ITab = {
  displayName: string;
};
const Tab: FC<ITab & { active: boolean }> = ({ displayName, active }) => (
  <div className={`tab${active ? '-active' : ''}`}>{displayName}</div>
);

export default Tab;
