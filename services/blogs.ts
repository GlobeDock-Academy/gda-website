import { api } from '@/lib/axios';

export type Blog = { id: number; title: string; body: string };

export const getBlogs = async () => {
  const res = await api.get<Blog[]>('/blogs/all');
  return res.data;
};

