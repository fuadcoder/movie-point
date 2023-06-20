import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import DarkModeSwitch from "./DarkModeSwitch";
export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome}/>
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill}/>
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <span className="text-2xl text-white font-bold bg-purple-700 py-1 px-2 rounded-lg shadow-lg">Movie Point</span>
        </Link>
      </div>
    </div>
  )
}
