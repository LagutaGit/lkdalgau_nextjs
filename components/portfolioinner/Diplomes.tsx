'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import { useState } from 'react';
import { Download, Eye, X } from 'lucide-react';

// Интерфейс для данных диплома
export interface DiplomaItem {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

// Интерфейс для пропсов компонента
interface DiplomesProps {
  diplomas?: DiplomaItem[]; // Данные будут подтягиваться с бэкенда в будущем
}

const Diplomes = ({ diplomas = [] }: DiplomesProps) => {
  // Заглушка данных (mock data)
  const mockDiplomas: DiplomaItem[] = [
    {
      id: 1,
      title: 'Диплом 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quidem natus labore nesciunt alias repudiandae exercitationem.',
      date: '2023-06-14',
      imageUrl: 'https://dalgau.ru/upload/iblock/fbe/e0w5ugb6fieru4j0o9p2wu86z0bcosgy/WhatsApp_Image_2025_05_06_at_14.28.44.jpeg',
    },
    {
      id: 2,
      title: 'Диплом 2',
      description:
        'Aperiam error aliquam cum ea. Dolorem vitae facilis cumque, eum sequi quod animi nesciunt!',
      date: '2023-07-15',
      imageUrl: 'https://dalgau.ru/upload/iblock/8d0/5oav9lz657qug24zbsdjykjofh8u1jd3/WhatsApp_Image_2025_05_06_at_08.54.23_5_.jpeg',
    },
    {
      id: 3,
      title: 'Диплом 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quidem natus labore nesciunt alias repudiandae exercitationem.',
      date: '2025-08-15',
      imageUrl: 'https://dalgau.ru/upload/iblock/8d0/5oav9lz657qug24zbsdjykjofh8u1jd3/WhatsApp_Image_2025_05_06_at_08.54.23_5_.jpeg',
    },
    {
      id: 4,
      title: 'Диплом 4',
      description:
        'Aperiam error aliquam cum ea. Dolorem vitae facilis cumque, eum sequi quod animi nesciunt!',
      date: '2023-07-15',
      imageUrl: 'https://dalgau.ru/upload/iblock/7aa/a0rbww4xqeoce2hxniba3o31fnek5402/WhatsApp_Image_2025_05_06_at_08.54.23_4_.jpeg',
    },
    {
      id: 5,
      title: 'Диплом 5',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quidem natus labore nesciunt alias repudiandae exercitationem.',
      date: '2023-07-15',
      imageUrl: 'https://dalgau.ru/upload/iblock/8d0/5oav9lz657qug24zbsdjykjofh8u1jd3/WhatsApp_Image_2025_05_06_at_08.54.23_5_.jpeg',
    },
  ];

  // Состояние для фильтра
  const [filter, setFilter] = useState<'all' | 'received' | 'archived'>('all');

  // Пример состояния полученных дипломов (будет подтягиваться с бэкенда)
  const [receivedDiplomas] = useState<number[]>([1, 4]); // ID дипломов, которые пользователь получил

  // Состояние для количества видимых дипломов
  const [visibleCount, setVisibleCount] = useState(3); // Начальное значение - 3 диплома

  // Состояние для модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDiploma, setSelectedDiploma] = useState<DiplomaItem | null>(null);

  // Используем mockDiplomas, если diplomas не передан
  const displayDiplomas = diplomas.length > 0 ? diplomas : mockDiplomas;

  // Фильтрация дипломов
  const filteredDiplomas = displayDiplomas.filter((diploma) => {
    const diplomaDate = new Date(diploma.date);
    const currentDate = new Date();

    if (filter === 'received') {
      return receivedDiplomas.includes(diploma.id);
    } else if (filter === 'archived') {
      return diplomaDate < currentDate;
    }
    return true; // 'all' показывает все дипломы
  });

  // Обработка клика "Показать еще"
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3); // Увеличиваем на 3 элемента
  };

  // Открытие модального окна
  const openModal = (diploma: DiplomaItem) => {
    setSelectedDiploma(diploma);
    setIsModalOpen(true);
  };

  // Закрытие модального окна
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDiploma(null);
  };

  return (
    <div className="pt-5">
      <h2 className="text-3xl text-green-900">Дипломы</h2>
      <div className="diplomas-wrapper mb-5">
        {/* Кнопки фильтрации */}
        <div className="buttons-diplomas pt-5 lg:flex gap-4">
          <Button
            variant="outline"
            className={`border-green-900 mr-1 text-green-900 ${filter === 'all' ? 'bg-green-100' : 'hover:bg-green-100'}`}
            onClick={() => setFilter('all')}
            aria-label="Показать все дипломы"
          >
            Все дипломы
          </Button>
          <Button
            className={`bg-green-900 mb-5 text-white ${filter === 'received' ? 'bg-green-700' : 'hover:bg-green-700'}`}
            onClick={() => setFilter('received')}
            aria-label="Показать полученные дипломы"
          >
            Полученные
          </Button>
          <Button
            className={`bg-green-900 text-white ${filter === 'archived' ? 'bg-green-700' : 'hover:bg-green-700'}`}
            onClick={() => setFilter('archived')}
            aria-label="Показать архивные дипломы"
          >
            Архивные
          </Button>
        </div>

        {/* Список дипломов */}
        <div className="diplomas-cards-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 pt-5">
          {filteredDiplomas.length > 0 ? (
            filteredDiplomas.slice(0, visibleCount).map((diploma) => (
              <div
                key={diploma.id}
                className="diploma-card bg-white border border-green-900 rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="diploma-card-image relative w-full min-h-64">
                  <Image
                    src={diploma.imageUrl}
                    alt={`Изображение диплома: ${diploma.title}`}
                    fill
                    className="rounded-t-lg object-cover cursor-pointer"
                    onClick={() => openModal(diploma)}
                  />
                  <div className="wrapper-others-images absolute top-2 right-2 flex gap-2">
                    <button className="p-1 bg-white rounded-full cursor-pointer shadow-md" aria-label="Посмотреть диплом">
                      <Eye size={18} />
                    </button>
                    <button className="p-1 bg-white rounded-full cursor-pointer shadow-md" aria-label="Скачать диплом">
                      <Download size={18} />
                    </button>
                  </div>
                </div>
                <div className="diploma-info p-4 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-green-900">{diploma.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{diploma.description}</p>
                  <span className="text-sm text-gray-500">{diploma.date}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Дипломы не найдены</p>
          )}

          {/* Кнопка "Показать еще" */}
          {filteredDiplomas.length > visibleCount && (
            <div className="col-span-full text-center pt-1">
              <Button
                onClick={handleShowMore}
                className="bg-green-900 text-white hover:bg-green-700 transition duration-300"
              >
                Показать еще
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && selectedDiploma && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике внутри модального окна
          >
            {/* Кнопка закрытия */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md z-50 cursor-pointer"
              aria-label="Закрыть модальное окно"
            >
              <X size={24} color="#2A632C" />
            </button>

            {/* Изображение */}
            <div className="relative w-full h-full">
              <Image
                src={selectedDiploma.imageUrl}
                alt={`Полноэкранное изображение диплома: ${selectedDiploma.title}`}
                fill
                className="object-contain"
              />
              {/* Текст поверх изображения */}
              <div className="absolute bottom-4 left-4 right-4 bg-green-800 bg-opacity-50 text-white p-4 rounded-lg">
                <h3 className="text-xl font-semibold">{selectedDiploma.title}</h3>
                <p className="text-sm mt-2">{selectedDiploma.description}</p>
                <span className="text-sm block mt-1">{selectedDiploma.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Diplomes;