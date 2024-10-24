'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import React from 'react';
import Form from 'next/form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Pencil } from 'lucide-react';
import { updateTodoAction } from '@/actions/update';
import { useFormStatus } from 'react-dom';

interface UpdateTodoProps {
  id: string;
  title: string;
}

const Submit = () => {
  const status = useFormStatus();

  return (
    <Button type="submit" disabled={status.pending}>
      {status.pending ? 'Updating' : 'Update'}
    </Button>
  );
};

const UpdateTodo = ({ id, title }: UpdateTodoProps) => {
  const [value, setValue] = React.useState(title);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none">
        <DialogTitle></DialogTitle>
        <Card>
          <Form action={updateTodoAction}>
            <CardHeader>Edit Todo</CardHeader>
            <CardContent>
              <Input type="hidden" name="id" value={id} />
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </CardContent>
            <CardFooter>
              <DialogClose>
              <Submit />
              </DialogClose>
            </CardFooter>
          </Form>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTodo;
