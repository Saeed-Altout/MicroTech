import Navbar from "@/components/common/Navbar";
import { ContextProvider } from "@/context/ContextProvider";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ContextProvider>
        <Navbar />
        {children}
        {/* Footer */}
      </ContextProvider>
    </>
  );
};

export default layout;
