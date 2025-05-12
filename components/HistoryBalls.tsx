'use client';

import Link from 'next/link';

// Интерфейс для данных строки таблицы
interface HistoryItem {
  date: string;
  description: string;
  participation: number;
  feedback: number;
  review: number;
  total: number;
}

// Интерфейс для пропсов компонента (будет использоваться для передачи данных с бэкенда)
interface HistoryBallsProps {
  items?: HistoryItem[];
}

const HistoryBalls = ({ items = [] }: HistoryBallsProps) => {
  const mockData: HistoryItem[] = [
    {
      date: '14.06.2023',
      description: 'Знакомься с Дальневосточным ГАУ',
      participation: 10,
      feedback: 10,
      review: 10,
      total: 30,
    },
    {
      date: '14.06.2023',
      description: 'Первый онлайн урок',
      participation: 10,
      feedback: 0,
      review: 0,
      total: 10,
    },
    {
      date: '14.06.2023',
      description: 'Получение бонусованного мерча',
      participation: -50,
      feedback: 0,
      review: 0,
      total: -50,
    },
  ];

  const displayData = items.length > 0 ? items : mockData;

  return (
    <div className="pt-5">
      <h2 className="text-4xl text-green-900">История зачисления баллов</h2>
      <div className="my-5 overflow-x-auto">
        <table className="min-w-full border border-green-900 rounded-lg shadow-md">
          <thead>
            <tr className="bg-green-900 text-white">
              <th className="py-2 px-4" scope="col">Мероприятие</th>
              <th className="py-2 px-4" scope="col">Участие в мероприятии</th>
              <th className="py-2 px-4" scope="col">Заполнение обратной связи</th>
              <th className="py-2 px-4" scope="col">Отзыв о мероприятии</th>
              <th className="py-2 px-4" scope="col">Итого</th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border border-green-900 flex items-center">
                  <span className="mr-2">{item.date}</span>
                  <span className="text-green-700">{item.description}</span>
                </td>
                <td className="py-2 px-4 border border-green-900">{item.participation}</td>
                <td className="py-2 px-4 border border-green-900">{item.feedback}</td>
                <td className="py-2 px-4 border border-green-900">{item.review}</td>
                <td className="py-2 px-4 border border-green-900 font-bold">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href="/" className="text-sm text-gray-500">Смотреть всю историю (23)</Link>
    </div>
  );
};

export default HistoryBalls;