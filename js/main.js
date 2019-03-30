let resume = `# 陈星宇
188-6808-5296 | chenxingyu0830@gmail.com | 杭州
GitHub: https://github.com/chenxingyu0830
Website: https://smallyu.top/resume/
Blog: https://smallyu.top/ 
19届毕业生 | 前端工程师 


## 专业技能
- Html5 , CSS3 & JavaScript
  - 能够使用原生JavaScript独立制作精美页面
  - 掌握HTML5语义化如  header、nav、main、article等结构标签
  - 掌握CSS3动画、过渡、弹性盒子布局flex方法、媒体查询等响应式常用技术
- 了解jQuery常用API，利用jQuery实现原生JS的操作内容，进行页面的交互设计、效果实现等。
- 了解HTTP协议，HTTP请求、响应。
- 熟悉Node.js，熟悉Npm & Git。
- 具有通过Google解决问题的能力，有自己的技术博客

## 工作经历
### 浙江浙大网新图灵信息科技有限公司
2018/12 - 2019/01
- 职位：前端实习生
- 主要技术：\`CSS\`、\`jQuery\`、\`Bootstrap\`
- 工作内容：负责网站内部后台框架添加修改模块

### 浙江浙大网新图灵信息科技有限公司2
2018/12 - 2019/01
- 职位：前端实习生
- 主要技术：\`CSS\`、\`jQuery\`、\`Bootstrap\`
- 工作内容：负责网站内部后台框架添加修改模块

## 项目经验
### 个人简历网站
- 关键词： HTML5、CSS3、JavaScript
- 源码链接：https://github.com/chenxingyu0830/resume
- 预览链接：https://smallyu.top/resume/index.html
- 描述：这是个人的简历网站，包含自我介绍和各种利用原生JavaScript实现loading界面，导航栏动画效果，滚动到指定位置， 高亮元素等实现的特效。

### 123导航网站
- 关键词： hash、JavaScript
- 源码链接：https://github.com/chenxingyu0830/myBookmarks
- 预览链接：https://smallyu.top/myBookmarks/
- 描述：可以通过设置网站快捷键，键盘按键跳转到记录的网站。

### 色彩涂鸦
- 关键词： html5、Canvas、ES6、JavaScript
- 源码链接：https://github.com/chenxingyu0830/canvas-dome
- 预览链接：https://smallyu.top/canvas-dome/
- 描述：使用HTML5的Canvas元素及其API，实现支持多指画图（可选色/粗细）、橡皮擦、一键清空、保存至本地功能。

## 教育经历
### 衢州学院
2014/09 - 2017/06
- 计算机应用技术 大专 电气与信息工程学院
- GPA：3.4 / 4.0（专业前10%）
- 荣誉/奖项：优秀团员（2015-2016）、“互联网+”大学生创新创业大赛金奖（2016）
- 二等奖学金（2015-2016）、三等奖学金（2016-2017）、优秀毕业生（2017） 

### 浙江大学城市学院
2017/09 - 2019/06
- 电子信息工程 本科 信息与电气工程学院
- GPA：3.62 / 5.00（专业前25%）
- 相关课程：工程数学（83），软件基础（86），数据库原理及上机（82），C++程序设计及上机（87），Python程序设计与 应用（95）,JAVA程序设计及上机（94）




`

let code_ready = `/*
* 面试官你好，我是陈星宇
* 只用文字来进行自我介绍实在是太单调了
* 我想用代码来展示我的个人简历
* 灵感来自:http://strml.net
*
* 那么会动的简历开始啦~
*/
/* 添加一个过渡效果，让网页显示的更加柔和 */
*{
  transition: all .3s;
}
body{
  background: #2f6184;
}
/* 给代码添加一个边框 */
#code_body {
  width: 100%;
  border: 1px solid #beccd6;
  background: #beccd6;
  margin: 16px;
  padding: 16px;
  overflow: auto;
}

/* 我需要一点代码高亮 */
.token.comment, .token.punctuation {
  color: #757575;
}
.token.selector {
  color: #007400;
}
.token.property {
  color: #cf1f1f;
}

/* 给正在编辑的代码一个"呼吸"的特效 */ 
.breathe {
  animation: breathe 3s ease 0s infinite;
}

/* 现在开始写简历了 */

/* 让代码框腾出一些的位置给我的简历框 */
#code_body{
  width: 32%;
}


#paper{
  flex: 1;
  background: #fdfdfd;
  margin: 16px;
  overflow: auto;
  white-space: pre-wrap;

}

/* 接下来，请看右边 */ 
`

