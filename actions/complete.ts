'use server';

import { toggleTodo } from '@/lib/queries';
import { revalidatePath } from 'next/cache';

export const completeTodoAction = async (id: string) => {
  await toggleTodo(id);
  revalidatePath('/');
};