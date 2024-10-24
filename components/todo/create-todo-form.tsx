'use client';

import { createTodoAction } from '@/actions/create';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Form from 'next/form';
import React from 'react';
import { useFormStatus } from 'react-dom';

const Submit = () => {
  const status = useFormStatus();

  return (
    <Button type="submit" disabled={status.pending}>
      {status.pending ? 'Creating' : 'Create'}
    </Button>
  );
};

const CreateTodoForm = () => {
  return (
    <Form action={createTodoAction} className="w-full flex items-center gap-6">
      <Input type="text" name="title" placeholder="Enter todo title" />
      <Submit />
    </Form>
  );
};

export default CreateTodoForm;
