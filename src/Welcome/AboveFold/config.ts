import LangCards, { ICard } from './LangCards';
import { IConfig } from '../../components/ActiveController/ComplexController';
import { i18n } from '../../i18n';

export const DEMO_PROJECT = i18n`体验示例工程`;

export const NEW_ENV = i18n`新建环境`;

export const titleContent = {
  title: i18n`开箱即用的云端开发环境`,
  details: [i18n`在云端环境中编写、构建、运行和调试你的代码，`, i18n`所测即所得，开发效率 UP UP  🚀`],
};

export const cardsConfigs: IConfig<string, ICard>[] = [
  {
    ActiveComponent: LangCards,
    childrenProps: {
      className: 'main-card-hertz card',
      framework: 'Hertz',
      details: [i18n`下一代 Golang 高性能 Web 框架。`],
      langName: 'Golang',
    },
    name: 'Hertz',
  },
  {
    ActiveComponent: LangCards,
    childrenProps: {
      className: 'card',
      framework: 'Kitex',
      details: [i18n`新一代 Golang 主力框架，基于 thrift 的 RPC 框架。`],
      langName: 'Golang',
    },
    name: 'Kitex',
  },
  {
    ActiveComponent: LangCards,
    childrenProps: {
      className: 'card',
      framework: 'Euler',
      details: [i18n`新一代基于 thrift 协议的 Python 微服务框架。`],
      langName: 'Python',
    },
    name: 'Euler',
  },
  {
    ActiveComponent: LangCards,
    childrenProps: {
      className: 'card',
      framework: 'BytedUnicorn',
      details: [i18n`基于 Gunicorn 的一层薄封装，并集成了 byted middleware。`],
      langName: 'Python',
    },
    name: 'BytedUnicorn',
  },
  {
    ActiveComponent: LangCards,
    childrenProps: {
      className: 'card',
      framework: 'HTTP',
      details: [i18n`使用基于 Spring 及公司基础设施的 Java HTTP 框架。`],
      langName: 'Java',
    },
    name: 'HTTP',
  },
  {
    ActiveComponent: LangCards,
    childrenProps: {
      className: 'card',
      framework: 'Thrift',
      details: [i18n`使用基于 Spring 及公司基础设施的 Java Thrift RPC 微服务框架。`],
      langName: 'Java',
    },
    name: 'Thrift',
  },
  {
    ActiveComponent: LangCards,
    childrenProps: {
      className: 'card',
      framework: 'React App',
      details: [i18n`使用 Create React App 创建一个单页 React 应用。`],
      langName: 'Nodejs',
      repoFrameWorkName: 'cra',
    },
    name: 'cra',
  },
  {
    ActiveComponent: LangCards,
    childrenProps: {
      className: 'card',
      framework: 'Archon',
      details: [i18n`Archon 是支持多种通信方式的 C++ 高性能框架。`],
      langName: 'Cpp',
    },
    name: 'Archon',
  },
];
