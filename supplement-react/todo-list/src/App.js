import './App.css';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './components/todoTemplate';
const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle/>
      <TodoTemplate>hello</TodoTemplate>
    </>
  );
}

export default App;
