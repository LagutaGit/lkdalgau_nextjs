"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EventItem, eventsData } from "@/data/eventsData"; // Импортируем интерфейс и данные

const Events = () => {
  const [eventData, setEventData] = useState<EventItem[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            setEventData(data);
          } else {
            setEventData(eventsData); // Используем резервные данные из eventsData
          }
        } else {
          setEventData(eventsData); // Резервные данные при ошибке API
        }
      } catch (error) {
        console.error("Ошибка при загрузке мероприятий:", error);
        setEventData(eventsData); // Резервные данные при ошибке
      }
    };

    fetchEvents();
  }, []);

  // Форматирование даты для отображения в формате "2 Сентября"
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("ru-RU", { month: "long" });
    return `${day} ${month}`;
  };

  return (
    <div className="pt-5">
      <h2 className="text-5xl text-green-900">Мероприятия</h2>
      <div className="events-inner pt-5">
        <div className="buttons-event">
          <Button className="text-white bg-amber-300">Мои заявки</Button>
          <Button className="text-white bg-green-900 ml-5">
            <Link href="/events">Показать все</Link>
          </Button>
        </div>
        <div className="events-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
          {eventData.slice(0, 3).map((event) => (
            <Card
              key={event.id}
              className="p-1.5 border-green-900 hover:shadow-2xl/30 transition-shadow"
            >
              <CardHeader className="p-0 rounded-2xl">
                <Image
                  width={1200}
                  height={350}
                  alt={`Изображение мероприятия: ${event.title}`}
                  className="rounded-sm"
                  src={event.imageUrl}
                />
              </CardHeader>
              <CardContent className="flex flex-col items-end">
                <div className="date-card text-green-900 font-bold">
                  <p>{formatDate(event.date)}</p>
                </div>
                <Link
                  href={`/event/${event.id}`}
                  className="text cursor-pointer hover:underline"
                >
                  {event.title}
                </Link>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  className="bg-green-800 text-white cursor-pointer"
                  aria-label="Подать заявку на мероприятие"
                >
                  Подать заявку
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;