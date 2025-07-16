import { useState } from 'react'

import './App.css'
import Detail from './Detail';

function App() { // 첫글자는 대문자. 컴퍼넌트랑 이름은 같도록 하는게 편함.
 //리액트는 기본적인 변수의 변경을 감지 못함.실시간이 어려움
 // 그래서 사용하는 변수가 state

// 변경 함수로 처리해야 실시간 반영할수 있음 
//const[변수명,변경함수] = useState(초기값); use...가 리액트 내장함수 (리액트 훅)
const [title,setTitle] = useState('게시판1111');
const [boardTitle,setBoardTitle] = useState(['React','HTML','CSS']);


const [like,setLike] = useState(0);
const [show,setshow] = useState(false);


  return (
    <div className='App'>
     <div className='nav'>
      <h3>{title}</h3>
     </div>
     <button onClick={()=>{
      setTitle('게시판');

     }}>제목 바꾸기</button>
     <div className="list">
      <h4>{boardTitle[0]}<button onClick={()=>{ 
        setLike(like+1);
        }}>좋아요</button>{like}</h4>
      <p>2025-07-16</p>
     </div>
     <div className="list">
      <h4>{boardTitle[1]}</h4>
      <p>2025-07-16</p>
     </div>
     <div className="list">
      <h4 onClick={() =>{ 
        setshow(!show)
        }}>{boardTitle[2]}</h4>
      <p>2025-07-16</p>
     </div>
    
    <button onClick={()=>{//기존배열을 다른 변수로 옮겨도 주소값이 같기때문에 
      let _boardTitle = [...boardTitle];//배열을 터트리고 다시 묶어서 새주소값을 만듬
      _boardTitle[0] = 'JAVA';//그 후 첫번째 배열을 바꿈
      setBoardTitle(_boardTitle);
      
    }}>첫번째 게시물 제목바꾸기</button>

    {show ? <Detail /> : ''}
    
    



    </div>
  )
      
}

export default App