let code_marked = `
/* 
 * 接下来我要使用一个优秀的库 marked.js
 * 来使我的简历变成一篇 Markdown
 * (https://github.com/markedjs/marked)
 */
`

let code_better_resume = `
/* 调整我的简历，让它变得再好看一点 */
#paper {
  white-space: unset;
  padding: 0 32px;
  font-size: 14px;
}
#paper #information p{
  text-align: center;
}
#paper #information p{
  line-height: 24px;
  white-space: pre-wrap;
}
#paper a {
  color: #455A64;
}
#paper ol,ul {
  padding-left: 20px;
}
/* 让每个模块上下间隔明显一点 */
#paper > div {
  margin: 28px 0;
}
#paper h1 {
  margin-top: 24px;
  text-align: center;
  font-size: 24px;
  padding-bottom: 10px;
}
#paper h2 {
  font-size: 16px;
  border-bottom: 1px solid #455A64;
  padding-bottom: 6px;
  margin-bottom: 6px;
}
#paper h3 {
  display: inline-block;
  font-size: 14px;
  margin: 6px 0;
}
#paper ul ul {
  margin: 4px 0;
}
#paper li{
  margin-bottom: 4px;
}
#code_body{
  width: 23%;
}

/*
* 以上就是我的个人简历
* 希望你能喜欢
* 未完待续 2019/3/11
*/
`

var codeInputTimeoutID, resumeInputTimeoutID

writeCode(code_ready, '').then(()=>{
  writeResume(resume).then(()=>{
    structuredResume()
    writeCode(code_marked, code_ready).then(()=>{
        writeCode(code_better_resume, code_ready + code_marked)
    })
  })
})


/*把code写到#code和style标签里 */
function writeCode(code, origin) {
  let n = 0
  return new Promise((resolve) => {
    $('#code_body').addClass('breathe')
    $('#paper').removeClass('breathe')
    codeInputTimeoutID  = setTimeout(write, 0)

    function write(){
      n += 1
      code_body.innerHTML = Prism.highlight(origin + code.substring(0,n), Prism.languages.css, 'css')
      styleTag.innerHTML = origin + code.substring(0, n)
      code_body.scrollTop = code_body.scrollHeight
      if (n === code.length) {
        resolve.call(undefined)
      } else {
        codeInputTimeoutID = setTimeout(write, 0)        
      }
    }
  })
}



function writeResume(resume){
  let n = 0
  return new Promise((resolve)=>{
    $('#code_body').removeClass('breathe')
    $('#paper').addClass('breathe')
    resumeInputTimeoutID = setTimeout(write,0)

    function write() {
      n += 1
      paper.innerHTML = resume.substring(0,n)
      paper.scrollTop = paper.scrollHeight
      if(n === resume.length){
        paper.scrollTop = 0
        return resolve(undefined)
      }else{
        resumeInputTimeoutID = setTimeout(write,0)
      }
    }

  })
}

function structuredResume(){
  $('#paper')[0].innerHTML = marked(resume)
  $('#paper').prepend('<div id="information"></div>', '<div id="skills"></div>', '<div id="jobs"></div>', '<div id="project"></div>', '<div id="education"></div>')
  $('#information').append($('h1'), $('p').first())
  $('#skills').append($('h2:contains("专业技能")'), $('ul').first())
  $('#education').append($('h2:contains("教育经历")'))
  $('<div class="school"></div>').append($('h3:contains("衢州学院")') ,$('#paper > p').eq(-2), $('#paper > ul').eq(-2)).appendTo($('#education'))
  $('<div class="school"></div>').append($('h3:contains("浙江大学城市学院")'), $('#paper > p').last(), $('#paper > ul').last()).appendTo($('#education'))
  $('#jobs').append($('h2:contains("工作经历")'))
  $('h3:contains("公司")').each((index,element) => {
    $('<div class="experience"></div>').append($(element), $('#paper > p').first(), $('#paper > ul').first()).appendTo($('#jobs'))
  })
  $('#project').append($('h2:contains("项目经历")'), $('#paper').children().not($('div')))
}












