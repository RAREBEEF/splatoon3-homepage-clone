import type { NextPage } from "next";
import Description from "../components/Description";
import Footer from "../components/Footer";
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
      <Footer />
    </div>
  );
};

export default Home;
