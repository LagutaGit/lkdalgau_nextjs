"use client"
import { CalendarDays, Camera, Eye, EyeClosed, Mail, Map, Pencil, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const PersonalProfile = () => {
    const alerttt = () => {
        alert("ssss");
      };
    const years = [];
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
                <Image src="./images/schoolUniversity.svg" width={200} height={200} alt=""/>
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
      <div className="informarions flex  pt-5 items-center">
        <Button onClick={alerttt} className="bg-green-800 text-white cursor-pointer">
            {/*Тут сделать переменную*/}
            150 Б
        </Button>
        <div className="years flex pl-5">
            <CalendarDays className="pr-2"/>
            {/*Тут сделать переменную*/}
            <p>15 лет</p>
        </div>
        <div className="from-student pl-5 flex">
            <Map className="pr-2"/>
            {/*Тут сделать переменную*/}
                <p>Благовещенск</p>
            <Eye className="pl-2"/>
            <EyeClosed className="pl-2"/>
        </div>
        <div className="phone-number pl-5 flex">
            <Phone className="pr-2"/>
            {/*Тут сделать переменную*/}
            <p>8(800)5553535</p>
            <Eye className="pl-2"/>
            <EyeClosed className="pl-2"/>
        </div>
        <div className="mail-student pl-5 flex">
            <Mail className="pr-2"/>
            {/*Тут сделать переменную*/}
            <p>example@mail.ru</p>
            <Eye className="pl-2"/>
            <EyeClosed className="pl-2"/>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;