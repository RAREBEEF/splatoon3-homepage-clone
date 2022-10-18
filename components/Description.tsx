import News from "./News";
import Splatlands from "./Splatlands";
import Trailer from "./Trailer";

const Description = () => {
  return (
    <main className="container-none relative flex flex-col gap-y-[100px] bg-[url('/images/bg-gray.jpeg')] bg-[length:1200px_800px]">
      <div className="absolute w-screen h-fit pt-[20px] translate-y-[-40px]">
        <div className="h-[60px] translate-x-[-5%] rotate-1 bg-[url('/images/banner-yellow.png')] bg-cover w-[110%]"></div>
        <div className="w-[110%] h-[60px] translate-x-[-5%] rotate-[-1deg] bg-[url('/images/banner-green.png')] bg-cover"></div>
      </div>
      <Trailer />
      <Splatlands />
      <div className="w-screen h-fit pt-[20px]">
        <div className="h-[60px] translate-x-[-5%] rotate-1 bg-[url('/images/banner-pink.png')] bg-cover w-[110%]"></div>
        <div className="w-[110%] h-[60px] translate-x-[-5%] rotate-[-1deg] bg-[url('/images/banner-green.png')] bg-cover"></div>
      </div>
      <News />
    </main>
  );
};

export default Description;
