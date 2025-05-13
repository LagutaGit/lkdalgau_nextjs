"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import React, { useState } from "react";
import Link from "next/link";

// Экспортируем интерфейс
export interface EventItem {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
}

interface EventsInnerLkProps {
  events?: EventItem[];
}

const EventsInnerLk = ({ events = [] }: EventsInnerLkProps) => {
  const mockEvents: EventItem[] = [
    { id: 1, title: "Название 1", date: "2023-06-14", imageUrl: "https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG" },
    { id: 2, title: "Название 2", date: "2023-07-15", imageUrl: "https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG" },
    { id: 3, title: "Название 3", date: "2025-08-15", imageUrl: "https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG" },
    { id: 4, title: "Название 4", date: "2023-07-15", imageUrl: "https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG" },
    { id: 5, title: "Название 5", date: "2023-07-15", imageUrl: "https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG" },
  ];

  const [filter, setFilter] = useState<"all" | "participated" | "past">("all");
  const [participatedEvents] = useState<number[]>([1, 4]);
  const [visibleCount, setVisibleCount] = useState(6);

  const displayEvents = events.length > 0 ? events : mockEvents;

  const filteredEvents = displayEvents.filter((event) => {
    const eventDate = new Date(event.date);
    const currentDate = new Date();
    if (filter === "participated") {
      return participatedEvents.includes(event.id);
    } else if (filter === "past") {
      return eventDate < currentDate;
    }
    return true;
  });

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  return (
    <div className="pt-5">
      <h2 className="text-4xl text-green-900">Мероприятия</h2>
      <div className="events-wrapper mb-5">
        <div className="buttons-events-lk pt-5 lg:flex gap-4">
          <Button
            variant="outline"
            className={`border-green-900 mr-1 text-green-900 ${filter === "all" ? "bg-green-100" : "hover:bg-green-100"}`}
            onClick={() => setFilter("all")}
            aria-label="Показать все мероприятия"
          >
            Участие
          </Button>
          <Button
            className={`bg-green-900 mb-5 text-white ${filter === "participated" ? "bg-green-700" : "hover:bg-green-700"}`}
            onClick={() => setFilter("participated")}
            aria-label="Показать мероприятия, в которых участвовал"
          >
            Участвовал
          </Button>
          <Button
            className={`bg-green-900 text-white ${filter === "past" ? "bg-green-700" : "hover:bg-green-700"}`}
            onClick={() => setFilter("past")}
            aria-label="Показать прошедшие мероприятия"
          >
            Прошедшие мероприятия
          </Button>
        </div>
        <div className="block-events-lk grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
          {filteredEvents.length > 0 ? (
            filteredEvents.slice(0, visibleCount).map((event) => (
              <div
                key={event.id}
                className="card-event-lk hover:shadow-2xl border border-green-900 rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={event.imageUrl}
                    alt={`Изображение мероприятия: ${event.title}`}
                    fill
                    className="rounded-t-lg object-cover"
                  />
                </div>
                <div className="about-event-lk p-4 flex flex-col gap-2">
                  <Link href={`/event/${event.id}`} className="text-lg font-semibold text-green-900 hover:text-green-700">
                    {event.title}
                  </Link>
                  <span className="text-sm text-gray-600">{event.date}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Мероприятия не найдены</p>
          )}
          {filteredEvents.length > visibleCount && (
            <div className="col-span-full text-center pt-1">
              <Button
                onClick={handleShowMore}
                className="bg-green-900 text-white hover:bg-green-700 transition duration-300"
              >
                Показать еще
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsInnerLk;