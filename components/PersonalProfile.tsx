import { Camera } from "lucide-react";
import Image from "next/image";

const PersonalProfile = () => {
  return (
    <div className="w-full">
      <h2 className="text-5xl text-green-900">Личный профиль</h2>
      <div className="images-profile lg:flex pt-5 z-10 gap-4">
        {/* Левый блок */}
        <div
          className="block-left-img mb-5 border-solid border-green-900 relative flex-1 h-[250px] overflow-hidden rounded-2xl"
        >
          <div className="repair-image-camera absolute top-2 right-2 cursor-pointer">
            <Camera color="#2A632C" className="m-2" />
          </div>
          <Image
            src="/projects/banner-1.jpg"
            alt=""
            fill // Заполняет весь контейнер
            style={{ objectFit: "cover" }} // Сохраняет пропорции изображения
            className="rounded-2xl"
          />
        </div>

        {/* Правый блок */}
        <div
          className="block-right-img border-solid border-green-900 relative flex-4 h-[250px] overflow-hidden rounded-2xl"
        >
          <div className="repair-image-camera absolute top-2 right-2 cursor-pointer">
            <Camera color="#2A632C" className="m-2" />
          </div>
          <Image
            src="/images/banner.png"
            alt=""
            fill // Заполняет весь контейнер
            style={{ objectFit: "cover" }} // Сохраняет пропорции изображения
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;