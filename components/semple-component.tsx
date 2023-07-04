import { inter } from '@/app/fonts'

export default function SampleComponent() {
  return (
    <>
      <h1 className={`text-green-700`}>Sample component ... whitout font</h1>
      <h1 className={`text-green-700 ${inter.className}`}>
        Sample component ... inter google font with next import
      </h1>
      <h1 className={`text-green-700 font-inter`}>
        Sample component ... inter google font with classname tailwind
      </h1>
      <h1 className={`text-green-700 font-yekan-bakh`}>
        Sample component ... yekan bakh font
      </h1>
    </>
  )
}
