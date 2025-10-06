'use client';

import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import type { User, UserContextType } from '@/types/user';

const defaultUser: User = {
  points: '0',
  age: '',
  city: '',
  phone: '',
  email: '',
  education: '',
  school: '',
  grade: '',
  fullName: '',
  interests: '',
  avatarUrl: '/projects/banner-1.jpg', // Значение по умолчанию для аватара
};

const UserContext = createContext<UserContextType>({
  user: defaultUser,
  setUser: () => {},
  loading: true,
  updateUser: async () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(defaultUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user');
        if (response.ok) {
          const userData = await response.json();
          setUser(userData); // Загружаем данные пользователя из API
        }
      } catch (error) {
        console.error('Ошибка при загрузке данных пользователя:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const updateUser = async (newUserData: Partial<User>) => {
    try {
      setLoading(true);
      const updatedUser = { ...user, ...newUserData };
      
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
      
      if (response.ok) {
        setUser(updatedUser);
      } else {
        throw new Error('Failed to update user data');
      }
    } catch (error) {
      console.error('Ошибка при обновлении данных пользователя:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, loading, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}