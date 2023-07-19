interface iDataText {
  [key: string]: string
}

let dataTextGeneral: iDataText = {
  group: 'گروه برنامه نویسان افراز تیم',
  title:
    'ایده های خود را با خدمات کامل تیم برنامه نویسی ما به واقعیت تبدیل کنید.',
  teammates: '"هم تیمی ها',
  projectOrder: 'سفارش پروژه',
} satisfies iDataText

export { dataTextGeneral }
