import React from "react";
import Image from "next/image";

import Description from "@/components/common/Description";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="border border-primary rounded-lg p-5 flex justify-start items-start flex-col">
      <Image src={icon} alt={title} width={60} />
      <h4 className="text-xl font-semibold py-2">{title}</h4>
      <Description>{description}</Description>
    </div>
  );
};

export default ServiceCard;
