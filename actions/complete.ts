'use server';

import { toggleTodo } from '@/lib/queries';
import { revalidatePath } from 'next/cache';

export const completeTodoAction = async (id: string) => {
  try {
    await toggleTodo(id);
  } catch {
    return 'An error occurred while completing the todo.';
  }
  revalidatePath('/');
};
