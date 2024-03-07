import styled from 'styled-components';

export const InputFormBox = styled.form`
  width: 1200px;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #eee;
  border-radius: 10px;
  justify-content: space-between;
`;

export const InputForms = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TodoTitle = styled.label`
  margin-left: 20px;
  height: 35px;
  font-weight: bold;
  font-size: 1.2em;
`;

export const TitleInput = styled.input`
  margin-left: 15px;
  width: 200px;
  height: 35px;
  border: none;
  border-radius: 5px;
`;

export const TodoContent = styled.label`
  margin-left: 20px;
  height: 35px;
  font-weight: bold;
  font-size: 1.2em;
`;

export const ContentInput = styled.input`
  margin-left: 15px;
  width: 200px;
  height: 35px;
  border: none;
  border-radius: 5px;
`;

export const AddBtn = styled.button`
  margin-right: 30px;
  padding: 10px 50px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: green;
  cursor: pointer;
`;
