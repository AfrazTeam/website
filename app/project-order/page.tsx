import { inter, yekanBakh } from '@/app/fonts'
import { HTMLAttributes, ReactNode } from 'react'

interface SpaseFromHeaderProps extends HTMLAttributes<HTMLDivElement> { }

function SpaseFromHeader(props: SpaseFromHeaderProps) {
  const {children} = props
  return <div className='mt-20'>
    {children}
  </div>
}

export default function ProjectOrder() {
    async function createProjectOrder(formData: FormData) {
    'use server'

    const rawFormData = {
      fullName: formData.get('full-name'),
      phone: formData.get('phone'),
      description: formData.get('description'),
    }
      console.log(rawFormData)
  }
  return (
    <SpaseFromHeader>
      <div className='container mx-auto flex flex-col justify-center items-center py-8'>
        <h1>سفارش پروژه</h1>
        <form className="w-full max-w-lg mt-10" action={createProjectOrder}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        نام و نام خانوادگی
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="full-name" name='full-name' type="text" placeholder="احسان صفری"/>
      {/* <p className="text-red-500 text-xs italic">لطفا مشخصات ضروری را وارد کنید</p> */}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phone">
        شماره موبایل
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" name='phone' type="tel" placeholder="09141110192"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="inline-block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phone">
        توضیحات پروژه
        </label>
      <span className="text-gray-600 text-xs italic px-5">پروژه خود را شرح دهید به زودی باشما تماس خواهیم گرفت</span>
              <textarea name="description" placeholder="پروژه طراحی سایت فروشگاهی نیاز داشتیم که ..." className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" cols={30} rows={10}>
      </textarea>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">

  <button className="appearance-none block w-full bg-primary text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="submit">
    ثبت درخواست
      </button>
    </div>
  </div>
</form>
      </div>
    </SpaseFromHeader>
  )
}
