import { useState } from 'react'

import './App.css'

function App() { // 첫글자는 대문자. 컴퍼넌트랑 이름은 같도록 하는게 편함.
  let title = '게시판';

  return (
    <div className='App'>
     <div className='nav'>
      <h3>{title}</h3>
     </div>
    
    </div>
  )
}

export default App
