import SampleComponent from '@/components/semple-component'
import { inter, yekanBakh } from '@/app/fonts'

export default function Home() {
  return (
    <>
      <h1 className={inter.className}>Afraz team</h1>
      <h1 className={`font-thin ${yekanBakh.className}`}>
        متنی برای تست فونت ایران یکان
      </h1>
      <h1 className={`font-extralight ${yekanBakh.className}`}>
        متنی برای تست فونت ایران یکان
      </h1>
      <h1 className={`font-light ${yekanBakh.className}`}>
        متنی برای تست فونت ایران یکان
      </h1>
      <h1 className={`font-normal ${yekanBakh.className}`}>
        متنی برای تست فونت ایران یکان
      </h1>
      <h1 className={`font-medium ${yekanBakh.className}`}>
        متنی برای تست فونت ایران یکان
      </h1>
      <h1 className="font-semibold font-yekan-bakh">
        متنی برای تست فونت ایران یکان
      </h1>
      <h1 className="font-bold font-yekan-bakh">
        متنی برای تست فونت ایران یکان
      </h1>
      <h1 className="font-extrabold font-yekan-bakh">
        متنی برای تست فونت ایران یکان
      </h1>
      <h1 className="font-black font-yekan-bakh">
        متنی برای تست فونت ایران یکان
      </h1>

      <h1 className="font-normal font-yekan-bakh">
        متنی برای تست فونت ایران یکان - فراخوانی شده توسط classname
      </h1>
      <SampleComponent />
    </>
  )
}
