"use client"
import Image from "next/image"
import Link from "next/link";
import Info from "../info/page.jsx"
import { useTheme } from 'next-themes'

export default function Page() {
  return (
    <div className="h-full w-full overflow-hidden flex items-center justify-center">
      <h1 className="text-4xl text-center mt-10 text-black dark:text-white">¡Bienvenidos a Delphos!</h1>
      {/*<Info />*/}

    </div>
  );
}
