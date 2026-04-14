export type UserRole = 'guest' | 'student' | 'instructor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  instructor: string;
  thumbnail: string;
  price: number;
  rating: number;
  studentsCount: number;
  category: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  isLocked: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}
