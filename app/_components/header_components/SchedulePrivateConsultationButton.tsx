import Link from "next/link";
import React, { HTMLAttributes } from "react";

const SchedulePrivateConsultationButton = ({
  className,
  ...Props
}: {
  className?: string;
} & HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link href="#" {...Props} className={`btn sec-btn ${className}`}>
      Schedule Private Consultation
    </Link>
  );
};

export default SchedulePrivateConsultationButton;
