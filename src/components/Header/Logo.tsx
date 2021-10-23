import Image from "next/image";
import AppLogo from "../../../public/AppLogo.svg";

export function Logo() {
  return <Image src={AppLogo} alt="World trip" />;
}
