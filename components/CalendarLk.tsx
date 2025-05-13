'use client';

import { Calendar } from './ui/calendar';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Интерфейс для мероприятия
interface Event {
  date: Date;
  title: string;
  description: string;
}

const CalendarLk = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const router = useRouter();

  // Список мероприятий (mock data)
  const events: Event[] = [
    {
      date: new Date('2025-05-14'),
      title: 'Мероприятие 1',
      description: 'Спортивный марафон в Благовещенске',
    },
    {
      date: new Date('2025-05-20'),
      title: 'Мероприятие 2',
      description: 'Тренинг по программирование',
    },
    {
      date: new Date('2025-06-01'),
      title: 'Мероприятие 3',
      description: 'Школьный фестиваль',
    },
  ];

  // Проверка, есть ли мероприятие на дату
  const hasEvent = (date: Date) => {
    return events.some((event) => event.date.toDateString() === date.toDateString());
  };

  // Обработка выбора даты
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date && hasEvent(date)) {
      router.push(`/event/${date.toISOString().split('T')[0]}`);
    }
  };

  return (
    <div className="pt-5">
      <h2 className="text-4xl text-green-900 md:text-5xl">Календарь</h2>
      <div className="pt-5">
        <Calendar
          mode="single"
          numberOfMonths={10}
          selected={selectedDate}
          onSelect={handleDateSelect}
          className="w-full min-w-[300px] max-w-full rounded-lg shadow-md border border-green-900 p-2 sm:p-4 md:p-6"
          modifiers={{
            event: (date) => hasEvent(date),
          }}
          modifiersStyles={{
            event: {
              backgroundColor: '#34D399',
              color: '#FFFFFF',
              borderRadius: '50%',
            },
          }}
        />
      </div>
    </div>
  );
};

export default CalendarLk;