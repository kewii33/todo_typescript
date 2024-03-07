import {
  AppLayout,
  HeaderStyle,
  HeaderTitle,
  UsedToolName,
} from './styles/AppStyle';

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {
  return (
    <AppLayout>
      <HeaderStyle>
        <HeaderTitle>My Todo List</HeaderTitle>
        <UsedToolName>TypeScript</UsedToolName>
      </HeaderStyle>
      <TodoInput />
      <TodoList />
    </AppLayout>
  );
}

export default App;
