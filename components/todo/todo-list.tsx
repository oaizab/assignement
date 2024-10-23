import DeleteTodo from '@/components/todo/delete-todo';
import ToggleTodo from '@/components/todo/toggle-todo';
import UpdateTodo from '@/components/todo/update-todo';
import { getAllTodos } from '@/lib/queries';
import { cn } from '@/lib/utils';
import React from 'react';

const TodoList = async () => {
  const todos = await getAllTodos();

  if (todos.length === 0) {
    return <p className="mt-8 font-medium text-lg">No todos found</p>;
  }

  return (
    <ul className="flex flex-col items-center justify-center w-full gap-1 mt-6">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="w-full flex justify-between items-center px-6 py-4 mb-4 border-slate-500 rounded-lg shadow-lg"
        >
          <div className="flex gap-6 items-center">
            <ToggleTodo id={todo.id} completed={todo.completed} />
            <h2
              className={cn(
                'text-lg capitalize',
                todo.completed ? 'line-through' : '',
              )}
            >
              {todo.title}
            </h2>
          </div>
          <div className="flex gap-6 items-center">
            <UpdateTodo id={todo.id} title={todo.title} />
            <DeleteTodo id={todo.id} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
