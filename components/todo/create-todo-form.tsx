import { createTodoAction } from '@/actions/create'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Form from 'next/form'
import React from 'react'

const CreateTodoForm = () => {
  return (
    <Form action={createTodoAction} className='w-full flex items-center gap-6'>
      <Input type="text" name="title" placeholder="Enter todo title" />
      <Button type='submit'>Create</Button>
    </Form>
  )
}

export default CreateTodoForm