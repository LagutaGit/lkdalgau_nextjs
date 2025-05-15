"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { newsData } from "@/data/newsData";

export default function NewsPage() {
  const params = useParams();
  const newsId = parseInt(params.id as string, 10);
  const news = newsData.find((n) => n.id === newsId);

  if (!news) {
    return <div className="pt-5 text-center text-gray-500">Новость не найдена</div>;
  }

  return (
    <div className="pt-5 w-full mx-auto lg:p-4">
      <h1 className="text-3xl font-semibold text-green-900 mb-4">Новость от {news.date}</h1>
      <Image src={news.imageUrl} alt="Новость" width={1200} height={400} className="rounded-lg mb-4" />
      <p className="text-gray-700">{news.text}</p>
    </div>
  );
}