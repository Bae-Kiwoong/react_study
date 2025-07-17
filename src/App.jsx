import { useState } from 'react'

import './App.css'
import Detail from './Detail';
import App2 from './App2';

function App() { // 첫글자는 대문자. 컴퍼넌트랑 이름은 같도록 하는게 편함.
 //리액트는 기본적인 변수의 변경을 감지 못함.실시간이 어려움
 // 그래서 사용하는 변수가 state

// 변경 함수로 처리해야 실시간 반영할수 있음 
//const[변수명,변경함수] = useState(초기값); use...가 리액트 내장함수 (리액트 훅)
const [boardTitle,setBoardTitle] = useState(['REACT','HTML','CSS']);
const [like,setLike] = useState([0,0,0]);
const [title,setTitle] = useState('게시판1111');

const [show,setshow] = useState(false);

const [titleIndex, setTitleIndex] = useState(0);
const [newTitle,setNewTitle] = useState(``);





  return (
    <div className='App'>
      <App2 />
    
     </div>
    //  <div className='nav'>
    //   <h3>{title}</h3>
    //  </div>
  ) 
}
     {/* <button onClick={()=>{
      setTitle('게시판');
    }}>제목 바꾸기</button>

    {
    boardTitle.map(function(name , i){
      return (
      <div className="list" key={i}>
          <h4 onClick={function(){
            setshow(!show);
            setTitleIndex(i);
          }}>{name}<button onClick={function(e){
           e.stopPropagation();
            let _like = [...like];
          _like[i] = _like[i] + 1;
           setLike(_like);
          }}>좋아요</button>{like[i]}</h4>
          <p>2025-07-16</p>
          <button onClick={function(){
            
            let _boardTitle = [...boardTitle];
            _boardTitle.splice(i,1);
            setBoardTitle(_boardTitle);
           
            let _like = [...like];
            _like.splice(i,1);
            setLike(_like);

            
          }}>삭제</button>
            
            
       )))})     
    }
        </div>
    )}
    
    <button onClick={()=>{//기존배열을 다른 변수로 옮겨도 주소값이 같기때문에 
      let _boardTitle = [...boardTitle];//배열을 터트리고 다시 묶어서 새주소값을 만듬
      _boardTitle[0] = 'JAVA';//그 후 첫번째 배열을 바꿈
      setBoardTitle(_boardTitle);
      
    }}>첫번째 게시물 제목바꾸기</button>

    <input type="text" value={newTitle} onInput={function(e){//벨류를 뉴로 땡겨옴(2)
      setNewTitle(e.target.value);
    }} />
    <button onClick={function(){
      if(newTitle === ''){
        alert(`제목을 입력하세요.`);
        return;
      }
      let _boardTitle = [...boardTitle];//배열은 무조건 깻다가 묶어야함.새주소값
      _boardTitle.push(newTitle);// 임시변수.push로 배열의 뒤에 추가해줌
      setBoardTitle(_boardTitle);


      let _like = [...like];
      _like.push(0);
      setLike(_like);

      setNewTitle(``);//생성후 인풋에 남아있는 값을 없애기 위해 비워둠. (1)

    }}>글 작성</button>

    

     
    

    
    
 

    {show ? <Detail boardTitle = {boardTitle} setBoardTitle={setBoardTitle} titleIndex = {titleIndex} /> : ''}
    </div>
  )
      
} */}

export default App
