import { NextResponse } from 'next/server';

export async function GET() {
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
  };
  return NextResponse.json(userData);
}