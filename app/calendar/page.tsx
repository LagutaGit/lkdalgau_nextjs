'use client';

import CalendarLk from "@/components/CalendarLk";
import PersonalProfile from "@/components/PersonalProfile";
import { useState } from 'react';

interface User {
  points: string;
  age: string;
  city: string;
  phone: string;
  email: string;
  education: string;
  school: string;
  grade: string;
  fullName: string;
  interests: string;
}

export default function Calendar() {
  const [user, setUser] = useState<User>({
    points: '150',
    age: '15 лет',
    city: 'Благовещенск',
    phone: '8(800)5553535',
    email: 'example@mail.ru',
    education: 'Общеобразовательное',
    school: 'Школа',
    grade: '9Б',
    fullName: 'Иванова Ольга Ивановна',
    interests: 'Чтение, Спорт, Программирование',
  });



  return (
    <>
      <PersonalProfile user={user} setUser={setUser} />
      <CalendarLk />
    </>
  );
}


