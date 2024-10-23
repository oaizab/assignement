import CreateTodoForm from '@/components/todo/create-todo-form';
import TodoList from '@/components/todo/todo-list';

export default function Home() {
  return (
    <div className='mt-4 flex items-center justify-center'>
      <div className='w-[600px] flex flex-col items-center justify-center'>
        <CreateTodoForm />
        <TodoList />
      </div>
    </div>
  );
}
