interface iDataText {
  [key: string]: string
}

let dataTextGeneral: iDataText = {
  group: 'نیروی خلاق در زمینه ی برنامه نویسی و توسعه کسب و کار',
  title:
    'ایده های خود را با خدمات کامل تیم برنامه نویسی ما به واقعیت تبدیل کنید.',
  teammates: '"هم تیمی ها',
  projectOrder: 'سفارش پروژه',
  counseling: 'مشاوره رایگان',
  services: 'خدمات ما',
  afrazteam: 'افراز تیم ',
} satisfies iDataText

export { dataTextGeneral }
