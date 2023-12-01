import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { ContextProvider } from "@/context/ContextProvider";
import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ContextProvider>
        <TooltipProvider>
          <Navbar />

          {children}
          <Footer />
        </TooltipProvider>
      </ContextProvider>
    </>
  );
};

export default layout;
