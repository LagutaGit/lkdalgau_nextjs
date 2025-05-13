"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { newsData } from "@/data/newsData";

export default function BannerPage() {
  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {newsData.map((news) => (
            <CarouselItem
              key={news.id}
              className="flex items-center justify-center rounded-lg relative px-0"
            >
              <div>
                <Card className="p-1.5">
                  <CardContent className="flex p-0 max-h-80 object-cover relative max-w-full">
                    <div className="dateEvent bg-green-900 p-1.5 rounded-2xl absolute top-2 left-2 text-sm font-medium text-white">
                      {news.date}
                    </div>
                    <Link href={`/event/news/${news.id}`}>
                      <Image
                        src={news.imageUrl}
                        alt={`Новость от ${news.date}`}
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