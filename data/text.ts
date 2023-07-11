interface iTextData {
  [key:string]:string
}

let text_general_data: iTextData = {
  group: 'گروه برنامه نویسان افراز تیم',
  title:
    'ایده های خود را با خدمات کامل تیم برنامه نویسی ما به واقعیت تبدیل کنید.',
  teammates:'"هم تیمی ها',
}satisfies iTextData

export { text_general_data }
