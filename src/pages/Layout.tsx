// Layout.tsx

import React, { ReactNode } from 'react';
import MenuBar from '../components/NavBar/MenuBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <MenuBar />
      {children}
    </div>
  );
};

export default Layout;
