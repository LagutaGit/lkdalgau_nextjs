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

export default function BannerPage() {
  return (
    <div className="w-full ">
      <Carousel className="" 
        opts={{
            align: "start",
            loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
                <Card className="">
                  <CardContent className="flex items-center justify-center rounded-lg relative">
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
                  </CardContent>
                </Card>
            </CarouselItem>
          ))}
                  
        </CarouselContent>
        <CarouselPrevious className="ml-20"/>
        <CarouselNext className="mr-20" />
      </Carousel>
    </div>
  )
}