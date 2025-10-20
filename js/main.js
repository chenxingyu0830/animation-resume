let resume = `# 陈星宇
188-6808-5296 | chenxingyu0830@gmail.com | 杭州
GitHub: https://github.com/chenxingyu0830
Blog: <a href="https://fn97p1bxjw.feishu.cn/drive/folder/fldcnK3p3NEj9Ett5U88ZVSoVqh">个人飞书文档</a>
5年前端开发经验 | 浙大城市学院 电子信息工程

## 专业技能
- **React 及相关库开发经验**：近5年 React 及其相关库的开发经验，深入理解 Hooks、虚拟 DOM、Diff 算法等原理，具备复杂应用开发经验。
  - 熟练使用 Umi 和 Next.js 进行企业级应用开发，具备服务端渲染（SSR）实践经验。
  - 在企业项目中灵活运用 Redux、MobX 和 Zustand 等状态管理库，根据需求选择方案。
- **前端技术**：熟练使用 HTML5 / CSS3 / JavaScript，并常用 TypeScript 进行开发。
  - 熟悉 TailwindCSS 和 shadcn/ui 的 headless 样式方案，能够高效、精准地还原设计稿。
- **编码与设计**：具备良好的编码习惯，开发前注重方案设计，执行严格的代码评审，并且擅长组件化和模块化设计，具备出色的问题分析与解决能力。
- **构建工具链**：熟悉现代前端构建工具链（如 Webpack、Vite），并掌握资源管理、插件配置和缓存优化的使用技巧。
- **版本控制**：熟练使用 Git 命令进行代码协作，擅长处理代码冲突、提交管理和分支管理，确保团队协作的高效性。
- **AI工具应用**：善于使用 ChatGPT、Copilot、Cursor 等 AI 工具提升开发效率；在新项目中参与技术选型，积极推动团队规范和技术分享，并定期总结和优化工作流程。

## 工作经历

### 翼方健数（杭州分公司）
2023/02 - 2024/10
- 职位：资深前端工程师
1. **"揽睿知图"**（2024/09 - 2024/10）
  - 独立负责前端架构设计和开发工作，基于 Next.js 的 AIGC 项目，类似于 MidJourney，为 B 端设计师用户提供创作工具。
  - 实现 AI 对话和 AI 绘画功能，使用 shadcn/ui 二次封装复用组件库。
  - 项目难点在于处理 AI 对话的流式输出，以及允许设计师在生成图像上涂鸦蒙层，以便于后续的二次精修和处理。

2. **“揽睿星舟”**（2023/08 - 2024/10）
  - 主导开发基于 Umi v3 的云端 AIGC 平台，整合 AI 训练和推理计算资源，并负责 C 端用户和后台管理系统的前端架构设计与开发。
  - 项目后期因团队优化，独自承担所有前端开发和维护工作，涵盖微信登录、优惠券、支付模块以及算力资源监控等功能。
  - 遇到的技术难点在于深度定制 ComfyUI 源码，以支持单次绘图收费和 iframe 数据通信。

### 杭州獴哥健康科技有限公司
2022/02 - 2022/11
- 职位：高级前端工程师
1. **"天津一中心医院互联网服务" 微信公众号**（2022/06 - 2022/11）
   - 参与开发基于 React hooks 的互联网医院 C端项目，支持患者就医和看病的全流程。
   - 主要负责就诊人管理、医生排班、挂号缴费、问诊咨询、自费医保支付等模块的开发。
   - 项目难点在于移动端路由回退问题（如 A -> B -> C -> B，希望点击回退按钮后回退到 A），通过定制路由逻辑解决此问题。
2. **"獴哥健康"微信公众号 - 体检预约业务**（2022/02 - 2022/06）
   - 参与基于 React hooks 技术栈的体检套餐售卖 C端电商平台开发，并负责 B端后台管理系统的建设。
   - 前后端均采用 React + React Router + Umi + Ant Design / mobile 解决方案。
   - 项目难点在于体检套餐的复杂关系处理（如“互斥”“依赖”“合并”等），通过策略模式梳理代码逻辑，实现业务需求。
   - 在开发过程中，提出并使用 ahooks 库，提升了代码的可维护性与可读性，同时通过分享团队规范优化了开发流程，提升了团队效率。

### 杭州连帆科技有限公司
2019/06 - 2022/02
- 职位：前端工程师
1. **"智护+移动护理"**（2020/09 - 2022/02）
   - 参与开发基于 React hooks 技术栈的 PC & PDA 移动护理解决方案平台。
   - PC端需实现大数据场景下的性能问题与定制功能，重构 Antd 的 Table 组件支持回车切换功能。
2. **"分诊导医" 叫号 + 屏显页面 & 后台管理系统**（2020/06 - 2022/02）
   - 独立开发基于 React类组件 技术栈的分诊叫号和屏显系统。
   - 实现特色功能：如屏幕模拟键盘输入、标签打印，支持多种屏幕的自适应横竖屏配置。
   - 项目采用 Webpack 多页面打包方式，提高了代码维护效率，系统成功上线十余家医院，获得医院和医护人员的良好反馈。

## 个人作品

### “S1mple react” React-UI库
- 源码链接：https://github.com/chenxingyu0830/s1mple-react
- 预览链接：https://chenxingyu0830.github.io/s1mple-react
- 描述：个人独立开发的 React UI 组件库，使用 React Hooks + TypeScript 开发，并已发布到 npm 中。包括但不限于 webpack 打包、 npm 发布流程、 CircleCi 自动化持续集成。

### “疫情实况” 可视化大屏
- 源码链接：https://github.com/chenxingyu0830/big-screen-website
- 预览链接：https://chenxingyu0830.github.io/big-screen-website/dist/#
- 描述：该项目直观展示疫情数据，通过 React Hooks 管理状态，结合 SWR 实现高效数据请求与缓存。使用 Vite 提高构建速度，配合 Tailwind CSS 实现模块化样式管理。项目通过丁香园开放 API（https://lab.isaaclin.cn/nCoV/）和 百度地图 API 精准定位疫情数据。


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
    $('#paper').prepend(
        '<div id="information"></div>', 
        '<div id="skills"></div>', 
        '<div id="jobs"></div>', 
        '<div id="project"></div>'
    )
    $('#information').append($('h1'), $('p').first())
    $('#skills').append($('h2:contains("专业技能")'), $('ul').first())
    $('#jobs').append($('h2:contains("工作经历")'))
    $('h3:contains("公司")').each((index, element) => {
        $('<div class="experience"></div>').append(
            $(element), 
            $('#paper > p').first(), 
            $('#paper > ul').first(), 
            $('#paper > ol').first()
        ).appendTo($('#jobs'))
    })
    $('#project').append($('h2:contains("项目经历")'), $('#paper').children().not($('div')))
    $('#project h3').each((index, element) => {
        $('<div class="demo"></div>').append(
            $(element), 
            $('#project > p').first(), 
            $('#project > ul').first()
        ).appendTo($('#project'))
    })
    // Remove images from the project section
    $('#project .demo img').remove();
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









