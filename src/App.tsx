import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  AppLayout,
  HeaderStyle,
  HeaderTitle,
  UsedToolName,
  InputFormBox,
  InputForms,
  TodoTitle,
  TitleInput,
  TodoContent,
  ContentInput,
  AddBtn,
  WorkingTodoLayout,
  WorkingTodoTitle,
  WorkingTodoContent,
  DoneTodoLayout,
  DoneTodoTitle,
  DoneTodoContent,
} from './AppStyle';
import TodoCard from './TodoCard';

type TodoType = {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const addTodo = (event: FormEvent) => {
    event.preventDefault();

    if (!title || !content) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    const newTodo: TodoType = {
      id: Date.now(),
      title: title,
      content: content,
      isDone: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTitle('');
    setContent('');
  };

  return (
    <AppLayout>
      <HeaderStyle>
        <HeaderTitle>My Todo List</HeaderTitle>
        <UsedToolName>TypeScript</UsedToolName>
      </HeaderStyle>
      <InputFormBox onSubmit={addTodo}>
        <InputForms>
          <div>
            <TodoTitle>제목</TodoTitle>
            <TitleInput value={title} onChange={titleChangeHandler} />
          </div>
          <div>
            <TodoContent>내용</TodoContent>
            <ContentInput value={content} onChange={contentChangeHandler} />
          </div>
        </InputForms>
        <AddBtn type="submit">추가하기</AddBtn>
      </InputFormBox>
      <WorkingTodoLayout>
        <WorkingTodoTitle>Working..🔥</WorkingTodoTitle>
        <WorkingTodoContent>
          {todos
            .filter((item) => !item.isDone)
            .map((item) => (
              <TodoCard
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                isDone={item.isDone}
                setTodos={setTodos}
              />
            ))}
        </WorkingTodoContent>
      </WorkingTodoLayout>
      <DoneTodoLayout>
        <DoneTodoTitle>Done..!🎉</DoneTodoTitle>
        <DoneTodoContent>
          {todos
            .filter((item) => item.isDone)
            .map((item) => (
              <TodoCard
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                isDone={item.isDone}
                setTodos={setTodos}
              />
            ))}
        </DoneTodoContent>
      </DoneTodoLayout>
    </AppLayout>
  );
}

export default App;
