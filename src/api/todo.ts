import axios from 'axios';
import { TodoType } from '../types/types';

const SERVER_URI = 'http://localhost:3001';

const getTodos = async () => {
  const response = await axios.get(`${SERVER_URI}/todos`);
  return response.data;
};

const addTodo = async (newTodo: TodoType) => {
  await axios.post(`${SERVER_URI}/todos`, newTodo);
};

const removeTodo = async (id: string) => {
  await axios.delete(`${SERVER_URI}/todos/${id}`);
};

const switchTodo = async (payload: { id: string; isDone: boolean }) => {
  await axios.patch(`${SERVER_URI}/todos/${payload.id}`, {
    isDone: payload.isDone,
  });
};

export { getTodos, addTodo, removeTodo, switchTodo };
