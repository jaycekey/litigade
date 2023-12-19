import { openSans400 } from "@/styles/fonts";
import { useMenu } from "@/utils/MenuContext";
import { menuItems } from "@/utils/constants";

export default function DrawerMenu() {
  const { isMenuOpen } = useMenu();

  return (
    <div
      className={`lg:hidden gap-7 text-3xl text-[#737373] flex flex-col justify-center items-center ease-in-out transition-all duration-100 ${
        isMenuOpen ? "py-24" : "py-0 h-0"
      } ${openSans400.className}`}
    >
      {isMenuOpen && (
        <ul>
          {menuItems.map((item, i) => (
            <li className="p-4" key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
