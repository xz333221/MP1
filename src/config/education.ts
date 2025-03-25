// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: '天津工业大学',
      major: '机械工程 本科',
      logo: 'college',
      start: '2013',
      end: '2017'
    }
  ]