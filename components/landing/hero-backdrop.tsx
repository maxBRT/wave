"use client"

import { useWindowDimension } from "@/hooks/useWindowDimentions"
import waveImage from "../../public/waves.png"
import Image from "next/image";

export default function HeroBackDrop() {
  const { width, height } = useWindowDimension()
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Image
        src={waveImage}
        width={width}
        height={300}
        alt="background"
      />
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  )
}
