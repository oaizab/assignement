'use server';

import { updateTodo } from '@/lib/queries';
import { revalidatePath } from 'next/cache';

export const updateTodoAction = async (formData: FormData) => {
  const id = formData.get('id') as string;
  const title = formData.get('title') as string;

  if (!id || !title) {
    return;
  }

  await updateTodo(id, { title });

  revalidatePath('/');
}