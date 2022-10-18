import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/nintendo-text.svg";
import profile from "../public/images/profile.svg";
const Nav = () => {
  return (
    <nav className="h-[60px] flex items-center px-[30px] justify-between bg-nintendoRed">
      <Link href="https://www.nintendo.com/">
        <a target="_blank" rel="noreferrer" className="w-[100px] mt-1">
          <Image src={logo} alt="Nintendo" />
        </a>
      </Link>
      <Link href="https://accounts.nintendo.com/authorize_guide?redirect_uri=https%3A%2F%2Faccounts.nintendo.com%2Fconnect%2F1.0.0%2Fauthorize%3Fclient_id%3De56201e414c97a10%26display%3Dtouch%26interacted%3D1%26prompt%3Dconsent%26redirect_uri%3Dhttps%253A%252F%252Fsplatoon.nintendo.com%26response_mode%3Dweb_message%26response_type%3Dcode%2Bid_token%2Btoken%26scope%3DeshopAlps%2BmissionStatus%2BmissionStatus%253Aprogress%2Bopenid%2BpointWallet%2Buser%2Buser.birthday%2Buser.links%255B%255D.id%2Buser.mii%2Buser.wishlist%2BuserNotificationMessage%253AanyClients%2BuserNotificationMessage%253AanyClients%253Awrite%26state%3D825d35927db642b1adbf75b96dce4bdf%26web_message_target%3Dop-frame%26web_message_uri%3Dhttps%253A%252F%252Faccounts.nintendo.com&type=mixed">
        <a
          target="_blank"
          rel="noreferrer"
          className="flex items-center hover:bg-[#ac000d] py-1 px-1 rounded-md transition-all text-white font-bold"
        >
          <span className="w-[30px] flex items-center mr-1">
            <Image src={profile} alt="Log in / Sign up" />
          </span>
          <span className="pr-1">Log in / Sign up</span>
        </a>
      </Link>
    </nav>
  );
};

export default Nav;
