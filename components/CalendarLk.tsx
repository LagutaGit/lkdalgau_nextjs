'use client';

import { Calendar } from './ui/calendar';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

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
      description: 'Тренинг по программированию',
    },
    {
      date: new Date('2025-06-01'),
      title: 'Мероприятие 3',
      description: 'Школьный фестиваль',
    },
    {
      date: new Date('2025-08-01'),
      title: 'Мероприятие 4',
      description: 'Школьный фестиваль',
    },
  ];

  // Проверка, есть ли мероприятие на дату
  const hasEvent = (date: Date) => {
    return events.some((event) => event.date.toDateString() === date.toDateString());
  };

  // Поиск мероприятия по дате
  const getEvent = (date: Date) => {
    return events.find((event) => event.date.toDateString() === date.toDateString());
  };

  // Обработка перехода на страницу мероприятия
  const handleNavigate = (date: Date) => {
    setSelectedDate(date);
    router.push(`/event/${date.toISOString().split('T')[0]}`);
  };

  // Обработка нажатия клавиш для доступности
  const handleKeyDown = (e: React.KeyboardEvent, date: Date, setOpen: (open: boolean) => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(true); // Открываем Popover
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
          onSelect={(date) => setSelectedDate(date)}
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
          components={{
            Day: ({ date, ...props }) => {
              const event = getEvent(date);
              const isSelected = selectedDate?.toDateString() === date.toDateString();

              if (event) {
                return (
                  <Popover>
                    <PopoverTrigger asChild>
                      <div
                        role="button"
                        tabIndex={0}
                        className={`size-6 sm:size-8 md:size-10 p-0 font-normal flex items-center justify-center outline-none rounded-full ${
                          isSelected ? 'bg-primary text-primary-foreground' : ''
                        }`}
                        onKeyDown={(e) => handleKeyDown(e, date, props.setOpen)}
                        style={
                          hasEvent(date)
                            ? { backgroundColor: '#34D399', color: '#FFFFFF', borderRadius: '50%' }
                            : {}
                        }
                      >
                        {date.getDate()}
                      </div>
                    </PopoverTrigger>
                    <PopoverContent
                      side="bottom"
                      align="center"
                      sideOffset={5}
                      className="w-80 bg-white shadow-lg border border-green-900 rounded-lg p-4"
                    >
                      <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-semibold text-green-900">
                          {event.title}
                        </h3>
                        <Button
                          onClick={() => handleNavigate(date)}
                          className="bg-green-900 text-white hover:bg-green-700"
                        >
                          Перейти к мероприятию
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                );
              }

              return (
                <button
                  className={`size-6 sm:size-8 md:size-10 p-0 font-normal flex items-center justify-center rounded-full ${
                    isSelected ? 'bg-primary text-primary-foreground' : ''
                  }`}
                  onClick={() => props.onSelect?.(date)}
                >
                  {date.getDate()}
                </button>
              );
            },
          }}
        />
      </div>
    </div>
  );
};

export default CalendarLk;