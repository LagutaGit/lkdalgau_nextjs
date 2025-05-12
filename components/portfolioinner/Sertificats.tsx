'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import { useState } from 'react';
import { Download, Eye, X } from 'lucide-react';

// Интерфейс для данных сертификата
export interface CertificateItem {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

// Интерфейс для пропсов компонента
interface SertificatsProps {
  certificates?: CertificateItem[]; // Данные будут подтягиваться с бэкенда в будущем
}

const Sertificats = ({ certificates = [] }: SertificatsProps) => {
  // Заглушка данных (mock data)
  const mockCertificates: CertificateItem[] = [
    {
      id: 1,
      title: 'Сертификат 1',
      description: 'Сертификат за участие в хакатоне по программированию.',
      date: '2023-06-14',
      imageUrl: 'https://dalgau.ru/upload/iblock/fbe/e0w5ugb6fieru4j0o9p2wu86z0bcosgy/WhatsApp_Image_2025_05_06_at_14.28.44.jpeg',
    },
    {
      id: 2,
      title: 'Сертификат 2',
      description: 'Сертификат по завершению курса React.',
      date: '2023-07-15',
      imageUrl: 'https://dalgau.ru/upload/iblock/8d0/5oav9lz657qug24zbsdjykjofh8u1jd3/WhatsApp_Image_2025_05_06_at_08.54.23_5_.jpeg',
    },
    {
      id: 3,
      title: 'Сертификат 3',
      description: 'Сертификат за участие в олимпиаде по математике.',
      date: '2025-08-15',
      imageUrl: 'https://dalgau.ru/upload/iblock/8d0/5oav9lz657qug24zbsdjykjofh8u1jd3/WhatsApp_Image_2025_05_06_at_08.54.23_5_.jpeg',
    },
    {
      id: 4,
      title: 'Сертификат 4',
      description: 'Сертификат за прохождение курса по Tailwind CSS.',
      date: '2023-07-15',
      imageUrl: 'https://dalgau.ru/upload/iblock/7aa/a0rbww4xqeoce2hxniba3o31fnek5402/WhatsApp_Image_2025_05_06_at_08.54.23_4_.jpeg',
    },
    {
      id: 5,
      title: 'Сертификат 5',
      description: 'Сертификат за участие в волонтерской программе.',
      date: '2023-07-15',
      imageUrl: 'https://dalgau.ru/upload/iblock/8d0/5oav9lz657qug24zbsdjykjofh8u1jd3/WhatsApp_Image_2025_05_06_at_08.54.23_5_.jpeg',
    },
  ];

  // Состояние для фильтра
  const [filter, setFilter] = useState<'all' | 'received' | 'archived'>('all');

  // Пример состояния полученных сертификатов (будет подтягиваться с бэкенда)
  const [receivedCertificates] = useState<number[]>([1, 4]); // ID сертификатов, которые пользователь получил

  // Состояние для количества видимых сертификатов
  const [visibleCount, setVisibleCount] = useState(3); // Начальное значение - 3 сертификата

  // Состояние для модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  // Используем mockCertificates, если certificates не передан
  const displayCertificates = certificates.length > 0 ? certificates : mockCertificates;

  // Фильтрация сертификатов
  const filteredCertificates = displayCertificates.filter((certificate) => {
    const certificateDate = new Date(certificate.date);
    const currentDate = new Date();

    if (filter === 'received') {
      return receivedCertificates.includes(certificate.id);
    } else if (filter === 'archived') {
      return certificateDate < currentDate;
    }
    return true; // 'all' показывает все сертификаты
  });

  // Обработка клика "Показать еще"
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3); // Увеличиваем на 3 элемента
  };

  // Открытие модального окна
  const openModal = (certificate: CertificateItem) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  // Закрытие модального окна
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <div className="pt-5">
      <h2 className="text-3xl text-green-900">Сертификаты</h2>
      <div className="certificates-wrapper mb-5">
        {/* Кнопки фильтрации */}
        <div className="buttons-certificates pt-5 lg:flex gap-4">
          <Button
            variant="outline"
            className={`border-green-900 mr-1 text-green-900 ${filter === 'all' ? 'bg-green-100' : 'hover:bg-green-100'}`}
            onClick={() => setFilter('all')}
            aria-label="Показать все сертификаты"
          >
            Все сертификаты
          </Button>
          <Button
            className={`bg-green-900 mb-5 text-white ${filter === 'received' ? 'bg-green-700' : 'hover:bg-green-700'}`}
            onClick={() => setFilter('received')}
            aria-label="Показать полученные сертификаты"
          >
            Полученные
          </Button>
          <Button
            className={`bg-green-900 text-white ${filter === 'archived' ? 'bg-green-700' : 'hover:bg-green-700'}`}
            onClick={() => setFilter('archived')}
            aria-label="Показать архивные сертификаты"
          >
            Архивные
          </Button>
        </div>

        {/* Список сертификатов */}
        <div className="certificates-cards-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 pt-5">
          {filteredCertificates.length > 0 ? (
            filteredCertificates.slice(0, visibleCount).map((certificate) => (
              <div
                key={certificate.id}
                className="certificate-card bg-white border border-green-900 rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="certificate-card-image relative w-full min-h-64">
                  <Image
                    src={certificate.imageUrl}
                    alt={`Изображение сертификата: ${certificate.title}`}
                    fill
                    className="rounded-t-lg object-cover cursor-pointer"
                    onClick={() => openModal(certificate)}
                  />
                  <div className="wrapper-others-images absolute top-2 right-2 flex gap-2">
                    <button className="p-1 bg-white rounded-full cursor-pointer shadow-md" aria-label="Посмотреть сертификат">
                      <Eye size={18} />
                    </button>
                    <button className="p-1 bg-white rounded-full cursor-pointer shadow-md" aria-label="Скачать сертификат">
                      <Download size={18} />
                    </button>
                  </div>
                </div>
                <div className="certificate-info p-4 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-green-900">{certificate.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{certificate.description}</p>
                  <span className="text-sm text-gray-500">{certificate.date}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Сертификаты не найдены</p>
          )}

          {/* Кнопка "Показать еще" */}
          {filteredCertificates.length > visibleCount && (
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
      {isModalOpen && selectedCertificate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
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
                src={selectedCertificate.imageUrl}
                alt={`Полноэкранное изображение сертификата: ${selectedCertificate.title}`}
                fill
                className="object-contain"
              />
              {/* Текст поверх изображения */}
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                <h3 className="text-xl font-semibold">{selectedCertificate.title}</h3>
                <p className="text-sm mt-2">{selectedCertificate.description}</p>
                <span className="text-sm block mt-1">{selectedCertificate.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sertificats;