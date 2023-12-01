import React from "react";
import Descraption from "@/components/common/Description";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="border border-neutral-200 rounded-lg p-4 hover:bg-secondary transition">
      <h4 className="text-xl pb-2 font-semibold">{title}</h4>
      <Descraption>{description}</Descraption>
    </div>
  );
};

export default FeatureCard;
