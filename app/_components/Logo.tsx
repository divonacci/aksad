import Image from "next/image";
import logo from "../assets/images/aksad_logo_no_bg.png";

const Logo = () => {
  return (
    <Image
      src={logo}
      alt="Aksad Consultance"
      width={120}
      height={40}
      className="dark:bg-white/90 dark:p-2 dark:rounded-lg w-30 h-10"
    />
  );
};

export default Logo;
