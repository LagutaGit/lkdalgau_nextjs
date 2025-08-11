'use client';

import { Calendar } from './ui/calendar';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import "react-day-picker/dist/style.css"; // Без изменений: Импорт стилей react-day-picker
import { ru } from 'date-fns/locale';
import { format } from 'date-fns';
import { DayProps } from 'react-day-picker'; // Добавил: Импорт DayProps для типизации компонента Day, чтобы избежать TS-ошибок с onClick и displayMonth

// Интерфейс для мероприятия (без изменений)
interface Event {
  id: number;
  date: Date;
  title: string;
  description: string;
}

const CalendarLk = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const router = useRouter();

  // Список мероприятий с ID (mock data, без изменений)
  const events: Event[] = [
    { id: 1, date: new Date('2025-05-14'), title: 'Мероприятие 1', description: 'Спортивный марафон в Благовещенске' },
    { id: 2, date: new Date('2025-05-20'), title: 'Мероприятие 2', description: 'Тренинг по программированию' },
    { id: 3, date: new Date('2025-06-01'), title: 'Мероприятие 3', description: 'Школьный фестиваль' },
    { id: 4, date: new Date('2025-08-01'), title: 'Мероприятие 4', description: 'Школьный фестиваль' },
  ];

  // Проверка, есть ли мероприятие на дату (без изменений)
  const hasEvent = (date: Date) => {
    return events.some((event) => event.date.toDateString() === date.toDateString());
  };

  // Поиск мероприятия по дате (без изменений)
  const getEvent = (date: Date) => {
    return events.find((event) => event.date.toDateString() === date.toDateString());
  };

  // Обработка перехода на страницу мероприятия по ID (без изменений)
  const handleNavigate = (date: Date) => {
    const event = getEvent(date);
    if (event) {
      setSelectedDate(date);
      router.push(`/event/${event.id}`);
    }
  };

  return (
    <div className="pt-5">
      <h2 className="text-4xl text-green-900 md:text-5xl">Календарь</h2>
      <div className="pt-5">
        <Calendar
          mode="single" // Без изменений
          numberOfMonths={10} // Без изменений: Оставил 10, но рекомендую уменьшить для мобильных
          selected={selectedDate} // Без изменений
          onSelect={(date) => setSelectedDate(date)} // Без изменений
          locale={ru} // Добавил: Локализация на русский для месяцев/дней
          className="w-full min-w-[300px] max-w-full rounded-lg shadow-md border border-green-900 p-2 sm:p-4 md:p-6 animate-fade-in" // Добавил: Анимацию из tw-animate-css для плавного появления
          modifiers={{
            event: (date) => hasEvent(date), // Без изменений
          }}
          modifiersStyles={{
            event: {
              backgroundColor: '#34D399', // Без изменений
              color: '#FFFFFF',
              borderRadius: '50%',
              fontWeight: 'bold', // Добавил: Жирный шрифт для выделения дней с событиями
            },
          }}
          components={{
            // Изменил: Типизировал Day как (props: DayProps) => ..., чтобы TS знал о displayMonth и onClick
            Day: (props: DayProps) => {
              const { date } = props; // Изменил: Деструктуризировал только date, остальное используем из props напрямую (чтобы избежать TS-ошибки с ...props)
              const event = getEvent(date);
              const isSelected = selectedDate?.toDateString() === date.toDateString();

              if (event) {
                return (
                  <Popover>
                    <PopoverTrigger asChild>
                      <div
                        role="button" // Без изменений
                        tabIndex={0} // Без изменений
                        className={`size-6 sm:size-8 md:size-10 p-0 font-normal flex items-center justify-center outline-none rounded-full cursor-pointer hover:bg-green-200 transition-colors ${ // Добавил: Hover-эффект и transition для UX
                          isSelected ? 'bg-primary text-primary-foreground' : ''
                        }`}
                        // Удалил: onKeyDown и props.setOpen (не нужны, Popover сам обрабатывает клавиши; это фиксит ошибку доступности)
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
                      className="w-80 bg-white shadow-lg border border-green-900 rounded-lg p-4 animate-pop-in" // Добавил: Анимацию из tw-animate-css для Popover
                    >
                      <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-semibold text-green-900">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-600">{event.description}</p> 
                        <span className="text-xs text-gray-500">
                          {format(date, 'd MMMM yyyy', { locale: ru })} 
                        </span>
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
                  className={`size-6 sm:size-8 md:size-10 p-0 font-normal flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors ${ // Добавил: Hover-эффект и transition для дней без событий
                    isSelected ? 'bg-primary text-primary-foreground' : ''
                  }`}
                  onClick={() => props.onClick?.()} // Изменил: Вызов props.onClick() без date (в DayProps onClick не принимает аргументы; date уже известен внутри)
                >
                  {date.getDate()}
                </button>
              );
            },
          }}
        />
      </div>
      {/* Добавил: Сообщения для улучшения UX при отсутствии выбора или событий */}
      {!selectedDate && <p className="mt-4 text-gray-500">Выберите дату для просмотра событий.</p>}
      {selectedDate && !getEvent(selectedDate) && <p className="mt-4 text-gray-500">На выбранную дату событий нет.</p>}
    </div>
  );
};

export default CalendarLk;