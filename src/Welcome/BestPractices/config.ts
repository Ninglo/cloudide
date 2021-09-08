import Tab from './Tab';
import type { ITab } from './Tab';
import type { IConfig } from '../../components/ActiveController/ComplexController';
import { i18n } from '../../i18n';

export type LANG_NAME = 'cPlusPlus' | 'microService' | 'frontEnd' | 'FaaS' | 'onlineProgramming';

export const config = {
  title: i18n`最佳实践`,
  details: [''],
};

export const tabConfigs: IConfig<LANG_NAME, ITab>[] = [
  {
    ActiveComponent: Tab,
    childrenProps: { displayName: i18n`C++ 开发` },
    action: 'click' as const,
    name: 'cPlusPlus',
  },
  {
    ActiveComponent: Tab,
    childrenProps: { displayName: i18n`微服务联调` },
    action: 'click' as const,
    name: 'microService',
  },
  {
    ActiveComponent: Tab,
    childrenProps: { displayName: i18n`前端预览` },
    action: 'click' as const,
    name: 'frontEnd',
  },
  {
    ActiveComponent: Tab,
    childrenProps: { displayName: i18n`FaaS 函数开发` },
    action: 'click' as const,
    name: 'FaaS',
  },
  {
    ActiveComponent: Tab,
    childrenProps: { displayName: i18n`面试在线编程` },
    action: 'click' as const,
    name: 'onlineProgramming',
  },
];

export const cardConfigsMap = {
  cPlusPlus: [
    {
      title: i18n`开箱即用的开发环境`,
      details: [i18n`只需申请加入物理机，选择 C++ 模版，打开ide就可以进行开始开发、测试，避免复杂的 C++ 环境配置`],
    },
    {
      title: i18n`支持 Web 与 VScode remote 开发`,
      details: [i18n`可以使用 Web IDE 进行开发，也可以使用 VScode Remote 插件连接远端环境开发`],
    },
    {
      title: i18n`支持在 IDE 进行引流测试`,
      details: [i18n`内置 bytecopy 插件，支持直接在 IDE 中通过 bytecopy 插件发起引流，进行服务测试`],
    },
  ],
  microService: [
    {
      title: i18n`开箱即用的开发环境`,
      details: [i18n`选择要开发的仓库和语言，一键创建云端开发环境，支持 go/python/node/java/C++ 多种语言。`],
    },
    {
      title: i18n`支持在 IDE 中远程调试微服务`,
      details: [i18n`在 IDE 中运行服务，直接注册到 BOE 泳道进行调试，无需 Codebase-SCM-BOE feature 的发布流程`],
    },
    {
      title: i18n`支持断点调试微服务`,
      details: [i18n`在 IDE 中对服务设置断点进行调试，问题排查更高效。`],
    },
  ],
  frontEnd: [
    {
      title: i18n`所测即所得`,
      details: [i18n`通过转发 IDE 中服务端口，支持容器内的服务被外部访问，实时进行开发调试`],
    },
    {
      title: i18n`分享项目，协作更高效`,
      details: [i18n`在 Cloud IDE 中快速生成预览链接，分享给协作来展示项目，实时修改实时生效，协同更高效`],
    },
    {
      title: i18n`端口转发更灵活`,
      details: [i18n`支持 TCP、UDP 端口转发，支持随机和指定外部端口`],
    },
  ],
  FaaS: [
    {
      title: i18n`开箱即用的开发环境`,
      details: [i18n`选择要开发的函数，一键创建云端开发环境，支持 go/python/node/java/C++ 多种语言。`],
    },
    {
      title: i18n`在 IDE 中调试函数`,
      details: [i18n`专有 FaaS 插件，支持在 IDE 中构造请求进行函数测试，支持设置断点进行调试`],
    },
    {
      title: i18n`在 IDE 中一键发布函数`,
      details: [i18n`在 IDE 中完成函数开发测试后，可以直接选择部署区域进行发布，完成函数一站式开发`],
    },
  ],
  onlineProgramming: [
    {
      title: i18n`极致体验`,
      details: [i18n`语法高亮，代码补全，代码跳转等特性，像本地 IDE 一样自然。`],
    },
    {
      title: i18n`协同开发`,
      details: [i18n`候选人只需打开浏览器即可访问到开发环境进行开发，面试官也可同时在线 Review、标注代码`],
    },
    {
      title: i18n`语言全面`,
      details: [i18n`目前支持 8 种常用的语言，覆盖各种面试场景`],
    },
  ],
};

export const videoPathMap = {
  cPlusPlus: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  microService: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  frontEnd: 'https://sf16-va.tiktokcdn.com/obj/eden-va2/uhpuhpqbpq/landingPage/frontEnd.mp4',
  FaaS: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  onlineProgramming: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
};
