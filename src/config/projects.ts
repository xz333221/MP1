// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string; favicon?: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'Outstanding Teacher Award',
    description: '',
    date: '2024',
    location: 'SCLS, Shanghai',
  },
  {
    name: 'Zhui Ying Award',
    description: '',
    date: '2023',
    location: 'Qingpu, Shanghai',
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: '流光前端小站',
    description: '自建的前端知识体系网站，整合前端技术内容与最佳实践。',
    link: { 
      href: 'https://flowdash.cn/',
      favicon: 'https://flowdash.cn/favicon.ico',
      label: '访问网站'
    },
    tags: ['知识库', '技术博客']
  },
  {
    name: '流光起始页',
    description: '一个浏览器的起始页，类似Infinity，为了访问速度使用了nuxt，实现了个性化设置和书签管理功能。',
    link: { 
      href: 'https://flowdash.top',
      favicon: 'https://flowdash.top/upload/favicon/2024-12/favic_4558781498542033.64',
      label: '访问网站'
    },
    tags: ['起始页']
  },
  {
    name: 'zen-gitsync',
    description: '一个git自动化提交工具，可以自动提交代码、定时提交代码，提高工作流效率。',
    link: { 
      href: 'https://www.npmjs.com/package/zen-gitsync',
      favicon: 'https://flowdash.top/upload/favicon/2024-12/3dc95_5597354767959408.png',
      label: 'NPM包'
    },
    tags: ['工具', '自动化']
  }
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Python Workshop',
    description:
      'Teaching basic Python programming concepts to beginners. Covering variables, control flow, and functions.',
    date: '2024-02-24',
    location: 'Shanghai',
    link: 'https://example.com/python-workshop',
  },
  {
    name: 'AI Ethics Discussion',
    description:
      'A group discussion about the ethical implications of AI development and its impact on society.',
    date: '2024-03-01',
    location: 'Shanghai',
    link: 'https://example.com/ai-ethics',
  },
  {
    name: 'Code Review Session',
    description:
      'Helping students improve their coding skills through peer code review and best practices sharing.',
    date: '2024-03-15',
    location: 'Shanghai',
  },
]
