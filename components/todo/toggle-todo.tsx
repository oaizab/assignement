'use client';

import { completeTodoAction } from '@/actions/complete';
import { Button } from '@/components/ui/button';
import { Square, SquareCheckBig } from 'lucide-react';
import React from 'react';

interface ToggleTodoProps {
  id: string;
  completed: boolean;
}

const ToggleTodo = ({ id, completed }: ToggleTodoProps) => {
  const [isCompleted, setIsCompleted] = React.useState(false);
  return (
    <Button
      variant="ghost"
      size="icon"
      disabled={isCompleted}
      onClick={async () => {
        setIsCompleted(true);
        await completeTodoAction(id);
        setIsCompleted(false);
      }}
    >
      {completed ? <SquareCheckBig /> : <Square />}
    </Button>
  );
};

export default ToggleTodo;
