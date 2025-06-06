'use client';

import { useState, useEffect } from 'react'; // Убрали лишний импорт React
import ActivityProfileUser from "@/components/ActivityProfileUser";
import PersonalProfile from "@/components/PersonalProfile";
import InterestsUser from '@/components/InterestsUser';
import HistoryBalls from '@/components/HistoryBalls';
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

export default function Lk() {
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

  

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("/api/events");
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      } else {
        console.error("Ошибка загрузки данных");
      }
    };
    fetchEvents();
  }, []);

  //useEffect(() => {
  //  const fetchData = async () => {
  //    try {
  //      const response = await fetch('/api/user');
  //      const data = await response.json();
  //      setUser(prev => ({ ...prev, ...data }));
  //    } catch (error) {
  //      console.error('Ошибка загрузки данных:', error);
  //    }
  //  };
  //  const fetchEvents = async () => {
  //    try {
  //      const response = await fetch('/api/events');
  //      const data = await response.json();
  //      setEvents(data);
  //    } catch (error) {
  //      console.error('Ошибка загрузки мероприятий:', error);
  //    }
  //  };
  //  fetchData();
  //  fetchEvents();
  //}, []);

  return (
    <>
      <PersonalProfile user={user} setUser={setUser} />
      <ActivityProfileUser user={user} />
      <InterestsUser user={user} setUser={setUser} />
      <HistoryBalls />
      <EventsInnerLk events={events} />
    </>
  );
}