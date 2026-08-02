import React from "react";
import Navbar from "../navbar/Navbar";

interface layout {
  children: React.ReactNode;
}

function Layout({ children }: layout) {
  return (
    <>
      {children}
      <Navbar />
    </>
  );
}

export default Layout;
