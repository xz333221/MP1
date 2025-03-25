// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: '中国农业银行',
      title: '高级前端开发工程师',
      logo: 'coffee',
      start: '2022.07',
      end: '2024.11'
    },
    {
      company: '未来电视',
      title: '高级前端开发工程师',
      logo: 'coffee',
      start: '2020.07',
      end: '2022.04'
    },
    {
      company: '天津尚知科技发展有限公司',
      title: '前端开发工程师',
      logo: 'coffee',
      start: '2019.04',
      end: '2020.06'
    },
    {
      company: '凯拓软件',
      title: '前端开发工程师',
      logo: 'coffee',
      start: '2017.08',
      end: '2019.02'
    }
  ]