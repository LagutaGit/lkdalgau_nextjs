import { NextResponse } from "next/server";

export async function GET() {
  const news = [
    {
      id: 1,
      date: "06.05.2025",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
      imageUrl: "/projects/banner-1.jpg",
    },
    // Добавьте дополнительные элементы по необходимости
  ];
  return NextResponse.json(news);
}