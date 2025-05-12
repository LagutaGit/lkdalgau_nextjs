'use client';

import { Button } from './ui/button';

interface User {
  points: string;
}

interface ActivityProfileUserProps {
  user: User;
}

const ActivityProfileUser = ({ user }: ActivityProfileUserProps) => {
  return (
    <div className="pt-5">
      <h2 className='text-5xl text-green-900'>Активность</h2>
      <Button className="bg-green-800 text-white cursor-pointer mt-5">
        {user.points}
      </Button>
    </div>
  );
};

export default ActivityProfileUser;