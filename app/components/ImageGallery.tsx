"use client";
import { useState } from "react";
import { urlFor } from "../lib/sanity";
import Image from "next/image"

interface iAppProps {
  image: string // A single image object
}

export default function ImageGallery({ image }: iAppProps) {
    const[bigImage, setBigImage]=useState(image)
    const handlesmallImageclick=(image:string) => {
        setBigImage(image)}
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        <div className="overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={urlFor(image).url()} // Directly use the image object without .map()
            width={200}
            height={200}
            alt="photo"
            className="h-full w-full object-cover object-center cursor-pointer"
            onClick={()=>handlesmallImageclick(image)}
          />
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image src={urlFor(bigImage).url()}
        alt="photo" width={500} height={500} className="h-full w-full object-cover object-center"
        />
        <span className="absolute left-0 top-0 rounded-br-lg bg-gray-100 px-3 py-1.5 text-sm uppercase tracking-wider text-red-500 font-bold">SALE</span>

      </div>
    </div>
  );
}
