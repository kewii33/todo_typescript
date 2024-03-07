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
