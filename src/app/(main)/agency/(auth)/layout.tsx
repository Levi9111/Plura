import React, { ReactNode } from "react";

const AuthLayput = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  );
};

export default AuthLayput;
