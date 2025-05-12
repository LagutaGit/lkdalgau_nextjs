'use client';

import { useState } from 'react';
import { Pencil } from 'lucide-react';

// Интерфейс для данных пользователя (должен совпадать с Lk.tsx)
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

// Интерфейс для пропсов компонента
interface InterestsUserProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const InterestsUser = ({ user, setUser }: InterestsUserProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newInterests, setNewInterests] = useState(user.interests);

  // Преобразование строки интересов в массив для отображения
  const interestsArray = user.interests
    ? user.interests.split(',').map((item) => item.trim())
    : [];

  // Обработка сохранения новых интересов
  const handleSave = () => {
    setUser({ ...user, interests: newInterests });
    setIsEditing(false);
  };

  // Обработка отмены редактирования
  const handleCancel = () => {
    setNewInterests(user.interests);
    setIsEditing(false);
  };

  return (
    <div className="pt-5">
      <div className="interests-user-wrapper flex justify-between items-center">
        <h2 className="text-4xl text-green-900">Интересы</h2>
        <button
          onClick={() => setIsEditing(true)}
          className="cursor-pointer hover:bg-green-100 p-2 rounded-full transition-colors"
          aria-label="Редактировать интересы"
          title="Редактировать интересы"
        >
          <Pencil color="#2A632C" size={24} />
        </button>
      </div>

      <div className="interests-user pt-5">
        {isEditing ? (
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={newInterests}
              onChange={(e) => setNewInterests(e.target.value)}
              className="border border-green-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Введите интересы, разделяя запятыми"
              aria-label="Поле для ввода интересов"
            />
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors focus:outline-none"
                aria-label="Сохранить изменения"
              >
                Сохранить
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors focus:outline-none"
                aria-label="Отменить редактирование"
              >
                Отмена
              </button>
            </div>
          </div>
        ) : (
          <ul className="flex flex-wrap gap-4">
            {interestsArray.length > 0 ? (
              interestsArray.map((interest, index) => (
                <li
                  key={index}
                  className="underline text-green-900 hover:text-green-700 transition-colors"
                >
                  {interest}
                </li>
              ))
            ) : (
              <p className="text-gray-500">Интересы не указаны</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InterestsUser;