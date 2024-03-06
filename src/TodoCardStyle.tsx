import styled from 'styled-components';

export const StyledTodoCard = styled.div`
  width: 300px;
  height: 200px;
  border: 4px solid green;
  border-radius: 8px;
  margin-left: 30px;
`;

export const CardTitle = styled.div`
  padding-left: 20px;
  padding-top: 20px;
  font-size: 1.2em;
`;

export const CardContent = styled.div`
  padding-left: 30px;
  padding-top: 20px;
`;

export const WorkingBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  margin-top: 35px;
`;

export const DeleteBtn = styled.button`
  width: 120px;
  height: 35px;
  border: 3px solid red;
  border-radius: 5px;
`;

export const DoneBtn = styled.button`
  width: 120px;
  height: 35px;
  margin-left: 5px;
  border: 3px solid green;
  border-radius: 5px;
`;

export const DoneBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  margin-top: 35px;
`;

export const CancelBtn = styled.button`
  width: 120px;
  height: 35px;
  margin-left: 5px;
  border: 3px solid green;
  border-radius: 5px;
`;
