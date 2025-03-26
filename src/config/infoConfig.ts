export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = '徐泽'
export const headline = '前端开发工程师'
export const introduction = '我是一名前端开发工程师，精通Vue2/3、React等现代前端框架及相关生态工具。擅长前端工程化、性能优化和组件化开发，有全栈开发经验。'
export const email = '569552263@qq.com'
export const githubUsername = 'xz333221'

// about page
export const aboutMeHeadline = '资深前端工程师 | 全栈开发专家'
export const aboutParagraphs = [
  "我是一名前端开发工程师，专注于构建高性能、可扩展的Web应用。在技术栈方面，我精通Vue2/3、React等主流前端框架及其生态系统，对前端工程化工具（Webpack、Vite）有深入理解，能够针对不同场景优化构建流程和打包效率。",
  "在企业级项目中，我主导开发了中国农业银行DHR后台管理系统，设计实现了高性能的数据驾驶舱模块和可配置表单系统；在未来电视平台负责开发CMS系统和大屏应用，实现了多种数据可视化功能和跨页面交互机制；在金融领域开发过专业级交易平台，基于WebSocket实现了实时数据推送系统。",
  "我的全栈开发能力使我能够独立构建完整应用——后端熟悉Node.js（Express、Koa2、Egg.js）和MySQL数据库，能设计并实现RESTful API；同时我热衷于开源，维护个人技术站点和多个开源工具库，持续探索前端新技术。",
  "我注重代码质量和性能优化，在项目中实践过代码分割、懒加载、SSR等优化技术，显著提升用户体验。我相信优秀的技术源于持续学习和实践，期待在新的挑战中发挥价值。"
]

// blog
export const blogHeadLine = "我正在思考的内容"
export const blogIntro = "这些是我关于编程、技术和生活的思考与记录。"

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  // {
  //   name: 'Bilibili',
  //   icon: 'bilibili',
  //   href: 'https://flowdash.cn/',
  // },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/xz333221',
  },
]

// https://simpleicons.org/
// export const techIcons = [
//   'typescript',
//   'javascript',
//   'supabase',
//   'cloudflare',
//   'java',
//   'oracle',
//   'mysql',
//   'react',
//   'nodedotjs',
//   'nextdotjs',
//   'prisma',
//   'postgresql',
//   'nginx',
//   'vercel',
//   'docker',
//   'git',
//   'github',
//   'visualstudiocode',
//   'androidstudio',
//   'ios',
//   'apple',
//   'wechat',
// ]
export const techIcons = [
  'typescript',
  'javascript',
  'html5',
  'css3',
  'react',
  'angular',
  'svelte',
  'tailwindcss',
  'bootstrap',
  'sass',
  'less',
  'webpack',
  'vite',
  'eslint',
  'prettier',
  'redux',
  'express',
  'git',
  'github',
  'visualstudiocode',
  'vercel',
]
