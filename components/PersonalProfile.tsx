'use client';

import { useState } from 'react';
import {
  CalendarDays,
  Camera,
  Eye,
  EyeClosed,
  GraduationCap,
  Mail,
  Map,
  Pencil,
  Phone,
  School,
  Shapes,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import React from 'react';

// Интерфейс для пользователя
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

interface PersonalProfileProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

// Компонент для управления видимостью текста
const ToggleVisibility = ({ label, children }: { label: React.ReactElement; children: string }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex items-center gap-2">
      {label && <span className="mr-2">{label}</span>}
      <p>{isVisible ? children : '*****'}</p>
      <button onClick={() => setIsVisible(true)} className="focus:outline-none">
        <Eye size={18} />
      </button>
      <button onClick={() => setIsVisible(false)} className="focus:outline-none">
        <EyeClosed size={18} />
      </button>
    </div>
  );
};

const PersonalProfile = ({ user, setUser }: PersonalProfileProps) => {
  const alerttt = () => {
    alert('ssss');
  };

  return (
    <div className="w-full">
      <h2 className="text-5xl text-green-900">Личный профиль</h2>
      <div className="images-profile lg:flex pt-5 z-10 gap-4">
        <div className="block-left-img mb-5 border-solid border-green-900 relative flex-1 h-[250px] overflow-hidden rounded-2xl">
          <div className="repair-image-camera absolute top-2 right-2 cursor-pointer rounded-full shadow-md z-10">
            <button onClick={alerttt} className="p-1">
              <Camera color="#2A632C" size={24} />
            </button>
          </div>
          <Image
            src="/projects/banner-1.jpg"
            alt="Левое изображение профиля"
            fill
            className="rounded-2xl object-cover" // Перенесли object-fit в className
          />
        </div>

        <div className="block-right-img border-solid border-green-900 relative flex-4 h-[250px] overflow-hidden rounded-2xl">
          <div className="repair-image-camera absolute top-2 right-2 cursor-pointer rounded-full shadow-md z-10">
            <button onClick={alerttt} className="p-1">
              <Camera color="#2A632C" size={24} />
            </button>
          </div>
          <div className="absolute top-2 right-12 z-5">
            <Image src="./images/schoolUniversity.svg" width={200} height={200} alt="Логотип школы" />
          </div>
          <Image
            src="/images/banner.png"
            alt="Правое изображение профиля"
            fill
            className="rounded-2xl object-cover" // Перенесли object-fit в className
          />
        </div>
      </div>

      <div className="name-student flex justify-between pt-5">
        <h2 className="text-4xl text-green-900">{user.fullName}</h2>
        <button onClick={alerttt} className="cursor-pointer">
          <Pencil color="#2A632C" />
        </button>
      </div>

      <div className="informarions lg:flex justify-between pt-5 items-center flex-wrap gap-4">
        <Button onClick={alerttt} className="bg-green-800 text-white cursor-pointer">
          {user.points}
        </Button>

        <ToggleVisibility label={<><CalendarDays className="pr-2" /></>}>
          {user.age}
        </ToggleVisibility>

        <ToggleVisibility label={<><Map className="pr-2" /></>}>
          {user.city}
        </ToggleVisibility>

        <ToggleVisibility label={<><Phone className="pr-2" /></>}>
          {user.phone}
        </ToggleVisibility>

        <ToggleVisibility label={<><Mail className="pr-2" /></>}>
          {user.email}
        </ToggleVisibility>

        <ToggleVisibility label={<><GraduationCap className="pr-2" /></>}>
          {user.education}
        </ToggleVisibility>

        <ToggleVisibility label={<><School className="pr-2" /></>}>
          {user.school}
        </ToggleVisibility>

        <ToggleVisibility label={<><Shapes className="pr-2" /></>}>
          {user.grade}
        </ToggleVisibility>
      </div>
    </div>
  );
};

export default PersonalProfile;