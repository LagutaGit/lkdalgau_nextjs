import { notFound } from 'next/navigation';

export default function EventPage({ params }: { params: { id: string } }) {
  const eventId = parseInt(params.id, 10);
  // Логика загрузки данных мероприятия по ID
  return <div>Мероприятие {eventId}</div>;
}