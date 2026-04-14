import { Course, Category } from './types';

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    slug: 'react-mastery-2024',
    title: 'React Mastery 2024: From Zero to Hero',
    description: 'Learn React from scratch with hooks, context, and modern state management.',
    instructor: 'John Doe',
    thumbnail: 'https://picsum.photos/seed/react/800/450',
    price: 49.99,
    rating: 4.8,
    studentsCount: 1250,
    category: 'Development',
    lessons: [
      { id: 'l1', title: 'Introduction to React', duration: '10:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', isLocked: false },
      { id: 'l2', title: 'Setting up Environment', duration: '15:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', isLocked: false },
      { id: 'l3', title: 'JSX Basics', duration: '20:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', isLocked: true },
    ]
  },
  {
    id: '2',
    slug: 'ui-ux-design-fundamentals',
    title: 'UI/UX Design Fundamentals',
    description: 'Master the principles of design and create stunning user interfaces.',
    instructor: 'Jane Smith',
    thumbnail: 'https://picsum.photos/seed/design/800/450',
    price: 39.99,
    rating: 4.9,
    studentsCount: 850,
    category: 'Design',
    lessons: [
      { id: 'l1', title: 'What is UI/UX?', duration: '08:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', isLocked: false },
    ]
  },
  {
    id: '3',
    slug: 'fullstack-node-js',
    title: 'Fullstack Node.js with Express',
    description: 'Build robust backend services with Node.js and Express.',
    instructor: 'Mike Johnson',
    thumbnail: 'https://picsum.photos/seed/node/800/450',
    price: 59.99,
    rating: 4.7,
    studentsCount: 2100,
    category: 'Development',
    lessons: []
  },
  {
    id: '4',
    slug: 'digital-marketing-101',
    title: 'Digital Marketing 101',
    description: 'Grow your business with modern digital marketing strategies.',
    instructor: 'Sarah Wilson',
    thumbnail: 'https://picsum.photos/seed/marketing/800/450',
    price: 29.99,
    rating: 4.6,
    studentsCount: 3200,
    category: 'Marketing',
    lessons: []
  }
];

export const MOCK_CATEGORIES: Category[] = [
  { id: 'c1', name: 'Development', icon: 'Code', count: 120 },
  { id: 'c2', name: 'Design', icon: 'Palette', count: 85 },
  { id: 'c3', name: 'Marketing', icon: 'TrendingUp', count: 64 },
  { id: 'c4', name: 'Business', icon: 'Briefcase', count: 42 },
];
