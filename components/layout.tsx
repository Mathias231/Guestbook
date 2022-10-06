import React from 'react';
import Navbar from './navbar';

export interface LayoutProps {
  children: JSX.Element;
}
function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
