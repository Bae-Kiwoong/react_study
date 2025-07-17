function Detail({board,setBoard,titleIndex}){
  return (
    <div className="detail">
      
      <h4>{board[titleIndex].title}</h4>
      <p>날짜</p>
      <p>내용</p>
  </div>
  )
}
export default Detail;