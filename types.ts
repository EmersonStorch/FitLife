
export interface Workout {
  id: string;
  title: string;
  category: 'Hipertrofia' | 'Cardio' | 'Mobilidade' | 'Functional';
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  duration: string;
  image: string;
  price?: number;
}

export interface Recipe {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  beforeImg: string;
  afterImg: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin'
}
