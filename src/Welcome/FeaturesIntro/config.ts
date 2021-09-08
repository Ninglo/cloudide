import { i18n } from '../../i18n';

export const introConfig = {
  title: i18n`发现云开发的特点`,
  details: [''],
};

export const cardConfigs = [
  {
    title: i18n`标准化的开发环境`,
    details: [
      i18n`预置常用语言环境，开箱即用；你也可以定制化 .bytediderc.json 配置文件中的环境模版，开发环境即代码，一份配置随处运行。`,
    ],
  },
  {
    title: i18n`丰富的云端计算资源`,
    details: [
      i18n`提供预置的 K8S 集群支持开发环境运行，完整保留你的代码；也支持你将云端开发环境直接托管在个人 Devbox 和物理机上。`,
    ],
  },
  {
    title: i18n`强大的开发测试能力`,
    details: [
      i18n`提供字节内部插件，将环境搭建、代码开发、代码测试、代码合入在 IDE 中进行集成和简化，提升 MR 合入前的开发效率与代码质量。`,
    ],
  },
  {
    title: i18n`便捷的预览调试方式`,
    details: [
      i18n`在 Cloud IDE 中通过端口转发生成预览链接，可以分享给别人来展示项目，还是将其作为调试接口，都极为方便。`,
    ],
  },
];
