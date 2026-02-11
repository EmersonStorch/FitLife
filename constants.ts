
import { Workout, Recipe, Testimonial, BlogPost } from './types';

export const COLORS = {
  primary: '#10b981', // Emerald Green
  secondary: '#0ea5e9', // Performance Blue
  accent: '#f59e0b', // Vibrant Orange
  bg: '#09090b',
  card: '#18181b',
};

export const MOCK_WORKOUTS: Workout[] = [
  {
    id: '1',
    title: 'Hipertrofia Máxima 2.0',
    category: 'Hipertrofia',
    level: 'Avançado',
    duration: '60-80 min',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop',
    price: 197
  },
  {
    id: '2',
    title: 'Queima de Gordura Express',
    category: 'Cardio',
    level: 'Intermediário',
    duration: '25 min',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop',
    price: 97
  },
  {
    id: '3',
    title: 'Performance Atlética',
    category: 'Functional',
    level: 'Avançado',
    duration: '90 min',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c65b5a33?q=80&w=2070&auto=format&fit=crop',
    price: 247
  }
];

export const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    name: 'Bowl de Salmão Proteico',
    calories: 450,
    protein: 38,
    carbs: 42,
    fat: 12,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2071&auto=format&fit=crop',
    tags: ['Low Carb', 'High Protein']
  },
  {
    id: '2',
    name: 'Panqueca de Aveia Fitness',
    calories: 320,
    protein: 22,
    carbs: 35,
    fat: 8,
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=2070&auto=format&fit=crop',
    tags: ['Café da Manhã', 'Vegetariano']
  }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ricardo Mendes',
    role: 'Executivo',
    content: 'O acompanhamento mudou minha disposição. Perdi 12kg em 3 meses mantendo a massa magra.',
    avatar: 'https://i.pravatar.cc/150?u=ricardo',
    beforeImg: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?q=80&w=1974&auto=format&fit=crop'
  }
];

export const MOCK_BLOG: BlogPost[] = [
  {
    id: '1',
    title: 'A ciência por trás do jejum intermitente',
    excerpt: 'Descubra como os ciclos de alimentação afetam sua longevidade e performance celular.',
    author: 'Dr. Felipe Silva',
    date: '12 Jan 2024',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop',
    category: 'Nutrição'
  }
];
