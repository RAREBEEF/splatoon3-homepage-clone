import { PropsWithChildren } from "react";
import Menu from "./Menu";
import Nav from "./Nav";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Nav />
      <Menu />
      {children}
    </>
  );
};

export default Layout;
