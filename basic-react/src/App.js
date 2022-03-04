import React from 'react';
import Hello from './components/hello';
import Wrapper from './components/Wrapper';

function App() {
  return(
    <div>
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true}/>
        <Hello color="pink"/>
      </Wrapper>
    </div>


)

}

export default App;

