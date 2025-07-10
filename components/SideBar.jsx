import { GoHomeFill } from "react-icons/go";
import { MdFastfood } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export default function SideBar() {
  return (
    <aside className="border-r bg-main rounded-xl text-inputborder w-[20%] flex flex-col items-center justify-between py-10">
      <div className="flex flex-col items-center space-y-10">
        <h1 className="text-3xl font-semibold">SoloNest</h1>
        <nav className="flex flex-col space-y-4 text-xl">
          <p className="flex gap-2 items-center px-10 cursor-pointer duration-100 py-2 hover:bg-second">
            <GoHomeFill /> Dashboard
          </p>
          <p className="flex gap-2 items-center px-10 cursor-pointer duration-100 py-2 hover:bg-second">
            <MdFastfood /> Meals
          </p>
          <p className="flex gap-2 items-center px-10 cursor-pointer duration-100 py-2 hover:bg-second">
            <FaSackDollar />
            Expenses
          </p>
          <p className="flex gap-2 items-center px-10 cursor-pointer duration-100 py-2 hover:bg-second">
            <FaBook /> Journal
          </p>
        </nav>
      </div>
      <p className="flex gap-2 items-center text-xl px-10 cursor-pointer duration-100 py-2 hover:bg-second">
        <IoMdSettings /> Settings
      </p>
    </aside>
  );
}
