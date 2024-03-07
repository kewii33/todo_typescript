import { useMutation, useQueryClient } from 'react-query';
import {
  StyledTodoCard,
  CardTitle,
  CardContent,
  WorkingBtns,
  DeleteBtn,
  DoneBtn,
  DoneBtns,
  CancelBtn,
} from '../styles/TodoCardStyle';
import { removeTodo, switchTodo } from '../api/todo';
import { TodoType } from '../types/types';

function TodoCard({ todo, isDone }: { todo: TodoType; isDone: boolean }) {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(removeTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });
  const switchMutation = useMutation(switchTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const handleSwitchButton = () => {
    const payload = {
      id: todo.id,
      isDone: !todo.isDone,
    };
    switchMutation.mutate(payload);
  };

  const handleRemoveButton = () => {
    deleteMutation.mutate(todo.id);
  };

  return (
    <StyledTodoCard>
      <CardTitle>{todo.title}</CardTitle>
      <CardContent>{todo.content}</CardContent>
      {!isDone ? (
        <WorkingBtns>
          <DeleteBtn onClick={handleRemoveButton}>삭제하기</DeleteBtn>
          <DoneBtn onClick={handleSwitchButton}>완료</DoneBtn>
        </WorkingBtns>
      ) : (
        <DoneBtns>
          <DeleteBtn onClick={handleRemoveButton}>삭제하기</DeleteBtn>
          <CancelBtn onClick={handleSwitchButton}>취소</CancelBtn>
        </DoneBtns>
      )}
    </StyledTodoCard>
  );
}

export default TodoCard;
