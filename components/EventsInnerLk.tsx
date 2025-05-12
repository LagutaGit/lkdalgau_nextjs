'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import React, { useState } from 'react';
import Link from 'next/link';

// Экспортируем интерфейс
export interface EventItem {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
}
// Интерфейс для пропсов компонента
interface EventsInnerLkProps {
  events?: EventItem[]; // Данные будут подтягиваться с бэкенда
}

const EventsInnerLk = ({ events = [] }: EventsInnerLkProps) => {
  // Заглушка данных (будет заменена на данные с бэкенда)
  const mockEvents: EventItem[] = [
    {
      id: 1,
      title: 'Название мероприятия',
      date: '14.06.2023',
      imageUrl: 'https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG',
    },
    {
      id: 2,
      title: 'Второе мероприятие',
      date: '15.07.2023',
      imageUrl: 'https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG',
    },
    {
      id: 3,
      title: 'Третье мероприятие',
      date: '15.08.2025',
      imageUrl: 'https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG',
    },
    {
      id: 4,
      title: 'Четвертое мероприятие',
      date: '15.07.2023',
      imageUrl: 'https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG',
    },
    {
      id: 5,
      title: 'Пятое мероприятие',
      date: '15.07.2023',
      imageUrl: 'https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG',
    },
    {
        id: 6,
        title: 'Название мероприятия',
        date: '14.06.2023',
        imageUrl: 'https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG',
      },
      {
        id: 7,
        title: 'Второе мероприятие',
        date: '15.07.2023',
        imageUrl: 'https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG',
      },
      {
        id: 8,
        title: 'Третье мероприятие',
        date: '15.08.2025',
        imageUrl: 'https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG',
      },
      {
        id: 9,
        title: 'Четвертое мероприятие',
        date: '15.07.2023',
        imageUrl: 'https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG',
      },
      {
        id: 10,
        title: 'Пятое мероприятие',
        date: '15.07.2023',
        imageUrl: 'https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG',
      },
      {
        id: 11,
        title: 'Название мероприятия',
        date: '14.06.2023',
        imageUrl: 'https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG',
      },
      {
        id: 12,
        title: 'Второе мероприятие',
        date: '15.07.2023',
        imageUrl: 'https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG',
      },
      {
        id: 13,
        title: 'Третье мероприятие',
        date: '15.08.2025',
        imageUrl: 'https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG',
      },
      {
        id: 14,
        title: 'Четвертое мероприятие',
        date: '15.07.2023',
        imageUrl: 'https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG',
      },
      {
        id: 15,
        title: 'Пятое мероприятие',
        date: '15.07.2023',
        imageUrl: 'https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG',
      },
  ];

  // Состояние для фильтра
  const [filter, setFilter] = useState<'all' | 'participated' | 'past'>('all');

  // Пример состояния участия пользователя (будет подтягиваться с бэкенда)
  const [participatedEvents] = useState<number[]>([1, 4]); // ID мероприятий, в которых участвовал пользователь

  // Состояние для количества видимых мероприятий (по 6 для 2 строк с 3 столбцами)
  const [visibleCount, setVisibleCount] = useState(6); // Начальное значение - 2 строки (6 элементов)

  // Используем mockEvents, если events не передан
  const displayEvents = events.length > 0 ? events : mockEvents;

  // Фильтрация мероприятий
  const filteredEvents = displayEvents.filter((event) => {
    const eventDate = new Date(event.date);
    const currentDate = new Date();

    if (filter === 'participated') {
      return participatedEvents.includes(event.id);
    } else if (filter === 'past') {
      return eventDate < currentDate;
    }
    return true; // 'all' показывает все мероприятия
  });

  // Обработка клика "Показать больше"
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5); // Увеличиваем на 2 элемента
  };

  return (
    <div className="pt-5">
      <h2 className="text-4xl text-green-900">Мероприятия</h2>
      <div className="events-wrapper mb-5">
        <div className="buttons-events-lk pt-5 lg:flex gap-4">
          <Button
            variant="outline"
            className={`border-green-900 mr-1 text-green-900 ${filter === 'all' ? 'bg-green-100' : 'hover:bg-green-100'}`}
            onClick={() => setFilter('all')}
            aria-label="Показать все мероприятия"
          >
            Участие
          </Button>
          <Button
            className={`bg-green-900 mb-5  text-white ${filter === 'participated' ? 'bg-green-700' : 'hover:bg-green-700'}`}
            onClick={() => setFilter('participated')}
            aria-label="Показать мероприятия, в которых участвовал"
          >
            Участвовал
          </Button>
          <Button
            className={`bg-green-900 text-white ${filter === 'past' ? 'bg-green-700' : 'hover:bg-green-700'}`}
            onClick={() => setFilter('past')}
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
                className="card-event-lk hover:shadow-2xl bg-white border border-green-900 rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={event.imageUrl}
                    alt={`Изображение мероприятия: ${event.title}`}
                    fill
                    className="rounded-t-lg object-cover" // Используем className вместо style
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