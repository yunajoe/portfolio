"use client";

import Image from "next/image";

type ExternalImageProps = {
  src: string;
};
function ExternalImage({ src }: ExternalImageProps) {
  return <Image alt="" src={src} sizes="100vw" fill />;
}

export default ExternalImage;
