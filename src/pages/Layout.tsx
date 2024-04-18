// Layout.tsx

import React, { ReactNode } from "react";
import MenuBar from "../components/NavBar/MenuBar";
import Footer from "../components/FooterSection/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-zinc-100">
      <MenuBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
