import { NextResponse } from 'next/server';

export async function GET() {
  const events = [
    { id: 1, title: 'Мероприятие 1', date: '2023-06-14', imageUrl: 'https://example.com/image.jpg' },
    { id: 2, title: 'Мероприятие 2', date: '2023-07-15', imageUrl: 'https://example.com/image.jpg' },
    { id: 3, title: 'Мероприятие 2', date: '2023-07-15', imageUrl: 'https://example.com/image.jpg' },
    { id: 4, title: 'Мероприятие 2', date: '2023-07-15', imageUrl: 'https://example.com/image.jpg' },
    { id: 5, title: 'Мероприятие 2', date: '2023-07-15', imageUrl: 'https://example.com/image.jpg' },

  ];
  return NextResponse.json(events);
}