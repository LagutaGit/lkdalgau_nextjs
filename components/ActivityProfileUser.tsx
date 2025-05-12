'use client';

import { Button } from './ui/button';

interface User {
  points: string;
}

interface ActivityProfileUserProps {
  user: User;
}

const ActivityProfileUser = ({ user }: ActivityProfileUserProps) => {
  // Удаляем "Б" из points, если оно присутствует
  const displayPoints = user.points.replace(' Б', '');

  return (
    <div className="pt-5">
      <h2 className="text-4xl text-green-900">Активность</h2>
      <Button className="bg-green-800 text-3xl p-10 text-white cursor-pointer mt-5">
        {displayPoints} Б
      </Button>
    </div>
  );
};

export default ActivityProfileUser;