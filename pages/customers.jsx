import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data/data.js";
export default function customers() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <div className="flex justify-between p-4">
          <h2 className="font-semibold">Customers</h2>
          <h2 className="font-semibold">Welcome Back</h2>
        </div>
        <div className="p-4">
          <div className="w-full m-auto p-4 border rounded-lg  bg-white overflow-y-auto">
            <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols3 grid-cols-2 items-center justify-between cursor-pointer">
              <span>Name</span>
              <span className="sm:text-left text-right">Email</span>
              <span className="hidden md:grid">Last Order</span>
              <span className="hidden sm:grid">Method</span>
            </div>
            <ul>
              {data.map((order, id) => (
                <li
                  key={id}
                  className="w-auto bg-gray-100 hover:bg-gray-200 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols3 grid-cols-2 items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="bg-red-200 p-3 rounded-lg">
                      <BsPersonFill className="text-red-600" />
                    </div>
                    <p className="pl-4">
                      {order.name.first + " " + order.name.last}
                    </p>
                  </div>
                  <p className="text-gray-600 font-semibold sm:text-left text-right">
                    {order.name.first}@gmail.com
                  </p>
                  <p className="hidden md:flex">{order.date}</p>
                  <div className="sm:flex hidden justify-between items-center">
                    <p>{order.method}</p>
                    <BsPersonFill />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
