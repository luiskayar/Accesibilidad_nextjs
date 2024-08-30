"use client"
import Image from "next/image"
import Link from "next/link";
import Info from "../info/page.jsx"

export default function page() {
  return (
    <div className=""> 
    <h1 className="text-4xl text-white text-center	mt-10">¡ Bienvenidos a Delphos !</h1>
    <div className="">
      <Image src="/imagen/Logo blanco.png" className="absolute absolute top-0 right-0 mt-5 mr-5" width={50} height={50}/>
    </div>
    <main className=" ">
        <Info />
      </main>
    </div>
  );
}