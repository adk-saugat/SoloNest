import NavBar from "@/components/navbar";
import { FaHome } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { FaSackDollar } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";

export default function NavLayout({ children }) {
  return (
    <div className="flex flex-col h-full">
      <NavBar />
      <section className="flex h-full">
        <aside className="basis-[200px] bg-white flex flex-col p-4 space-y-4 text-lg">
          <p className="flex gap-3 hover:bg-darkgray duration-100 rounded-md hover:text-white px-4 py-2 cursor-pointer">
            <FaHome size={25} />
            Dashboard
          </p>
          <p className="flex gap-3 hover:bg-darkgray duration-100 rounded-md hover:text-white px-4 py-2 cursor-pointer">
            <ImSpoonKnife size={25} />
            Meals
          </p>
          <p className="flex gap-3 hover:bg-darkgray duration-100 rounded-md hover:text-white px-4 py-2 cursor-pointer">
            <FaSackDollar size={25} />
            Expenses
          </p>
          <p className="flex gap-3 hover:bg-darkgray duration-100 rounded-md hover:text-white px-4 py-2 cursor-pointer">
            <BsFillPeopleFill size={25} />
            Feed
          </p>
        </aside>
        <main className="bg-[#E9ECEF] w-full">{children}</main>
      </section>
    </div>
  );
}
