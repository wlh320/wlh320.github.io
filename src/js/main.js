// js
//import $ from 'jquery'
import CodeMirror from 'codemirror/lib/codemirror'
import marked from 'marked'
import malarkey from 'malarkey'

import 'codemirror/mode/markdown/markdown'

// css
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-dark.css'
import 'github-markdown-css/github-markdown.css'
import '../css/style.css'

// ok, begin

// content
var content = `
![avatar](https://tvax2.sinaimg.cn/crop.0.0.600.600.180/005NVR7Rly8fnyzlk0r1kj30go0goab3.jpg)

欢迎来到 zilcH40 的个人主页
===========================

Hi! 这里是 **zilcH40** 的个人主页

## About Me

目前是 CS Undergraduate && Newbie Developer

- {C\\ ,C++\\ ,Python\\ }Programmer
- 萌新 Gopher
- 会一丢丢前端 (比如攒一个像这样的页面 \\_(:з」∠)\\_ )
- Arch Linux user
- Vim fan

## Contact Me

你可以从下面这些地方找到我

- [GitHub](https://www.github.com/wlh320)
- [个人博客](https://blog.zilch40.wang)
- [Steam](https://steamcommunity.com/id/wlh233)
- [新浪微博](https://weibo.com/VV0H)
- [网易云音乐](https://music.163.com/#/playlist?id=52197676)
- [给我发email](mailto:zilch40.wang@gmail.com)

Copyright ©2018 zilcH40

[沪ICP不备 2333333号-2](http://www.miitbeian.gov.cn)

`

// CodeMirror editor
var editor = CodeMirror.fromTextArea(document.querySelector('#editor'), {
  mode: 'markdown',
  lineNumbers: true,
  lineWrapping: true,
  theme: "base16-dark",
});

// marked markdown render
var renderer = new marked.Renderer();

// override superlink
renderer.link = (href, title, text) => {
  return `<a href="${href}" target="_blank">${text}</a>`
}

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

function editorOnChange(cm, co) {
  document.querySelector('.markdown-body').innerHTML = marked(cm.getValue());
  cm.scrollTo(0, cm.getScrollInfo().height);
}

editor.on('change', editorOnChange);

// malarkey typing effect
var type_opts = {
  typeSpeed: 15,
  loop: false,
  getter: function(elem) {
    return editor.getValue();
  },
  setter: function(elem, val) {
    return editor.setValue(val);
  }
};

malarkey(editor, type_opts).type(content);

