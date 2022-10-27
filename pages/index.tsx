import type { NextPage } from "next";
import Banner from "../components/Banner";
import Hardware from "../components/Hardware";
import FindSquiddos from "../components/FindSquiddos";
import Footer from "../components/Footer";
import GetTheGame from "../components/GetTheGame";
import Header from "../components/Header";
import News from "../components/News";
import Splatlands from "../components/Splatlands";
import Trailer from "../components/Trailer";
import Twitter from "../components/Twitter";
import _ from "lodash";

const Home: NextPage = () => {
  return (
    <main className="container-none overflow relative flex flex-col bg-[url('/images/bgs/index-bg.jpeg')] bg-[length:1200px_800px]">
      <Header />
      <div className="w-screen relative h-fit pt-[20px] translate-y-[-80px] pt-[60px]">
        <Banner color={["yellow", "green"]} />
      </div>
      <Trailer />
      <Splatlands />
      <div className="w-screen h-fit pt-[20px]">
        <Banner color={["pink", "green"]} />
      </div>
      <News />
      <Twitter />
      <GetTheGame />
      <div className="w-screen h-fit mt-[-50px] md:mt-[-30px] sm:mt-[50px]">
        <Banner color={["yellow", "purple"]} />
      </div>
      <Hardware />
      <div className="w-screen translate-y-[20px] h-fit mt-[-50px] md:mt-[-30px] sm:mt-[50px]">
        <Banner color={["blue", "yellow2"]} />
      </div>
      <FindSquiddos />
      <Footer />
    </main>
  );
};

export default Home;
