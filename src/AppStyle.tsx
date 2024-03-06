import styled from 'styled-components';

export const AppLayout = styled.div`
  width: 1200px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
`;

export const HeaderStyle = styled.div`
  width: 1200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 0;
`;

export const HeaderTitle = styled.div`
  margin-left: 20px;
  font-weight: bold;
`;

export const UsedToolName = styled.div`
  margin-right: 20px;
  font-weight: bold;
`;

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
`;

export const WorkingTodoLayout = styled.div`
  width: 1200px;
`;

export const WorkingTodoTitle = styled.div`
  width: 1200px;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  font-size: 1.2em;
`;

export const WorkingTodoContent = styled.div`
  width: 1200px;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const DoneTodoLayout = styled.div`
  width: 1200px;
`;

export const DoneTodoTitle = styled.div`
  width: 1200px;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  font-size: 1.2em;
`;

export const DoneTodoContent = styled.div`
  width: 1200px;
  align-items: center;
  display: flex;
  flex-direction: row;
`;
