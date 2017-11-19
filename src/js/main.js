// js
import $ from 'jquery'
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
![avatar](https://tvax2.sinaimg.cn/crop.0.0.664.664.180/005NVR7Rly8fkiq65xr5ij30ig0igjrq.jpg)

欢迎来到 zilcH40 的个人主页
===========================

Hi! 这里是 **zilcH40** 的个人主页

## About Me

目前是 CS Undergraduate && Newbie Developer

- Arch Linux user
- Vim fan
- {C\\ , C++\\ , Python\\ }Programmer
- 萌新 Gopher
- 会一丢丢前端 (比如攒一个像这样的页面 \\_(:з」∠)\\_ )

## Contact Me

你可以从下面这些地方找到我

- [GitHub](https://www.github.com/wlh320)
- [博客园](https://www.cnblogs.com/VV0H)
- [Steam](http://steamcommunity.com/id/wlh233)
- [新浪微博](https://weibo.com/VV0H)
- [网易云音乐](http://music.163.com/#/playlist?id=52197676)
- [给我发email](mailto:zilch40.wang@gmail.com)

ok, 有了上面的链接, 你就可以轻而易举地人肉我了 XD

### Please give me some suggestions!

Copyright ©2017 zilcH40

`

// CodeMirror editor
var editor = CodeMirror.fromTextArea($('#editor').get(0), {
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
  $('.markdown-body').html(marked(cm.getValue()));
  $('.preview-wrap').scrollTop($('.preview-wrap')[0].scrollHeight);
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
