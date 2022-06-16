import type { NextPage } from "next";

const Tailwind: NextPage = () => {
  return (
    <div className=" dark g mx-auto  grid min-h-screen gap-10 bg-slate-300 p-20 lg:grid-cols-2 xl:grid-cols-3 xl:place-content-center">
      <div className=" flex flex-col justify-center rounded-3xl bg-white p-6 shadow-xl dark:bg-black">
        <span className=" font-3xl text-3xl dark:text-white">Select Item</span>
        <ul>
          {[1, 2].map((i) => (
            <li key={i} className="my-2 flex justify-between  ">
              <span className=" text-gray-500 dark:text-gray-100">
                Grey Chair
              </span>
              <span className=" font-semibold dark:text-gray-100">$19</span>
            </li>
          ))}
        </ul>
        <div className=" mt-2 flex justify-between border-t-2 border-dashed pt-2">
          <span>Total</span>
          <span className=" font-semibold">$19</span>
        </div>
        <button
          className=" mx-auto mt-5 block w-5/6  rounded-xl bg-blue-500 p-3 text-center text-white 
          transition-colors hover:bg-teal-400
        "
        >
          Checkout
        </button>
      </div>
      <div className="group   overflow-hidden rounded-3xl bg-white shadow-xl ">
        <div className=" bg-blue-500 p-6 pb-14 lg:pb-48 portrait:bg-indigo-500 landscape:bg-teal-500">
          <span className=" text-2xl text-white">Profile</span>
        </div>
        <div className=" relative -top-5 rounded-3xl bg-white p-6">
          <div className=" relative -top-16 flex items-end justify-between">
            <div className=" flex flex-col items-center">
              <span className=" text-sm text-gray-500">Orders</span>
              <span className=" font-medium">340</span>
            </div>
            <div className=" h-24 w-24 rounded-full bg-gray-300 transition-colors group-hover:bg-green-300" />
            <div className=" flex flex-col items-center">
              <span className=" text-sm text-gray-500">Spent</span>
              <span className=" font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative -mt-10 -mb-5 flex flex-col items-center">
            <span className=" text-lg font-medium">Tony Molloy</span>
            <span className=" text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="rounded-3xl bg-white p-10 shadow-xl lg:col-span-2 xl:col-span-1">
        <div className=" mb-5 flex items-center justify-between">
          <span>←</span>
          <div className=" space-x-3">
            <span>⭐️ 4.9</span>
            <span className=" rounded-md p-2 shadow-xl">❤️</span>
          </div>
        </div>
        <div className=" mb-5 h-72 bg-zinc-400" />
        <div className=" flex flex-col">
          <span className=" text-lg font-medium">Swoon Lounge</span>
          <span className=" text-xs text-gray-500">Chair</span>
          <div className=" mt-3 mb-5 flex items-center justify-between">
            <div className=" space-x-2">
              <button className=" h-5 w-5 rounded-full bg-yellow-500 ring-yellow-500 ring-offset-2 transition hover:ring-2" />
              <button className=" h-5 w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition hover:ring-2" />
              <button className=" h-5 w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition hover:ring-2" />
            </div>
            <div className=" flex items-center space-x-5">
              <button className=" flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 p-1.5 text-xl  text-gray-500">
                -
              </button>
              <span>1</span>
              <button className=" flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 p-1.5 text-xl  text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className=" flex items-center justify-between">
            <span className="text-2xl font-medium">$450</span>
            <button className=" rounded-lg bg-blue-500 py-2 px-8 text-center text-xs text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <form className=" flex flex-col space-y-2 rounded-3xl bg-cyan-300 p-5 focus-within:bg-blue-300">
        <input
          type="text"
          required
          placeholder="Username"
          className=" peer rounded-md border border-gray-400 p-1"
        />
        <span className=" hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid
        </span>
        <span className=" hidden peer-valid:block peer-valid:text-teal-500">
          Awesome username
        </span>
        <span className=" peer-hover:text-black0 hidden peer-hover:block">
          Hello
        </span>
        <input type="submit" value="Login" className=" bg-white" />
      </form>
      <details className=" select-none open:bg-indigo-500 open:text-white">
        <summary className=" cursor-pointer">What is my fav. food.</summary>
        <span>김치</span>
      </details>
      <ul className=" list-disc marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
      <input
        type="file"
        className=" file:cursor-pointer file:rounded-xl file:border-0 file:bg-purple-500 file:px-5 
        file:py-1 file:text-white file:transition-colors  file:hover:border-purple-400
        file:hover:bg-white file:hover:text-purple-500"
      />
      <p className="first-letter:text-7xl first-letter:hover:text-purple-300">
        Hello everone!
      </p>
    </div>
  );
};

export default Tailwind;
