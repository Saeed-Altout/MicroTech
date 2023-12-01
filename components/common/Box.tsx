import React from "react";

interface BoxProps {
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div className="bg-white flex justify-center items-center gap-10 w-full md:w-fit border border-neutral-200 p-6 rounded-lg">
      {children}
    </div>
  );
};

export default Box;
