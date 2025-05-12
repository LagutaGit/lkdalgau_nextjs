'use client';

import PersonalProfile from "@/components/PersonalProfile";
import { useState, useEffect } from 'react';
import EventsInnerLk, { EventItem } from '@/components/EventsInnerLk';

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
  

export default function NewsInner(){
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
    
      const [events, setEvents] = useState<EventItem[]>([]);
    return <> 
         <PersonalProfile user={user} setUser={setUser} />
         <EventsInnerLk />
    </>
}