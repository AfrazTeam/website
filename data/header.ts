interface iDataHeader {
  [key: string]: string
}

let dataDesctopMenu = {
  name: 'افراز تیم',
  mainPage: 'صفحه اصلی',
  projects: 'پروژه ها',
  weblog: 'وبلاگ',
  about: 'درباره ما',
  freeConsultant: 'مشاوره رایگان',
} satisfies iDataHeader

export { dataDesctopMenu }
