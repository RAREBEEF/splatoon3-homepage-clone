import Image from "next/image";
import nintendo from "../public/images/nintendo.svg";
import paint from "../public/images/menu-paint.svg";
import menu from "../public/images/menu.svg";

const Menu = () => {
  return (
    <div className="sticky h-[40px] top-0 z-10 bg-black">
      <div className="absolute left-[-15px] top-[25px]">
        <Image src={paint} alt="Paint" />
      </div>
      <div>
        <div className="absolute right-0 w-[7%] min-w-[60px] text-right">
          <Image src={nintendo} alt="Nintendo Switch" />
        </div>
        <button className="absolute h-[50px] top-10 left-2 flex items-center text-white">
          <svg
            className="h-[70px]"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#eaff3d" transform="translate(100 100)">
              <animate
                attributeName="d"
                dur="5s"
                repeatCount="indefinite"
                values="M64.9,-36.4C78.6,-13.8,80.3,16.8,67.5,36.7C54.7,56.6,27.3,65.8,1.6,64.9C-24.2,64,-48.4,52.9,-59.8,33.8C-71.3,14.7,-70,-12.5,-57.9,-34.1C-45.8,-55.8,-22.9,-71.9,1.4,-72.7C25.6,-73.5,51.2,-58.9,64.9,-36.4Z;

                M50.8,-30.9C62.4,-9.2,65.9,15.5,56.2,35.8C46.4,56.2,23.2,72.3,-0.6,72.7C-24.5,73,-48.9,57.7,-62.5,35.1C-76.1,12.5,-78.8,-17.3,-66.6,-39.3C-54.4,-61.4,-27.2,-75.7,-3.8,-73.5C19.6,-71.3,39.2,-52.6,50.8,-30.9Z;

                M58.6,-39.3C68.2,-17.1,63,8.1,50.8,29.6C38.5,51,19.3,68.6,-3.5,70.6C-26.2,72.6,-52.4,59,-64.7,37.5C-77,16.1,-75.4,-13.3,-62.3,-37.4C-49.2,-61.6,-24.6,-80.5,-0.1,-80.5C24.5,-80.4,48.9,-61.4,58.6,-39.3Z;

                M57.4,-28.2C70.9,-9.8,75.8,18.4,64.8,35.2C53.8,52,26.9,57.4,2.7,55.8C-21.6,54.3,-43.1,45.8,-54,29.1C-64.8,12.4,-64.9,-12.6,-54.1,-29.3C-43.3,-46.1,-21.7,-54.7,0.2,-54.8C22,-54.9,44,-46.5,57.4,-28.2Z;

                M59,-36.6C69.4,-16,65.9,10,53.8,29.2C41.6,48.4,20.8,60.8,-2.8,62.4C-26.5,64.1,-52.9,54.9,-66.2,35.1C-79.6,15.2,-79.7,-15.5,-66.5,-37.7C-53.3,-59.9,-26.6,-73.6,-1.2,-72.9C24.3,-72.3,48.6,-57.2,59,-36.6Z;

                M64.9,-36.4C78.6,-13.8,80.3,16.8,67.5,36.7C54.7,56.6,27.3,65.8,1.6,64.9C-24.2,64,-48.4,52.9,-59.8,33.8C-71.3,14.7,-70,-12.5,-57.9,-34.1C-45.8,-55.8,-22.9,-71.9,1.4,-72.7C25.6,-73.5,51.2,-58.9,64.9,-36.4Z;
              "
              />
            </path>
          </svg>
          <div className="absolute w-[25px] left-[20%] top-[30%]">
            <Image src={menu} alt="menu" className=""></Image>
          </div>
          <span className="ml-[-3px] mb-2 text-neonGreen text-lg font-sans">
            Menu
          </span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
