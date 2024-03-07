import {
  WorkingTodoLayout,
  WorkingTodoTitle,
  WorkingTodoContent,
  DoneTodoLayout,
  DoneTodoTitle,
  DoneTodoContent,
} from '../styles/TodoListStyle';
import TodoCard from './TodoCard';
import { useQuery } from 'react-query';
import { getTodos } from '../api/todo';
import { TodoType } from '../types/types';

function TodoList() {
  const { isLoading, isError, data } = useQuery('todos', getTodos);

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  if (isError) {
    return <p>데이터를 불러올 수 없음</p>;
  }

  return (
    <div>
      <WorkingTodoLayout>
        <WorkingTodoTitle>Working..🔥</WorkingTodoTitle>
        <WorkingTodoContent>
          {data
            .filter((item: TodoType) => !item.isDone)
            .map((item: TodoType) => (
              <TodoCard key={item.id} todo={item} isDone={item.isDone} />
            ))}
        </WorkingTodoContent>
      </WorkingTodoLayout>
      <DoneTodoLayout>
        <DoneTodoTitle>Done..!🎉</DoneTodoTitle>
        <DoneTodoContent>
          {data
            .filter((item: TodoType) => item.isDone)
            .map((item: TodoType) => (
              <TodoCard key={item.id} todo={item} isDone={item.isDone} />
            ))}
        </DoneTodoContent>
      </DoneTodoLayout>
    </div>
  );
}

export default TodoList;
