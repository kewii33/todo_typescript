import {
  StyledTodoCard,
  CardTitle,
  CardContent,
  WorkingBtns,
  DeleteBtn,
  DoneBtn,
  DoneBtns,
  CancelBtn,
} from './TodoCardStyle';

type TodoType = {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
};

function TodoCard({
  id,
  title,
  content,
  isDone,
  setTodos,
}: TodoType & {
  setTodos: (cb: (todo: TodoType[]) => TodoType[]) => void;
}) {
  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const doneTodo = () => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, isDone: true } : todo))
    );
  };
  const cancelTodo = () => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, isDone: false } : todo))
    );
  };
  return (
    <StyledTodoCard>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
      {!isDone ? (
        <WorkingBtns>
          <DeleteBtn onClick={deleteTodo}>삭제하기</DeleteBtn>
          <DoneBtn onClick={doneTodo}>완료</DoneBtn>
        </WorkingBtns>
      ) : (
        <DoneBtns>
          <DeleteBtn onClick={deleteTodo}>삭제하기</DeleteBtn>
          <CancelBtn onClick={cancelTodo}>취소</CancelBtn>
        </DoneBtns>
      )}
    </StyledTodoCard>
  );
}

export default TodoCard;
