'use client';

import { useParams } from 'next/navigation';

interface Event {
  id: number;
  date: Date;
  title: string;
  description: string;
}

const events: Event[] = [
  { id: 1, date: new Date('2025-05-14'), title: 'Мероприятие 1', description: 'Спортивный марафон в Благовещенске' },
  { id: 2, date: new Date('2025-05-20'), title: 'Мероприятие 2', description: 'Тренинг по программированию' },
  { id: 3, date: new Date('2025-06-01'), title: 'Мероприятие 3', description: 'Школьный фестиваль' },
  { id: 4, date: new Date('2025-08-01'), title: 'Мероприятие 4', description: 'Школьный фестиваль' },
];

export default function EventPage() {
  const params = useParams();
  const eventId = parseInt(params.id as string, 10);
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return <div className="pt-5 text-center text-gray-500">Мероприятие не найдено</div>;
  }

  return (
    <div className="pt-5 max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-green-900 mb-4">{event.title}</h1>
      <p className="text-gray-700">{event.description}</p>
      <p className="text-gray-500 mt-2">Дата: {event.date.toLocaleDateString()}</p>
    </div>
  );
}