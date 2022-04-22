import './App.css';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './components/todoTemplate';
import TodoHead from './components/todoHead';
const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle/>
      <TodoTemplate>
        <TodoHead />
      </TodoTemplate>
    </>
  );
}

export default App;
