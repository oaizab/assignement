'use client';

import { deleteTodoAction } from '@/actions/delete';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import React from 'react';

interface DeleteTodoProps {
  id: string;
}

const DeleteTodo = ({ id }: DeleteTodoProps) => {
  return (
    <Button variant="ghost" onClick={() => deleteTodoAction(id)}>
      <Trash2 />
    </Button>
  );
};

export default DeleteTodo;
