'use server';

import { deleteTodo } from '@/lib/queries';
import { revalidatePath } from 'next/cache';

export const deleteTodoAction = async (id: string) => {
  try {
    await deleteTodo(id);
  } catch {
    return 'An error occurred while deleting the todo.';
  }
  revalidatePath('/');
};
