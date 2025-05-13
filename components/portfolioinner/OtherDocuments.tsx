'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import { useState } from 'react';
import { Download, Eye, X } from 'lucide-react';

// Интерфейс для данных других документов
export interface OtherDocumentItem {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

// Интерфейс для пропсов компонента
interface OtherDocumentsProps {
  documents?: OtherDocumentItem[]; // Данные будут подтягиваться с бэкенда в будущем
}

const OtherDocuments = ({ documents = [] }: OtherDocumentsProps) => {
  // Заглушка данных (mock data)
  const mockDocuments: OtherDocumentItem[] = [
    {
      id: 1,
      title: 'Документ 1',
      description: 'Грамота за участие в школьной олимпиаде.',
      date: '2023-06-14',
      imageUrl: 'https://dalgau.ru/upload/iblock/fbe/e0w5ugb6fieru4j0o9p2wu86z0bcosgy/WhatsApp_Image_2025_05_06_at_14.28.44.jpeg',
    },
    {
      id: 2,
      title: 'Документ 2',
      description: 'Справка о прохождении курсов английского языка.',
      date: '2023-07-15',
      imageUrl: 'https://dalgau.ru/upload/iblock/8d0/5oav9lz657qug24zbsdjykjofh8u1jd3/WhatsApp_Image_2025_05_06_at_08.54.23_5_.jpeg',
    },
    {
      id: 3,
      title: 'Документ 3',
      description: 'Благодарственное письмо за волонтерскую деятельность.',
      date: '2025-08-15',
      imageUrl: 'https://dalgau.ru/upload/iblock/8d0/5oav9lz657qug24zbsdjykjofh8u1jd3/WhatsApp_Image_2025_05_06_at_08.54.23_5_.jpeg',
    },
    {
      id: 4,
      title: 'Документ 4',
      description: 'Свидетельство о победе в конкурсе рисунков.',
      date: '2023-07-15',
      imageUrl: 'https://dalgau.ru/upload/iblock/7aa/a0rbww4xqeoce2hxniba3o31fnek5402/WhatsApp_Image_2025_05_06_at_08.54.23_4_.jpeg',
    },
    {
      id: 5,
      title: 'Документ 5',
      description: 'Справка об участии в спортивных соревнованиях.',
      date: '2023-07-15',
      imageUrl: 'https://dalgau.ru/upload/iblock/8d0/5oav9lz657qug24zbsdjykjofh8u1jd3/WhatsApp_Image_2025_05_06_at_08.54.23_5_.jpeg',
    },
  ];

  // Состояние для фильтра
  const [filter, setFilter] = useState<'all' | 'received' | 'archived'>('all');

  // Пример состояния полученных документов (будет подтягиваться с бэкенда)
  const [receivedDocuments] = useState<number[]>([1, 4]); // ID документов, которые пользователь получил

  // Состояние для количества видимых документов
  const [visibleCount, setVisibleCount] = useState(3); // Начальное значение - 3 документа

  // Состояние для модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<OtherDocumentItem | null>(null);

  // Используем mockDocuments, если documents не передан
  const displayDocuments = documents.length > 0 ? documents : mockDocuments;

  // Фильтрация документов
  const filteredDocuments = displayDocuments.filter((document) => {
    const documentDate = new Date(document.date);
    const currentDate = new Date();

    if (filter === 'received') {
      return receivedDocuments.includes(document.id);
    } else if (filter === 'archived') {
      return documentDate < currentDate;
    }
    return true; // 'all' показывает все документы
  });

  // Обработка клика "Показать еще"
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3); // Увеличиваем на 3 элемента
  };

  // Открытие модального окна
  const openModal = (document: OtherDocumentItem) => {
    setSelectedDocument(document);
    setIsModalOpen(true);
  };

  // Закрытие модального окна
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDocument(null);
  };

  return (
    <div className="pt-5">
      <h2 className="text-3xl text-green-900">Другие документы</h2>
      <div className="documents-wrapper mb-5">
        {/* Кнопки фильтрации */}
        <div className="buttons-documents pt-5 lg:flex gap-4">
          <Button
            variant="outline"
            className={`border-green-900 mr-1 text-green-900 ${filter === 'all' ? 'bg-green-100' : 'hover:bg-green-100'}`}
            onClick={() => setFilter('all')}
            aria-label="Показать все документы"
          >
            Все документы
          </Button>
          <Button
            className={`bg-green-900 mb-5 text-white ${filter === 'received' ? 'bg-green-700' : 'hover:bg-green-700'}`}
            onClick={() => setFilter('received')}
            aria-label="Показать полученные документы"
          >
            Полученные
          </Button>
          <Button
            className={`bg-green-900 text-white ${filter === 'archived' ? 'bg-green-700' : 'hover:bg-green-700'}`}
            onClick={() => setFilter('archived')}
            aria-label="Показать архивные документы"
          >
            Архивные
          </Button>
        </div>

        {/* Список документов */}
        <div className="documents-cards-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 pt-5">
          {filteredDocuments.length > 0 ? (
            filteredDocuments.slice(0, visibleCount).map((document) => (
              <div
                key={document.id}
                className="document-card bg-white border border-green-900 rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="document-card-image relative w-full min-h-64">
                  <Image
                    src={document.imageUrl}
                    alt={`Изображение документа: ${document.title}`}
                    fill
                    className="rounded-t-lg object-cover cursor-pointer"
                    onClick={() => openModal(document)}
                  />
                  <div className="wrapper-others-images absolute top-2 right-2 flex gap-2">
                    <button className="p-1 bg-white rounded-full cursor-pointer shadow-md" aria-label="Посмотреть документ">
                      <Eye size={18} />
                    </button>
                    <button className="p-1 bg-white rounded-full cursor-pointer shadow-md" aria-label="Скачать документ">
                      <Download size={18} />
                    </button>
                  </div>
                </div>
                <div className="document-info p-4 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-green-900">{document.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{document.description}</p>
                  <span className="text-sm text-gray-500">{document.date}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Документы не найдены</p>
          )}

          {/* Кнопка "Показать еще" */}
          {filteredDocuments.length > visibleCount && (
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
      {isModalOpen && selectedDocument && (
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
                src={selectedDocument.imageUrl}
                alt={`Полноэкранное изображение документа: ${selectedDocument.title}`}
                fill
                className="object-contain"
              />
              {/* Текст поверх изображения */}
              <div className="absolute bottom-4 left-4 right-4 bg-green-800 bg-opacity-50 text-white p-4 rounded-lg">
                <h3 className="text-xl font-semibold">{selectedDocument.title}</h3>
                <p className="text-sm mt-2">{selectedDocument.description}</p>
                <span className="text-sm block mt-1">{selectedDocument.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OtherDocuments;