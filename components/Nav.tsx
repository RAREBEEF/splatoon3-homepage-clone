import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logos/nintendo-text.svg";
import profile from "../public/images/icons/profile.svg";
const Nav = () => {
  return (
    <nav className="h-[60px] flex items-center px-[30px] justify-between bg-nintendoRed sm:h-[48px]">
      <a rel="noreferrer" className="w-[100px] mt-1 cursor-pointer">
        <Image src={logo} alt="Nintendo" />
      </a>

      <a
        rel="noreferrer"
        className="flex items-center hover:bg-[#ac000d] py-1 px-1 rounded-md transition-all text-white font-bold cursor-pointer"
      >
        <span className="w-[30px] flex items-center mr-1">
          <Image src={profile} alt="Log in / Sign up" />
        </span>
        <span className="pr-1">Log in / Sign up</span>
      </a>
    </nav>
  );
};

export default Nav;
