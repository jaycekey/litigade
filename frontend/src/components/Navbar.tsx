import Image from "next/image";
import { useMenu, MenuProvider } from "@/utils/MenuContext";
import { menuItems } from "@/utils/constants";
import searchIcon from "@/assets/icons/icn search .icn-xs.svg";
import menuIcon from "@/assets/icons/icn menu .icn-xs.svg";
import shopingIcon from "@/assets/icons/icn shopping-cart .icn-xs.svg";
import { martel700, openSans600 } from "@/styles/fonts";
import DrawerMenu from "./DrawerMenu";

function Menu() {
  const { toggleMenu } = useMenu();
  return (
    <div className="py-8 lg:py-0 px-8 lg:px-12 bg-[#F6F6F6] lg:bg-opacity-0">
      <nav className="flex justify-between items-center">
        <p className={`${martel700.className} text-2xl hover:cursor-pointer`}>Litigade</p>
        <div className="flex gap-6">
        <ul className={`${openSans600.className} hidden lg:flex text-sm text-[#737373]`}>
          {menuItems.map((item, i) => (
            <li className="p-4 hover:cursor-pointer" key={i}>{item}</li>
          ))}
        </ul>
          <Image src={searchIcon} alt="" className="lg:w-4 hover:cursor-pointer"/>
          <Image src={shopingIcon} alt="" className="lg:w-4 hover:cursor-pointer"/>
          <Image src={menuIcon} alt="" onClick={toggleMenu} className="lg:hidden hover:cursor-pointer" />
        </div>
      </nav>
      <DrawerMenu />
    </div>
  );
}

export default function Navbar() {
  return (
    <MenuProvider>
      <Menu />
    </MenuProvider>
  );
}
