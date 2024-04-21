interface iDataHeader {
	[key: string]: string;
}

const dataDesctopMenu = {
	name: 'افراز تیم',
	mainPage: 'صفحه اصلی',
	projects: 'پروژه ها',
	weblog: 'وبلاگ',
	about: 'درباره ما',
} satisfies iDataHeader;

export { dataDesctopMenu };
