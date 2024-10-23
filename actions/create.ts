'use server';

import { createTodo } from '@/lib/queries';
import { revalidatePath } from 'next/cache';

export const createTodoAction = async (formData: FormData) => {
  const title = formData.get('title') as string;

  if (!title) {
    return;
  }

  await createTodo({title});

  revalidatePath('/');
}
