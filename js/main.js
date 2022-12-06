let resume = `# 陈星宇
188-6808-5296 | chenxingyu0830@gmail.com | 杭州
GitHub: https://github.com/chenxingyu0830
Blog: <a href="https://fn97p1bxjw.feishu.cn/drive/folder/fldcnK3p3NEj9Ett5U88ZVSoVqh">个人飞书文档</a>
3年前端开发经验 | 本科


## 专业技能
- React
  - 掌握 React 及有相关库的开发经验，理解生命周期、组件通信、React Hooks、虚拟Dom 等相关概念。
  - 了解并使用 Redux、Mobx 等状态管理库，React Router 路由库。
- TypeScript
  - 有 TypeScript 工作开发经验，有一定自己理解。理解 接⼝、常⽤类型、枚举、泛型 等相关知识。
- Webpack
  - 掌握使用 Webpack 打包项目的经验，熟悉常用模块与相关配置，如 babel-loader 、 webpack-bundle-analyse 等。
- PC / 移动端 页面
  - 熟练使用 Ant Design / Ant Design Mobile UI库，有 Sass / Less 开发经验
  - 掌握 Flex / Grid 等布局方式，可以合理使用语义化H5标签及 善于使用 BEM 命名规范 或 驼峰法。
  - 会使用 REM、vw/vh、FastClick 等技术制作适配手机设备的页面。
- 可视化
  - 了解并熟练使用ECharts，AntV G2/BizCharts 等相关可视化库，个人作品与公司项目都有对应实践。
- 工具类
  - 了解 CI/CD 流程及内容，了解常用 CI 工具如 Jenkins，CircleCI。
  - 了解单元测试内容，个人项目使用过 Jest 库，能通过 CI 工具 test 项目相关代码，保证代码可维护性。
  - 熟悉 git flow 工作流模式，具有代码仓库协同⼯作的能⼒，Github / Gitlab 使用经验。
- 其他
  - 保持个人阶段性总结与复盘工作，乐于分享心得与向团队寻求工作上帮助。
  - 做事认真，善于拆分复杂任务需求，积极沟通协调，具有通过Google解决问题的能力。
  - 热爱开源，维护并分享技术博客与开源作品。

## 工作经历
### 杭州獴哥健康科技有限公司
2022/02 - 2022/11
- 职位：高级前端工程师
1. **"天津一中心医院互联网服务" 微信公众号**（2022/06 - 2020/11）
  - 协同开发基于 \`React\`技术栈的 \`互联网医院\`C端项目，涵盖患者就医看病沟通全流程。
  - 个人主要负责 就诊人管理、医生排班、挂号门诊缴费、问诊咨询、自费医保支付 等模块的开发工作。
  - 项目难点在于 移动端路由回退问题，例如 A页面 -> B页面 -> C页面 -> B页面，此时点击浏览器回退按钮，我们希望效果应该回退到 A页面，而不是 C页面。
  - 从零到一迭代产品直至上线，项目上线后，用户量逐渐增加，用户体验得到了很好的提升。
2. **"獴哥健康"微信公众号 - 体检预约业务**（2022/02 - 2022/06）
  - 协同开发基于 \`React\`技术栈的 \`体检套餐售卖\`C端电商平台，并负责对应B端后台管理系统开发建设。
  - 两端均采用\`React + React Router + Umi + Ant Design / mobile \`解决方案。
  - 项目难点在于 例如"体检套餐加项"功能需求，因为套餐内单个项目之间存在"互斥"、"依赖"、"被依赖"、"合并"、"父子"、"同组"复杂项目关系，需要梳理代码逻辑使用策略模式处理。
  - 在项目开发过程中，个人经过团队沟通引入ahooks库，增强代码维护性与可读性。
  - 期间对于优化开发流程，提出了个人分享的团队规范，提升了产研的效率。

### 杭州连帆科技有限公司
2019/06 - 2022/02
- 职位：前端工程师
1. **"智护+移动护理" PC/PDA**（2020/09 - 2022/02）
  - 协同开发基于 \`React\`技术栈的 \`移动护理解决方案\`平台，采用\`前后端分离\`架构。
  - 两端均采用\`React + React Router + Redux + Ant Design / mobile \`解决方案，网络请求二次封装fetch。
  - PC端难点在于 例如"体征批量录入"界面，医院护士希望能有 word文档 的使用体验，所以需要对 Antd 的 Table组件进行二次封装，包括支持类似回车键自动切换到下一体征项的功能需求。
  - 移动端难点在于 Antd mobile 的组件功能不是特别完善，需要自己二次封装类似 Modal 组件，实现 router 跳转的功能。
  - 同时在平时工作中，针对Webpack打包做过性能优化。并且在项目代码层面底层封装了许多基础类库，能够满足工作当中常用的场景，减少将近于30%的代码重复工作。
2. **"分诊导医" 叫号 + 屏相关页面 & 后台管理系统**（2020/06 - 2022/02）
  - 独立开发基于 \`React\`技术栈的 \`分诊叫号 + 各类医院屏\`平台，采用\`前后端分离\`架构。
  - PC端及移动端 采用\`React + React Router + Mobx + Ant Design \`的解决方案，网络请求二次封装了fetch。
  - 项目难点在于 数据的同步性，因为属于叫号系统，需要实时从后台获取最新数据，页面数据相对简单。为保证页面的性能采用 Mobx 状态管理，并且大量使用\`工厂模式\`，\`单例模式\`等设计模式。
  - 项目亮点：取号屏/报到屏 点击模拟键盘输入，打印取号/报到标签；诊区屏/诊间屏/流水屏 自定义配置满足医院个性化需求 & 采用\`vw/vh\` \`rem\`等方式自适应横竖屏。
  - 因为系统页面及功能打包体积较小，经过公司内部讨论采用 \`Webpack 多页面打包\`的实践方式，保证两个路由下的单页面开发，方便代码维护。
  - 历时一年多时间，系统成功上线十几家医院，获得医院口碑及医生护士满意度。

## 个人作品
### “S1mple react” React-UI库
![“S1mple react” React-UI库](./images/make-whells.jpg)
- 关键词： \`UI 组件库\`、\`React Hooks\`、\`React Router\`、\`TypeScript\`、\`npm\`、\`Webpack\`、\`Jest\`、\`CircleCi\`
- 源码链接：https://github.com/chenxingyu0830/s1mple-react
- 预览链接：https://smallyu.cc/s1mple-react
- 描述：个人独立开发的 React UI 组件库，使用 React Hooks + TypeScript 开发，并已发布到 npm 中。包括但不限于 webpack 打包、 npm 发布流程、Jest 进行单元测试、 CircleCi 自动化持续集成。

### “疫情实况” 可视化大屏
![“疫情实况” 可视化大屏](./images/big-screen-website.jpg)
- 关键词：\`React Hooks\`、\`React Router\`、\`TypeScript\`、\`SWR\`、\`Vite\`、\`Tailwind\`、\`ECharts\`、\`Grid\`
- 源码链接：https://github.com/chenxingyu0830/big-screen-website
- 预览链接：https://smallyu.cc/big-screen-website/dist/.
- 描述：这个项目采用 hooks + vite 的形式，结合时下流行的SWR作为请求状态管理库，尝试用原子化css写法引入TailwindCSS。考虑到页面复杂度不高，没有引入全局的状态管理库，用hooks维护状态。并使用丁香园的开放数据 https://lab.isaaclin.cn/nCoV/ ， TypeScript规定接口规范。

### “share blod”多人共享博客平台
![“share blod”多人共享博客平台](./images/blog-project.jpg)
- 关键词： \`Vue.js\`、\`Vue-cli\`、\`Vue Router\`、\`Vuex\`、\`Grid布局\`、\`媒体查询\`、\`Scss\`、\`ES6\`、\`Axios\`、\`Webpack\`
- 源码链接：https://github.com/chenxingyu0830/vue-blog-client
- 预览链接：https://smallyu.cc/vue-blog-client/dist/.
- 描述：这个项目是基于Vue全家桶实现的多人共享博客平台。功能有用户登录/注册，博客的创建/编辑/删除等功能。\`通过Vue Router实现路由的跳转、异步加载、权限验证等，通过vuex实现状态管理，用Axios获取数据\`，并对接口进行了封装。

### 在线简历生成器
![在线简历生成器](./images/resume-project.jpg)
- 关键词： \`jQuery\`、\`CSS3\`、\`Flex布局\`、\`变速\`、\`跳过动画\`、\`Promise\`
- 源码链接：https://github.com/chenxingyu0830/animation-resume
- 预览链接：https://smallyu.cc/animation-resume/
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
  top: 12px;
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

.experience {
  margin-bottom: 16px;
}

#paper ul {
  margin: 2px 0;
}
#paper li{
  margin-bottom: 4px;
}
#project .demo{
  position: relative;
  margin: 10px 0 10px 0;
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









