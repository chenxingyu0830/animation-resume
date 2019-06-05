let resume = `# 陈星宇
188-6808-5296 | chenxingyu0830@gmail.com | 杭州
GitHub: https://github.com/chenxingyu0830
Website: https://smallyu.top/resume/
Blog: https://smallyu.top/ 
19届毕业生 | 前端工程师 


## 专业技能
- Vue
  - 有 Vue 个人开发项目经验，阅读过官方文档，熟悉 Vue 常用功能，如Vue的各个生命周期、组件之间如何通信、双向绑定等。了解并使用过 Vue-Cli , Vue-Router , Vuex。
- Webpack
  - 掌握使用 Webpack 打包项目的经验，了解其管理资源的方法，如 css-loader 、 babel-loader 等。
- jQuery
  - 了解jQuery常用API，利用jQuery实现原生JS的操作内容，进行页面的交互设计、效果实现等。
- HTML5 , CSS3 & JavaScript
  - 能狗独立制作精美网页，掌握 CSS3 动画、过渡效果、响应式等常用技术。
- 移动端页面
  - 会使用 REM、vw/vh、FastClick 等技术制作适配手机设备的页面。
- 前端框架
  - 理解 MVC、MVVM 等思想，可以熟练使用Vue。
- 其他
  - 了解Node.js（使用过基于Node.js的框架Express），能简单实现路由功能。
  - 了解HTTP协议，了解常见的 Web 性能优化方案。
  - 具有通过Google解决问题的能力，有自己的技术博客。

## 工作经历
### 浙江浙大网新图灵信息科技有限公司
2018/10 - 2019/02
- 职位：前端实习生
- 主要技术：\`HTML\`、\`CSS\`、\`jQuery\`、\`Bootstrap\`、\`JSONP\`
- 工作内容：主要负责公司内部后台网站的维护工作，并且通过jQuery和Bootstrap来实现添加新功能模块的添加修改和模块样式的修改。在这几个月的实习期间，收获了对jQuery的了解与使用。同时也实现了后台模块的几个小功能。

## 项目经验
### “Let's share”多人共享博客平台
![“Let's share”多人共享博客平台](./images/blog-project.jpg)
- 关键词： \`Vue.js\`、\`Vue-cli\`、\`Vue Router\`、\`Vuex\`、\`Scss\`、\`ES6\`、\`Axios\`、\`Webpack\`
- 源码链接：https://github.com/chenxingyu0830/vue-blog-client
- 预览链接：https://smallyu.top/vue-blog-client/dist/.
- 描述：这个项目是基于Vue全家桶实现的多人共享博客平台。功能有用户登录/注册，博客的创建/编辑/删除等功能。\`通过Vue Router实现路由的跳转、异步加载、权限验证等，通过vuex实现状态管理，用Axios获取数据\`，并对接口进行了封装。

### 仿“CNode社区”网站
![仿“CNode社区”网站](./images/cnode-project.jpg)
- 关键词： \`Vue.js\`、\`Vue-cli\`、\`Vue Router\`、\`Scss\`、\`ES6\`、\`Axios\`、\`Webpack\`
- 源码链接: https://github.com/chenxingyu0830/cnode
- 预览链接: https://smallyu.top/cnode/dist/
- 描述: 这个项目是基于Vue-cli脚手架工具，仿照CNode社区实现的。CNode社区官网提供了后端数据的接口。功能包括查看\`首页的博客，点击查看博客详情，用户信息，实现简单的分页组件\`。

### 仿华为音乐项目
![仿华为音乐项目](./images/music-project.jpg)
- 关键词： \`原生JS\`、\`CSS3\`、\`Scss\`、\`ES6\`、\`手势库\`
- 源码链接：https://github.com/chenxingyu0830/huawei-music
- 预览链接: https://smallyu.top/huawei-music/dist/
- 描述：这个项目是仿照华为音乐制作的项目，包括\`暂停播放、上一曲、下一曲、滑屏显示歌词\`等功能。其中滑屏显示歌曲是通过封装的手势库里的函数实现的。

### 给你一只皮卡丘
![给你一只皮卡丘](./images/pikachu-project.jpg)
- 关键词： \`纯CSS实现卡通形象\`、\`Promise\`、\`变速\`、\`Markdown\`、\`响应式布局\`、\`适配移动端\`
- 源码链接：https://github.com/chenxingyu0830/make-a-pikachu
- 预览链接：https://smallyu.top/make-a-pikachu/
- 描述：这个项目是通过\`原生JS\`实现的，以动画的效果展示如果从无到有通过\`CSS实现\`皮卡丘的卡通形象。另外还添加了变速/结束动画功能。


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
- GPA：3.91 / 5.00（专业前15%）
- 相关课程：工程数学(83)， 软件基础(86)， 数据库原理及上机(82)， C++程序设计及上机(87)， Python程序设计与应用(95)， JAVA程序设计及上机(94)



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
#options {
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
  padding: 0 45px;
  font-size: 14px;
}
#paper ol,ul {
  padding-left: 20px;
}
#paper a {
  color: #455A64;
}

/* 让每个模块上下间隔明显一点 */
#paper > div {
  margin: 20px 0;
}
#paper #information {
  margin: 5px 0 20px 0;
}

/* 接下来是更加精细的调整 */

/* 首先是个人信息模块 */
#paper #information h1 {
  text-align: center;
  font-size: 24px;
  padding-bottom: 10px;
}
#paper #information p{
  line-height: 24px;
  white-space: pre-line;
}
#paper #information p{
  text-align: center;
}

/* 调整一下"工作经历"和"教育经历"中时间线的位置 */
#jobs .experience, #education .school{
  position: relative;
}
#jobs .experience > p, #education .school > p{
  top: 9px;
  right: 0;
  position: absolute;
}

/* 接着是子标题的样式 */

#paper h2 {
  padding-bottom: 6px;
  margin-bottom: 6px;
  border-bottom: 1px solid #455A64;
  font-size: 16px;
}
#paper #project h3 {
  display: inline-block;
  font-size: 14px;
}

#project li, .experience li{
  line-height: 1.5;
}

#paper ul {
  margin: 4px 0;
}
#paper li{
  margin-bottom: 4px;
}
#project .demo{
  position: relative;
  margin: 10px 0 50px 0;
}
#project .demo ul{
  width: 65%;
}
#project .demo li:nth-child(1){
  line-height: 2;
}
#project .demo img{
  width: 240px;
  height: 180px;
  position: absolute;
  top: 10px;
  right: 0;
}

`


