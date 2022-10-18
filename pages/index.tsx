import type { NextPage } from "next";
import Description from "../components/Description";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <div className="container-none">
      <Nav />
      <Menu />
      <Header />
      <Description />
    </div>
  );
};

export default Home;
