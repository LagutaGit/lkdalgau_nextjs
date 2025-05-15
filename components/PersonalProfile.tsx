"use client";

import { useState } from "react";
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
} from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useUser } from "@/context/UserContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Импортируем Dialog из shadcn
import { Input } from "@/components/ui/input"; // Для загрузки файла

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
  avatarUrl?: string; // Добавляем поле для аватара
  rightImageUrl?: string; // Добавляем поле для правого изображения
}

interface PersonalProfileProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const ToggleVisibility = ({ label, children }: { label: React.ReactElement; children: string }) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="flex items-center gap-2">
      {label && <span className="mr-2">{label}</span>}
      <p>{isVisible ? children : "*****"}</p>
      <button onClick={() => setIsVisible(true)} className="focus:outline-none" aria-label="Показать текст">
        <Eye size={18} />
      </button>
      <button onClick={() => setIsVisible(false)} className="focus:outline-none" aria-label="Скрыть текст">
        <EyeClosed size={18} />
      </button>
    </div>
  );
};

const PersonalProfile = ({ user, setUser }: PersonalProfileProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImageSide, setSelectedImageSide] = useState<"left" | "right">("left");
  const [file, setFile] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile); // Создаем временный URL для предпросмотра
      if (selectedImageSide === "left") {
        setUser((prev) => ({ ...prev, avatarUrl: url }));
      } else {
        setUser((prev) => ({ ...prev, rightImageUrl: url }));
      }
    }
  };

  const handleCameraClick = (side: "left" | "right") => {
    setSelectedImageSide(side);
    setOpenDialog(true);
  };

  return (
    <div className="w-full">
      <h2 className="text-5xl text-green-900">Личный профиль</h2>
      <div className="images-profile lg:flex pt-5 z-10 gap-4">
        <div className="block-left-img mb-5 border-solid border-green-900 relative flex-1 h-[250px] overflow-hidden rounded-2xl">
          <div className="repair-image-camera absolute top-2 right-2 cursor-pointer rounded-full shadow-md z-10">
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild>
                <button onClick={() => handleCameraClick("left")} className="p-1 cursor-pointer">
                  <Camera color="#2A632C" size={24} />
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Изменить аватар</DialogTitle>
                </DialogHeader>
                <Input type="file" onChange={handleImageChange} className="mt-4" />
              </DialogContent>
            </Dialog>
          </div>
          <Image
            src={user.avatarUrl || "/projects/banner-1.jpg"}
            alt="Левое изображение профиля"
            fill
            className="rounded-2xl object-cover"
          />
        </div>

        <div className="block-right-img border-solid border-green-900 relative flex-[4] h-[250px] overflow-hidden rounded-2xl">
          <div className="repair-image-camera absolute top-2 right-2 cursor-pointer rounded-full shadow-md z-10">
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild>
                <button onClick={() => handleCameraClick("right")} className="p-1 cursor-pointer">
                  <Camera color="#2A632C" size={24} />
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Изменить обложку</DialogTitle>
                </DialogHeader>
                <Input type="file" onChange={handleImageChange} className="mt-4" />
              </DialogContent>
            </Dialog>
          </div>
          <div className="absolute top-2 right-12 z-5">
            <Image src="/images/schoolUniversity.svg" width={200} height={200} alt="Логотип школы" />
          </div>
          <Image
            src={user.rightImageUrl || "/images/banner.png"}
            alt="Правое изображение профиля"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
      </div>

      <div className="name-student flex justify-between pt-5">
        <h2 className="text-4xl text-green-900">{user.fullName}</h2>
        <button  className="cursor-pointer">
          <Pencil color="#2A632C" />
        </button>
      </div>

      <div className="informarions lg:flex justify-between pt-5 items-center flex-wrap gap-4">
        <Button  className="bg-green-800 text-white cursor-pointer">
          {user.points} Б
        </Button>

        <ToggleVisibility label={<CalendarDays className="pr-2" />}>
          {user.age}
        </ToggleVisibility>

        <ToggleVisibility label={<Map className="pr-2" />}>
          {user.city}
        </ToggleVisibility>

        <ToggleVisibility label={<Phone className="pr-2" />}>
          {user.phone}
        </ToggleVisibility>

        <ToggleVisibility label={<Mail className="pr-2" />}>
          {user.email}
        </ToggleVisibility>

        <ToggleVisibility label={<GraduationCap className="pr-2" />}>
          {user.education}
        </ToggleVisibility>

        <ToggleVisibility label={<School className="pr-2" />}>
          {user.school}
        </ToggleVisibility>

        <ToggleVisibility label={<Shapes className="pr-2" />}>
          {user.grade}
        </ToggleVisibility>
      </div>
    </div>
  );
};

export default PersonalProfile;