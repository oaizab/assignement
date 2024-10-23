'use client';

import { completeTodoAction } from '@/actions/complete';
import { Button } from '@/components/ui/button';
import { Square, SquareCheckBig } from 'lucide-react';
import React from 'react';

interface ToggleTodoProps {
  id: string;
  completed: boolean;
}

const ToggleTodo = ({id, completed}: ToggleTodoProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => completeTodoAction(id)}
    >
      {completed ? <SquareCheckBig /> : <Square />}
    </Button>
  );
};

export default ToggleTodo;
