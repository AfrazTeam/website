import { dataDesctopMenu } from '@/data/header'
import { dataTextGeneral } from '@/data/text'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="header-main">
      <div className="header-container">
        <div className="header-logo">
          <Link href="#" className="header-logo_text">
            {dataDesctopMenu.name}
          </Link>
        </div>
        <div className="header-menu">
          {/* TODO update this menu to nav ul menu and fix border */}
          <div className="border-b-2  border-white h-full">
            <Link href="/" className="header-menu_item">
              {dataDesctopMenu.mainPage}
            </Link>
          </div>
          <Link href="/" className="header-menu_item">
            {dataDesctopMenu.projects}
          </Link>
          <Link href="/" className="header-menu_item">
            {dataDesctopMenu.weblog}
          </Link>
          <Link href="/" className="header-menu_item">
            {dataDesctopMenu.about}
          </Link>
        </div>
        <div className="header-project-order">
          <button className="header-project-order_button">
            <Link href="https://t.me/SafariDeveloper/">
              {dataTextGeneral.projectOrder}
            </Link>
          </button>
          <Link href="https://github.com/AfrazTeam/" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 72 72"
              width="50px"
              height="50px"
            >
              <path
                fill="#232333"
                d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022 s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491 c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922 c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812 s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576 c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659 c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454 c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Header
