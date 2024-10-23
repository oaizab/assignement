import prisma from '@/lib/db';

export const getAllTodos = async () => {
  const allTodos = await prisma.todo.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return allTodos;
};

export const getTodoById = async (id: string) => {
  const todo = await prisma.todo.findUnique({
    where: { id },
  });
  return todo;
};

export const createTodo = async (data: { title: string }) => {
  const todo = await prisma.todo.create({
    data,
  });
  return todo;
};

export const updateTodo = async (id: string, data: { title: string }) => {
  const todo = await prisma.todo.update({
    where: { id },
    data,
  });
  return todo;
};

export const deleteTodo = async (id: string) => {
  const todo = await prisma.todo.delete({
    where: { id },
  });
  return todo;
};

export const toggleTodo = async (id: string) => {
  const todo = await prisma.todo.findUnique({
    where: { id },
  });
  if (!todo) {
    return null;
  }
  return await prisma.todo.update({
    where: { id },
    data: {
      completed: {
        set: !todo.completed,
      },
    },
  });
};
