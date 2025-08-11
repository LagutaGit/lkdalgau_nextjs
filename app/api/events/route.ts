import { NextResponse } from 'next/server';

export async function GET() {
  const events = [
    // Изменил: Заменил заглушки на реальные URL с 'dalgau.ru' из вашего проекта, чтобы избежать ошибок с 'example.com'. Если нужны заглушки, верните обратно.
    { id: 1, title: 'Мероприятие 1', date: '2023-06-14', imageUrl: 'https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG' },
    { id: 2, title: 'Мероприятие 2', date: '2023-07-15', imageUrl: 'https://dalgau.ru/upload/iblock/fbe/e0w5ugb6fieru4j0o9p2wu86z0bcosgy/WhatsApp_Image_2025_05_06_at_14.28.44.jpeg' },
    { id: 3, title: 'Мероприятие 3', date: '2023-07-15', imageUrl: 'https://dalgau.ru/upload/iblock/8d0/5oav9lz657qug24zbsdjykjofh8u1jd3/WhatsApp_Image_2025_05_06_at_08.54.23_5_.jpeg' },
    { id: 4, title: 'Мероприятие 4', date: '2023-07-15', imageUrl: 'https://dalgau.ru/upload/iblock/7aa/a0rbww4xqeoce2hxniba3o31fnek5402/WhatsApp_Image_2025_05_06_at_08.54.23_4_.jpeg' },
    { id: 5, title: 'Мероприятие 5', date: '2023-07-15', imageUrl: 'https://dalgau.ru/upload/iblock/8d0/5oav9lz657qug24zbsdjykjofh8u1jd3/WhatsApp_Image_2025_05_06_at_08.54.23_5_.jpeg' },
  ];
  return NextResponse.json(events);
}