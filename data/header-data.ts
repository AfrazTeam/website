interface iHeaderData {
  [key: string]: string
}

let header_data = {
  name: 'افراز تیم',
  mainPage: 'صفحه اصلی',
  projects: 'پروژه ها',
  weblog: 'وبلاگ',
  about: 'درباره ما',
  freeConsultant: 'مشاوره رایگان',
} satisfies iHeaderData

export { header_data }
