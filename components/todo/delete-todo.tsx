'use client';

import { deleteTodoAction } from '@/actions/delete';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import React from 'react';

interface DeleteTodoProps {
  id: string;
}

const DeleteTodo = ({ id }: DeleteTodoProps) => {
  const [isDeleting, setIsDeleting] = React.useState(false);

  return (
    <Button
      variant="ghost"
      size="icon"
      disabled={isDeleting}
      onClick={async () => {
        setIsDeleting(true);
        await deleteTodoAction(id);
        setIsDeleting(false);
      }}
    >
      <Trash2 />
    </Button>
  );
};

export default DeleteTodo;
