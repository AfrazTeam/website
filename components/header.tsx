import { header_data } from "@/data/header-data"
import Link from "next/link"

const Header = () => {
     return (
          <div className="header-main">
               <h1 className="header-name">{header_data.name}</h1>
               <div className="header-menu">
                    <Link href="/" className="header-menu-item">{header_data.mainPage}</Link>
                    <Link href="/" className="header-menu-item">{header_data.projects}</Link>
                    <Link href="/" className="header-menu-item">{header_data.weblog}</Link>
                    <Link href="/" className="header-menu-item">{header_data.contactUs}</Link>
                    <Link href="/" className="header-menu-item">{header_data.about}</Link>
                    <Link href="/" className="header-menu-item text-green-600">{header_data.Counseling}</Link>
               </div>
               <Link href='/'>
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width={40} />
               </Link>
          </div>
     )
}
export default Header