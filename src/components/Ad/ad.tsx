import { AdProps } from "./ad.type";
import Image from "next/image";

export const Ad = ({ ad }: { ad: AdProps }): JSX.Element => {
  const height = parseInt(ad.size.height);
  const width = parseInt(ad.size.width);
  return <Image src={ad.src} alt={ad.alt} width={width} height={height} />;
};
