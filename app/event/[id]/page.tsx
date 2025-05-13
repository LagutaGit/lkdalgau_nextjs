"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import Link from "next/link";

// Расширенный интерфейс для детальной информации
export interface EventDetailItem extends EventItem {
  description: string;
  location: string;
  time: string;
}

export default function EventDetail() {
  const params = useParams();
  const eventId = parseInt(params.id as string, 10);

  // Пример данных с детальной информацией (замените на ваш массив или API)
  const mockEvents: EventDetailItem[] = [
    {
      id: 1,
      title: "Название 1",
      date: "2023-06-14",
      imageUrl: "https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG",
      description:
        "Это описание первого мероприятия. Здесь можно рассказать о целях, формате и участниках. Мероприятие включает практические занятия и лекции от экспертов.",
      location: "г. Москва, ул. Ленина, 10",
      time: "10:00 - 17:00",
    },
    {
      id: 2,
      title: "Название 2",
      date: "2023-07-15",
      imageUrl: "https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG",
      description:
        "Описание второго мероприятия. Подробности о программе и спикерах. Участники получат сертификаты.",
      location: "г. Санкт-Петербург, пр. Невский, 5",
      time: "14:00 - 19:00",
    },
    {
      id: 3,
      title: "Название 3",
      date: "2025-08-15",
      imageUrl: "https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG",
      description:
        "Описание третьего мероприятия. Будут рассмотрены новые тренды и технологии.",
      location: "г. Киев, ул. Крещатик, 15",
      time: "09:00 - 18:00",
    },
    {
      id: 4,
      title: "Название 4",
      date: "2023-07-15",
      imageUrl: "https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG",
      description:
        "Описание четвёртого мероприятия. Практическая часть с акцентом на навыки.",
      location: "г. Минск, пр. Победителей, 20",
      time: "13:00 - 16:00",
    },
    {
      id: 5,
      title: "Название 5",
      date: "2023-07-15",
      imageUrl: "https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG",
      description:
        "Описание пятого мероприятия. Интерактивный формат с участием аудитории.",
      location: "г. Новосибирск, ул. Горская, 7",
      time: "11:00 - 15:00",
    },
  ];

  const event = mockEvents.find((e) => e.id === eventId);

  if (!event) {
    return <div className="pt-8 text-center text-gray-500">Мероприятие не найдено</div>;
  }

  return (
    <div className="event-detail max-w-4xl mx-auto pt-8 px-4">
      <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-md">
        <Image
          src={event.imageUrl}
          alt={`Изображение мероприятия: ${event.title}`}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="mt-6">
        <h1 className="text-3xl font-bold text-green-900">{event.title}</h1>
        <p className="text-sm text-gray-600 mt-2">{event.date}</p>
        <div className="mt-4 space-y-4">
          <p className="text-gray-700">{event.description}</p>
          <p className="text-gray-600"><strong>Место проведения:</strong> {event.location}</p>
          <p className="text-gray-600"><strong>Время:</strong> {event.time}</p>
          <Button
            className="mt-4 bg-green-900 text-white rounded-lg px-6 py-2 hover:bg-green-700 transition-colors"
            asChild
          >
            <Link href="/">Вернуться к списку</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}