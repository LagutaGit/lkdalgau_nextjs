"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"
import Image from "next/image"

export default function BannerPage() {
  const images = [
    "https://avatars.mds.yandex.net/i?id=a53955db528d5e40d4064e9ed8a3f53e6473a411-5236397-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=8a1f6b50b9c5cc7cad95417213ce6fb59b505472-4531115-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=c911b359f9e08773a3e0224690d5c74e83e81862-5281184-images-thumbs&n=13",
    "/images/banner.png",
    "https://get.wallhere.com/photo/kitten-muzzle-paws-cute-eyes-fluffy-lie-666356.jpg"
  ];

  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="flex items-center justify-center rounded-lg relative px-0">
              <div>
                <Card className="p-1.5">
                  <CardContent className="flex p-0 max-h-80 object-cover relative max-w-full">
                    <div className="dateEvent bg-green-900 p-1.5 rounded-2xl absolute top-2 left-2 text-sm font-medium text-white">
                      03.07.2025
                    </div>
                    <Link href="/" target="_blank">
                      <Image
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full rounded-sm object-cover"
                        width={1200}
                        height={400}
                      />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-4 lg:ml-20" aria-label="Предыдущий слайд" />
        <CarouselNext className="mr-4 lg:mr-20" aria-label="Следующий слайд" />
      </Carousel>
    </div>
  );
}