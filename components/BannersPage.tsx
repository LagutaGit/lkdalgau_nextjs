"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function BannerPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const images = [
    "https://avatars.mds.yandex.net/i?id=a53955db528d5e40d4064e9ed8a3f53e6473a411-5236397-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=8a1f6b50b9c5cc7cad95417213ce6fb59b505472-4531115-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=c911b359f9e08773a3e0224690d5c74e83e81862-5281184-images-thumbs&n=13",
    "/images/banner.png"
  ];
  return (
    <div className="w-full ">
      <Carousel className="" 
        opts={{
            align: "start",
            loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
              <CarouselItem key={index} className="flex items-center justify-center rounded-lg relative px-0">
                <div className="">
                  <Card className="p-1.5">
                    <CardContent className=" flex p-0 h-full relative max-w-full">
                    <div className="dateEvent bg-green-900 p-1.5 rounded-2xl absolute top-2 left-2 text-sm font-medium text-white">
                        03.07.2025
                      </div>
                      <Link href="/" target="_blank">
                      <Image
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full  object-cover"
                        width={1200}
                        height={400}
                      />
                      </Link>
                     
                     
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}


            {/*{Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
                <Card className="p-0 backdrop-sepia-0">
                  <CardContent >
                    <CarouselItem className=" flex items-center justify-center rounded-lg relative px-0">
                    <div className="cards relative">
                        <div className="card">
                        <div className="dateEvent absolute top-2 left-2 text-sm font-medium text-white">
                        03.07.2025
                      </div>
                      <img
                        src="/images/banner.png"
                        alt="Баннер" 
                      />
                        </div>
                      
                    </div>
                    </CarouselItem>
                    
                  </CardContent>
                  
                </Card>
            </CarouselItem>
          ))}*/}
            
                  
        </CarouselContent>
        <CarouselPrevious className="ml-20"/>
        <CarouselNext className="mr-20" />
      </Carousel>
      
    </div>
  )
}