import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  InputFormBox,
  InputForms,
  TodoTitle,
  TitleInput,
  TodoContent,
  ContentInput,
  AddBtn,
} from '../styles/TodoInputStyle';
import { addTodo } from '../api/todo';
import { useMutation, useQueryClient } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import { TodoType } from '../types/types';

function TodoInput() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const queryClient = useQueryClient();

  const mutation = useMutation(addTodo, {
    onSuccess: (data) => {
      console.log('data', data);
      queryClient.invalidateQueries('todos');
    },
  });

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const InputSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!title || !content) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    const newTodo: TodoType = {
      id: uuidv4(),
      title: title,
      content: content,
      isDone: false,
    };
    mutation.mutate(newTodo);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <InputFormBox onSubmit={InputSubmitHandler}>
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
    </div>
  );
}

export default TodoInput;
