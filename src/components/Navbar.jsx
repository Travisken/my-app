import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex p-4 fixed z-70 bg-transparent top-0 w-full">
        <nav className="flex relative  w-full p-4 items-center justify-between bg-white rounded-xl">
          <h1 className="text-3xl">Logo</h1>
          <ul className="md:flex hidden gap-4">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/">Grid</a>
            </li>
          </ul>

          <button className="rounded-full md:block hidden px-8 py-3 bg-blue-700 text-white font-medium">
            Sign Up
          </button>

          <button onClick={()=>setOpen(!open)} className="md:hidden flex">
            <Menu />
          </button>

          <div className={`flex rounded-xl flex-col gap-6 bg-white w-full left-0 absolute top-full mt-4 p-4 ${open ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col items-center gap-4">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/">Grid</a>
              </li>
            </ul>

            <button className="rounded-full px-8 py-3 bg-blue-700 text-white font-medium">
              Sign Up
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
