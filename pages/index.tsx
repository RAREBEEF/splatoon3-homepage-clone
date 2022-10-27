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
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <main className="container-none overflow relative flex flex-col bg-[url('/images/bgs/index-bg.jpeg')] bg-[length:1200px_800px]">
      <Head>
        <title>Splatoon™ 3 for Nintendo Switch™ – Official Site</title>
        <meta
          name="description"
          content="Enter the Splatlands! Ink your way to the top in online modes like Turf War and Salmon Run. Discover the mysteries of story mode. Only on the Nintendo Switch™ family of systems."
        />
        <meta name="author" content="RAREBEEF" />
      </Head>
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
