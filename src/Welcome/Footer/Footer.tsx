
import React from 'react';
import type { FC } from 'react';
import './index.scss';
import { HELP_DOC, USER_GROUP } from './config';

const LarkGroupContent = (
  <div className="lark-group-content">
    <div className="lark-icon-background">
    </div>
    <div className="text">{USER_GROUP}</div>
  </div>
);

const Footer: FC = () => {
  return (
    <footer className="cloudide-welcome-footer">
      <div className="footer-content">
        <div className="title">CloudIDE</div>
        <div className="links">
          <div
            className="link"
            onClick={() => window.open('https://bytedance.feishu.cn/wiki/wikcnwrZhz13Un6If0iTD7BsZAc')}>
            <div className="text">{HELP_DOC}</div>
          </div>
          {/* 组件的 icon style 不能修改，一时没有找到比较好的解决方案，通过 groupName 把内容强行塞进去，只用一下组件加群的功能，不用它的样式了。 */}
        </div>
        <div className="copyright">
          <div>Powered by Cloud IDE Team.</div>
          <div>©2020-2021 All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
