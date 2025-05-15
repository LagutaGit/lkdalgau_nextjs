import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const userData = {
      points: '200 Б',
      age: '16 лет',
      city: 'Благовещенск',
      phone: '8(800)5553535',
      email: 'example@mail.ru',
      education: 'Общеобразовательное',
      school: 'Школа',
      grade: '9Б',
      fullName: 'Иванова Ольга Ивановна',
      interests: 'Чтение, Спорт, Программирование',
      avatarUrl: 'https://dalgau.ru/upload/iblock/fbe/e0w5ugb6fieru4j0o9p2wu86z0bcosgy/WhatsApp_Image_2025_05_06_at_14.28.44.jpeg', // Пример из вашего проекта
    };
    return NextResponse.json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}