import React, { type ReactNode } from "react";

const MainContainer = ({ children }: { children: ReactNode }) => {
  return <div className="px-64">{children}</div>;
};

export default MainContainer;
