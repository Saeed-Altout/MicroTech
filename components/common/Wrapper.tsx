import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  styles?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, styles }) => {
  return (
    <div
      className={`container flex justify-between items-center flex-col lg:flex-row gap-10 ${styles}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
