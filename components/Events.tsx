"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EventItem, eventsData } from "@/data/eventsData"; // Импортируем интерфейс и данные

const Events = () => {
  const [eventData, setEventData] = useState<EventItem[]>([]);
  // Добавил: Состояние для ошибок загрузки (улучшает UX, если API не работает)
  const [error, setError] = useState<string | null>(null);

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
          // Добавил: Установка ошибки для отображения
          setError("Ошибка загрузки данных с API. Используем локальные данные.");
        }
      } catch (error) {
        console.error("Ошибка при загрузке мероприятий:", error);
        setEventData(eventsData); // Резервные данные при ошибке
        setError("Ошибка сети. Используем локальные данные.");
      }
    };

    fetchEvents();
  }, []);

  // Форматирование даты для отображения в формате "2 Сентября"
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Дата неизвестна'; // Обработка невалидной даты
    }
    const day = date.getDate();
    const month = date.toLocaleString("ru-RU", { month: "long" });
    return `${day} ${month}`;
  };

  return (
    <div className="pt-5">
      <h2 className="text-5xl text-green-900">Мероприятия</h2>
      {/* Добавил: Отображение ошибки, если есть */}
      {error && <p className="text-red-500 mt-2">{error}</p>}
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
              // Изменено: Добавил max-h-96 (максимальная высота карточки ~384px), чтобы предотвратить растяжение. Подстройте значение по дизайну.
              className="p-1.5 border-green-900 hover:shadow-2xl/30 transition-shadow max-h-96"
            >
              <CardHeader className="p-0 rounded-2xl">
                {/* Изменено: Обернул Image в div с фиксированной высотой h-48 (192px) и overflow-hidden, чтобы изображение не растягивало карточку. */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <Image
                    // Изменено: Убрал фиксированные width/height, добавил fill для заполнения контейнера, object-cover для обрезки без искажения.
                    fill
                    alt={`Изображение мероприятия: ${event.title}`}
                    className="rounded-sm object-cover"
                    src={event.imageUrl}
                    // Добавил: Fallback на случай, если URL сломан (показывает серый placeholder)
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88v5dDwABYwLTwAAAABJRU5ErkJggg==';
                    }}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88v5dDwABYwLTwAAAABJRU5ErkJggg==" // Базовый blur-placeholder
                  />
                </div>
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
                  asChild
                  className="bg-green-800 text-white cursor-pointer"
                  aria-label="Подать заявку на мероприятие"
                >
                  <Link href={`/event/${event.id}`}>
                    Подать заявку
                  </Link>
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