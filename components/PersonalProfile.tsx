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

// Компонент для управления видимостью текста
const ToggleVisibility = ({ label, children }) => {
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

const PersonalProfile = () => {
  const alerttt = () => {
    alert('ssss');
  };

  return (
    <div className="w-full">
      <h2 className="text-5xl text-green-900">Личный профиль</h2>
      <div className="images-profile lg:flex pt-5 z-10 gap-4">
        {/* Левый блок */}
        <div
          className="block-left-img mb-5 border-solid border-green-900 relative flex-1 h-[250px] overflow-hidden rounded-2xl"
        >
          {/* Кнопка с камерой — поверх изображения */}
          <div className="repair-image-camera absolute top-2 right-2 cursor-pointer rounded-full shadow-md z-10">
            <button onClick={alerttt} className="p-1">
              <Camera color="#2A632C" size={24} />
            </button>
          </div>

          {/* Изображение */}
          <Image
            src="/projects/banner-1.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>

        {/* Правый блок */}
        <div
          className="block-right-img border-solid border-green-900 relative flex-4 h-[250px] overflow-hidden rounded-2xl"
        >
          {/* Кнопка с камерой — поверх изображения */}
          <div className="repair-image-camera absolute top-2 right-2 cursor-pointer rounded-full shadow-md z-10">
            <button onClick={alerttt} className="p-1">
              <Camera color="#2A632C" size={24} />
            </button>
          </div>

          <div className="absolute top-2 right-12 z-5">
            <Image src="./images/schoolUniversity.svg" width={200} height={200} alt="" />
          </div>

          {/* Изображение */}
          <Image
            src="/images/banner.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>
      </div>

      <div className="name-student flex justify-between pt-5">
        <h2 className="text-4xl text-green-900">Иванова Ольга Ивановна</h2>
        <button onClick={alerttt} className="cursor-pointer">
          <Pencil color="#2A632C" />
        </button>
      </div>

      <div className="informarions lg:flex justify-between pt-5 items-center flex-wrap gap-4">
        <Button onClick={alerttt} className="bg-green-800 text-white cursor-pointer mb-5">
          {/* Тут сделать переменную */}
          150 Б
        </Button>

        {/* Возраст */}
        <ToggleVisibility label={<><CalendarDays className="pr-2" /></>}>
          <p>15 лет</p>
        </ToggleVisibility>

        {/* Город */}
        <ToggleVisibility label={<><Map className="pr-2" /> </>}>
          <p>Благовещенск</p>
        </ToggleVisibility>

        {/* Телефон */}
        <ToggleVisibility label={<><Phone className="pr-2" /> </>}>
          <p>8(800)5553535</p>
        </ToggleVisibility>

        {/* Email */}
        <ToggleVisibility label={<><Mail className="pr-2" /> </>}>
          <p>example@mail.ru</p>
        </ToggleVisibility>

        {/* Образование */}
        <ToggleVisibility label={<><GraduationCap className="pr-2" /> </>}>
          <p>Общеобразовательное</p>
        </ToggleVisibility>

        {/* Учебное заведение */}
        <ToggleVisibility label={<><School className="pr-2" /> </>}>
          <p>Школа</p>
        </ToggleVisibility>

        {/* Класс */}
        <ToggleVisibility label={<><Shapes className="pr-2" /> </>}>
          <p>9Б</p>
        </ToggleVisibility>
      </div>
    </div>
  );
};

export default PersonalProfile;