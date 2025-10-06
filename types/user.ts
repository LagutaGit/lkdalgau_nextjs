export interface User {
  points: string; // consider number in future
  age: string;
  city: string;
  phone: string;
  email: string;
  education: string;
  school: string;
  grade: string;
  fullName: string;
  interests: string;
  avatarUrl?: string;
  rightImageUrl?: string;
}

export interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  loading: boolean;
  updateUser: (newUserData: Partial<User>) => Promise<void>;
}
