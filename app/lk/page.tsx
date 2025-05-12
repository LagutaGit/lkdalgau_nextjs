'use client';

import { useState } from 'react';
import ActivityProfileUser from "@/components/ActivityProfileUser";
import PersonalProfile from "@/components/PersonalProfile";
import InterestsUser from '@/components/InterestsUser';
import HistoryBalls from '@/components/HistoryBalls';
import EventsInnerLk from '@/components/EventsInnerLk';

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

export default function Lk() {
  const [user, setUser] = useState<User>({
    points: '150 Б',
    age: '15 лет',
    city: 'Благовещенск',
    phone: '8(800)5553535',
    email: 'example@mail.ru',
    education: 'Общеобразовательное',
    school: 'Школа',
    grade: '9Б',
    fullName: 'Иванова Ольга Ивановна',
    /*Обратить внимание*/
    interests: 'Люблю',
  });

  // В будущем здесь можно добавить useEffect для загрузки данных с бэкенда
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/api/user');
  //       const data = await response.json();
  //       setUser(prev => ({ ...prev, ...data }));
  //     } catch (error) {
  //       console.error('Ошибка загрузки данных:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <PersonalProfile user={user} setUser={setUser} />
      <ActivityProfileUser user={user} />
      <InterestsUser user={user} setUser={setUser}/>
      <HistoryBalls />
      <EventsInnerLk />
    </div>
  );
}