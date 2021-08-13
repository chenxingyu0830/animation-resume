let resume = `# 陈星宇
188-6808-5296 | chenxingyu0830@gmail.com | 杭州
GitHub: https://github.com/chenxingyu0830
Blog: https://smallyu.top/ 
2年前端开发经验 | 本科


## 专业技能
- React
  - 熟悉 React 及有相关库的开发经验，理解生命周期、组件通信、React Hooks、虚拟Dom 等相关概念。
  - 使用或了解 Redux、Mobx、DvaJS、SWR 等状态管理库，React Router 路由库。
- Vue
  - 有 Vue 个人开发项目经验，掌握组件及组件间数据传递的使⽤、响应式原理、路由等。
- TypeScript
  - 有 TypeScript 工作开发经验，有一定自己理解。理解 接⼝、常⽤类型、可选链、枚举、泛型 等相关知识。
- Webpack
  - 掌握使用 Webpack 打包项目的经验，了解其管理资源的方法，如 css-loader 、 babel-loader 等。
- PC / 移动端 页面
  - 熟练使用 Ant Design / Ant Design Mobile UI库，有 Sass / Less 开发经验
  - 掌握 Flex / Grid 等布局方式，可以合理使用语义化H5标签及 善于使用 BEM 命名规范 或 驼峰法。
  - 会使用 REM、vw/vh、FastClick 等技术制作适配手机设备的页面。
  - 能狗独立制作精美网页，掌握 CSS3 动画、过渡效果、响应式等常用技术。
- 可视化
  - 了解并使用echarts，AntV G2/BizCharts 等相关可视化库。
- CI/CD & 单元测试
  - 了解 CI/CD 流程及内容，了解常用 CI 工具如 Jenkins，CircleCI。
  - 了解单元测试内容，个人项目使用过 Jest 库，能通过 CI 工具 test 项目相关代码，保证代码可维护性。
- Git
  - 熟悉 git flow 工作流模式，具有代码仓库协同⼯作的能⼒，Github / Gitlab 使用经验。
- 其他
  - 了解Node.js（使用过 Express/Koa, 做过 hollo world demo），能简单实现路由功能。
  - 具有通过Google解决问题的能力，有自己的技术博客。

## 工作经历
### 杭州连帆科技有限公司
2019/06 - 至今
- 职位：前端工程师
1. **"智护+移动护理" PC/PDA**（2020/09 - 至今）
  - 协同开发基于 \`React\`技术栈的 \`移动护理解决方案\`平台，采用\`前后端分离\`架构。
  - PC端及移动端 采用\`React + React Router + Redux + Ant Design / mobile \`的解决方案，网络请求二次封装了feach。
  - PC端难点在于 例如"体征批量录入"界面，医院护士希望能有 word文档 的使用体验，所以需要对 Antd 的 Table组件进行二次封装，包括支持类似回车键自动切换到下一体征项的功能需求。
  - 移动端难点在于 Antd mobile 的组件功能不是特别完善，需要自己二次封装类似 Modal 组件，实现 router 跳转的功能。
  - 同时在项目代码层面底层封装了许多基础类库，能够满足工作当中常用的场景，减少将近于30%的代码重复工作。
  - 为提升开发效率，两端均使用\`GitLab CI/CD\`进行持续集成和持续部署，实现了构建部署自动化。
2. **"分诊导医" 叫号 + 屏相关页面 & 后台管理系统**（2020/06 - 至今）
  - 独立开发基于 \`React\`技术栈的 \`分诊叫号 + 各类医院屏\`平台，采用\`前后端分离\`架构。
  - PC端及移动端 采用\`React + React Router + Mobx + Ant Design \`的解决方案，网络请求二次封装了feach。
  - 项目难点在于 数据的同步性，因为属于叫号系统，需要实时从后台获取最新数据，页面数据相对简单。为保证页面的性能采用 Mobx 状态管理，并且大量使用\`工厂模式\`，\`单例模式\`等设计模式。
  - 项目亮点：取号屏/报到屏 点击模拟键盘输入，打印取号/报到标签；诊区屏/诊间屏/流水屏 自定义配置满足医院个性化需求 & 采用\`vw/vh\` \`rem\`等方式自适应横竖屏。
  - 因为系统页面及功能打包体积较小，经过公司内部讨论采用 \`Webpack 多页面打包\`的实践方式，保证两个路由下的单页面开发，方便代码维护。
  - 历时一年多时间，系统成功上线十几家医院，获得医院口碑及医生护士满意度。
  - 为提升开发效率，使用\`GitLab CI/CD\`进行持续集成和持续部署，实现了构建部署自动化。
3. **"护理管理信息系统" PC端**（2019/06 - 2020/06）
  - 协同开发基于 \`React\`技术栈的 \`移动护理解决方案\`平台，采用\`前后端分离\`架构。
  - 负责排班模块，人员管理，考试培训 等模块的开发工作。
  - 项目难点在于 服务几百家医院，项目体量较大。许多功能模块开发时需要考虑多种场景，需要不断沟通及需求变更。并且属于2014年的项目，当时采用\`ExtJS\`的项目开发，导致后续页面重构工作难度较大，同时还要自学 ExtJS 及 善于总结和网上查找相关知识点。
  - 为提升开发效率，使用\`GitLab CI/CD\`进行持续集成和持续部署，实现了构建部署自动化。

## 项目经验
### “S1mple react” React-UI库
![“S1mple react” React-UI库](./images/blog-project.jpg)
- 关键词： \`UI 组件库\`、\`React Hooks\`、\`React Router\`、\`TypeScript\`、\`npm\`、\`Webpack\`、\`Jest\`、\`CircleCi\`
- 源码链接：https://github.com/chenxingyu0830/vue-blog-client
- 预览链接：https://smallyu.top/vue-blog-client/dist/.
- 描述：个人独立开发的 React UI 组件库，使用 React Hooks + TypeScript 开发，并已发布到 npm 中。由此掌握了 webpack 打包、 npm 发布流程、 CircleCi 自动化持续集成等。

### “share blod”多人共享博客平台
![“share blod”多人共享博客平台](./images/blog-project.jpg)
- 关键词： \`Vue.js\`、\`Vue-cli\`、\`Vue Router\`、\`Vuex\`、\`Grid布局\`、\`Scss\`、\`ES6\`、\`Axios\`、\`Webpack\`
- 源码链接：https://github.com/chenxingyu0830/vue-blog-client
- 预览链接：https://smallyu.top/vue-blog-client/dist/.
- 描述：这个项目是基于Vue全家桶实现的多人共享博客平台。功能有用户登录/注册，博客的创建/编辑/删除等功能。\`通过Vue Router实现路由的跳转、异步加载、权限验证等，通过vuex实现状态管理，用Axios获取数据\`，并对接口进行了封装。

### 在线简历生成器
![在线简历生成器](./images/resume-project.jpg)
- 关键词： \`jQuery\`、\`CSS3\`、\`Flex布局\`、\`变速\`、\`跳过动画\`、\`Promise\`
- 源码链接：https://github.com/chenxingyu0830/animation-resume
- 预览链接：https://smallyu.top/animation-resume/
- 描述：这个项目动态的展示了一个 Markdown 简历的制作过程，通过Flex布局实现页面布局，jQuery实现简历模块化。另外还添加了 \`变速/跳过动画\` 功能。


## 教育经历
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


writeCode(code_ready, '').then(() => {
  writeResume(resume).then(() => {
    structuredResume()
    writeCode(code_marked, code_ready).then(() => {
      writeCode(code_better_resume, code_ready + code_marked).then(() => {
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
    codeInputTimeoutID = setTimeout(write, duration)

    $('#skip_btn').children().show()
    $('#skip_btn').click(() => {showFinalResult()})

    function write() {
      n += 1
      code_body.innerHTML = Prism.highlight(origin + code.substring(0, n), Prism.languages.css, 'css')
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


function writeResume(resume) {
  let n = 0
  return new Promise((resolve) => {
    $('#code_body').removeClass('breathe')
    $('#paper').addClass('breathe')
    resumeInputTimeoutID = setTimeout(write, duration)

    function write() {
      n += 1
      paper.innerHTML = resume.substring(0, n)
      paper.scrollTop = paper.scrollHeight
      if (n === resume.length) {
        paper.scrollTop = 0
        return resolve(undefined)
      } else {
        resumeInputTimeoutID = setTimeout(write, duration)
      }
    }

  })
}


function addAvatar() {
  return new Promise((resolve) => {
    $('#paper > #information').append($('img.avatar'))
    writeCode(code_photo, code_ready + code_marked + code_better_resume)
  })
}


function structuredResume() {
  $('#paper')[0].innerHTML = marked(resume)
  $('#paper').prepend('<div id="information"></div>', '<div id="skills"></div>', '<div id="jobs"></div>', '<div id="project"></div>', '<div id="education"></div>')
  $('#information').append($('h1'), $('p').first())
  $('#skills').append($('h2:contains("专业技能")'), $('ul').first())
  $('#education').append($('h2:contains("教育经历")'))
  $('<div class="school"></div>').append($('h3:contains("浙江大学城市学院")'), $('#paper > p').last(), $('#paper > ul').last()).appendTo($('#education'))
  $('#jobs').append($('h2:contains("工作经历")'))
  $('h3:contains("公司")').each((index, element) => {
    $('<div class="experience"></div>').append($(element), $('#paper > p').first(), $('#paper > ul').first(), $('#paper > ol').first()).appendTo($('#jobs'))
  })
  $('#project').append($('h2:contains("项目经历")'), $('#paper').children().not($('div')))
  $('#project h3').each((index, element) => {
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









