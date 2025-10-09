interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '智能会议系统',
    description: `基于Dify平台开发智能会议全流程解决方案，实现会议总结、发言人总结、待办事项提取等功能，支持ARM/x86多架构部署。`,
    imgSrc: '/static/images/google.png',
    href: '#',
  },
  {
    title: '法治评估系统',
    description: `开发基于Qwen大语言模型的法治评估接口，实现评估指标生成、智能评分、文件辅助分析等功能，集成OCR文档解析和RAG检索增强生成技术。`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '#',
  },
  {
    title: '煤矿从业人员不安全状态快速检测',
    description: `与西安科技大学教授合作开发基于微表情疲劳检测系统，针对煤矿工人下井前疲劳状态检测，通过班前会议场合进行微表情识别，获得省部级科技成果鉴定。`,
    imgSrc: '/static/images/google.png',
    href: '#',
  },
  {
    title: '声纹识别优化',
    description: `对声纹识别系统进行性能优化，识别时间从4-5秒优化至1.5秒，完成ARM架构适配和Docker容器化部署。`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '#',
  },
  {
    title: '法治咨询问答系统',
    description: `构建法律领域智能问答系统，实现案件类型分析、咨询事项提取、敏感词检测等NLP功能，扩展法律知识库超过1000个条文文档。`,
    imgSrc: '/static/images/google.png',
    href: '#',
  },
  {
    title: '政策文件智能处理系统',
    description: `开发基于OCR和NLP的政策文件自动解析系统，实现文档信息提取、分类识别、关键程度计算等功能。`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '#',
  },
]

export default projectsData
