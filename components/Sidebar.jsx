import Link from "next/link";
import Image from "next/image";

import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { FiSettings } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
export default function Sidebar({ children }) {
  return (
    <>
      <div className="flex">
        <div className="fixed w-20 h-screen p-4 bg-slate-900 border-r-[1px] flex flex-col justify-between">
          <div className="flex flex-col items-center">
            <Link href="/">
              <div className="bg-red-500 text-white p-3 rounded-lg inline-block">
                <RxSketchLogo size={20} alt="dede" />
              </div>
            </Link>
            <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
            <Link href="/">
              <div
                className="bg-slate-800 hover:bg-slate-950  my-3  text-white p-3 rounded-lg inline-block"
                title="Dashboard"
              >
                <RxDashboard size={20} />
              </div>
            </Link>{" "}
            <Link href="/customers">
              <div
                className="bg-slate-800 hover:bg-slate-950  my-3  text-white p-3 rounded-lg inline-block"
                title="Customers"
              >
                <RxPerson size={20} />
              </div>
            </Link>{" "}
            <Link href="/orders">
              <div
                className="bg-slate-800 hover:bg-slate-950  my-3 text-white p-3 rounded-lg inline-block"
                title="orders"
              >
                <HiOutlineShoppingBag size={20} />
              </div>
            </Link>{" "}
            <Link href="/">
              <div
                className="bg-slate-800 hover:bg-slate-950  my-3 text-white p-3 rounded-lg inline-block"
                title="settings"
              >
                <FiSettings size={20} />
              </div>
            </Link>
          </div>
        </div>

        <main className="ml-20 w-full">{children}</main>
      </div>
    </>
  );
}
