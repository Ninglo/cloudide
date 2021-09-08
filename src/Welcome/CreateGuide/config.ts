import type { IStepCard } from './StepCard';
import StepCard from './StepCard';
import type { IConfig } from '../../components/ActiveController/ComplexController';
import { i18n } from '../../i18n';

export const content = {
  title: i18n`三步搭建开发环境`,
  details: [''],
};

export const stepCardConfigs: IConfig<string, IStepCard>[] = [
  {
    ActiveComponent: StepCard,
    childrenProps: { index: 0, className: 'create-guide-step-card' },
    name: 'stepOne',
  },
  {
    ActiveComponent: StepCard,
    childrenProps: { index: 1, className: 'create-guide-step-card' },
    name: 'stepTwo',
  },
  {
    ActiveComponent: StepCard,
    childrenProps: { index: 2, className: 'create-guide-step-card' },
    name: 'stepThree',
  },
];

export const CREATE_ENV = i18n`创建环境`;

export const introConfigs = [
  {
    title: i18n`选择要开发的仓库`,
    details: [i18n`选择要开发 codebase 仓库和分支，创建环境后会自动拉取分支代码`],
  },
  {
    title: i18n`选择模版开发环境`,
    details: [i18n`支持 go/node/python/java/c++ 语言类型，提供丰富标准的环境模版，环境开箱即用`],
  },
  {
    title: i18n`使用 Web 或本地 VScode 开发`,
    details: [i18n`直接使用 Web IDE 开发，也支持使用 VScode 连接远端；更有功能强大的字节内部插件，提升开发和测试效率`],
  },
];