let code_photo = `
/* 然后添加一下个人头像 */
#information{
  position: relative;
}
#information .avatar{
  position: absolute;
  right: 0px;
  top: -10px;
  width: 100px;
} 

/* 让代码框缩小一些，以便更好的展示简历 */
#options{
  width: 27%;
}
a.downloadResume{
  opacity: 1;
  display: inline-block;
}

/*
* 以上就是我的个人简历
* 希望你能喜欢
*/
`

var codeInputTimeoutID, resumeInputTimeoutID
writeCode(code_ready, '').then(()=>{
  $('#skip_btn').children().show()
  $('#skip_btn').click(()=>{ showFinalResult() })
  writeResume(resume).then(()=>{
    structuredResume()
    writeCode(code_marked, code_ready).then(()=>{
        writeCode(code_better_resume, code_ready + code_marked).then(()=>{
          addAvatar()
          $('#speed_btn').hide()
          $('#skip_btn').hide()
          $('#code_body').removeClass('breathe')
          $('#paper').addClass('breathe')
        })
    })
  })
})

var speedCode = 1, duration = 60
$('#speed_btn').click(() => {
  speedCode += 1
  if (speedCode > 3) {
    speedCode = 1
  }
  switch (speedCode) {
    case 1:
      speed_status.innerText = '🚴'
      speed_description.innerText = '速度可以加快一点'
      duration = 60
      break
    case 2:
      speed_status.innerText = '🚘'
      speed_description.innerText = '我要最快速度'
      duration = 30
      break
    case 3:
      speed_status.innerText = '🚀'
      speed_description.innerText = '慢一点'
      duration = 0
      break
    default:
      return 0
  }
})



function writeCode(code, origin) {
  let n = 0
  return new Promise((resolve) => {
    $('#code_body').addClass('breathe')
    $('#paper').removeClass('breathe')
    codeInputTimeoutID  = setTimeout(write, duration)

    function write(){
      n += 1
      code_body.innerHTML = Prism.highlight(origin + code.substring(0,n), Prism.languages.css, 'css')
      code_style.innerHTML = origin + code.substring(0, n)
      code_body.scrollTop = code_body.scrollHeight
      if (n === code.length) {
        resolve.call(undefined)
      } else {
        codeInputTimeoutID = setTimeout(write, duration)        
      }
    }
  })
}


function writeResume(resume){
  let n = 0
  return new Promise((resolve)=>{
    $('#code_body').removeClass('breathe')
    $('#paper').addClass('breathe')
    resumeInputTimeoutID = setTimeout(write,duration)

    function write() {
      n += 1
      paper.innerHTML = resume.substring(0,n)
      paper.scrollTop = paper.scrollHeight
      if(n === resume.length){
        paper.scrollTop = 0
        return resolve(undefined)
      }else{
        resumeInputTimeoutID = setTimeout(write,duration)
      }
    }

  })
}


function addAvatar(){
  return new Promise((resolve)=>{
    $('#paper > #information').append($('img.avatar'))
    writeCode(code_photo, code_ready + code_marked + code_better_resume)
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
  $('#project h3').each((index,element) => {
    $('<div class="demo"></div>').append($(element), $('#project > p').first(), $('#project > ul').first()).appendTo($('#project'))
  })
}


function showFinalResult() {
  $('#paper').addClass('breathe')
  $('#code_body').removeClass('breathe')
  window.clearTimeout(codeInputTimeoutID)
  window.clearTimeout(resumeInputTimeoutID)
  paper.innerHTML = resume
  paper.scrollTop = 0
  structuredResume()
  $('#paper > #information').append($('img.avatar'))
  code_body.innerHTML = Prism.highlight(code_ready + code_marked + code_better_resume + code_photo, Prism.languages.css, 'css')
  code_style.innerHTML = code_ready + code_marked + code_better_resume + code_photo
  code_body.scrollTop = code_body.scrollHeight
  $('#speed_btn').hide()
  $('#skip_btn').hide()
}









