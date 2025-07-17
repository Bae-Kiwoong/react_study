import { useState } from 'react';
import './App.css'
import Detail from './Detail';

const App2 = () => {
  const [title,setTitle] = useState('게시판');
  
  const [show,setshow] = useState(false);
  
  const [titleIndex, setTitleIndex] = useState(0);
  const [newTitle,setNewTitle] = useState(``);
  
  const [board, setBoard] = useState([
    {
      title : 'REACT',
      date : '2025-07-15',
      like : 0
    },
    {
      title : 'HTML',
      date : '2025-07-16',
      like : 0
    },
    {
      title : 'CSS',
      date : '2025-07-17',
      like : 0
    },
  ])
  
  return (
 <div>
  <div className="nav">
    <h3>{title}</h3>
  </div>
  {
    board.map(function(data , i){
      return (
        <div className="list" key={i}>
          <h4 onClick={function(){
            setshow(!show);
             setTitleIndex(i);
          }}>{board[i].title}</h4>
          <button onClick={function(e){
            e.preventDefault;
            board[i].like += 1;
            setBoard([...board]);
          }}>좋아요</button>{board[i].like}
          
          <p>{board[i].date}</p>
          <button onClick={function(){
            let _board = [...board];
            _board.splice(i,1);
            setBoard(_board);

            let _like = [...board];
            _like.splice(i,1);
            setBoard(_like);
            console.log(_like);
            
          }}>삭제</button>
            

        </div>
      );
    })
  
  }
   <input type="text" value={newTitle} onChange={function(e){
      setNewTitle(e.target.value);
      console.log(e.target.value);
      
   }} />         
   
    <button onClick={function(){
      if(newTitle === ''){
        alert(`제목을 입력하세요.`);
        return;
      }
      let now = new Date();
      let date = now.getFullYear()+ `-` + (now.getMonth()+1) + `-` + now.getDate();

      let newData = {
        title: newTitle,
        date: date,
        like: 0
      }  
     let _board = [...board];
     _board.push(newData);
     setBoard(_board); 
     setNewTitle(``);
     

   }}>추가</button>
            


{show ? <Detail board = {board} setBoard = {setBoard} titleIndex = {titleIndex} /> : ''}
 </div>
  );
};

export default App2;