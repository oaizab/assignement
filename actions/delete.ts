'use server';

import { deleteTodo } from '@/lib/queries';
import { revalidatePath } from 'next/cache';

export const deleteTodoAction = async (id: string) => {
  await deleteTodo(id);
  revalidatePath('/');
};
