const throwBall = setInterval(callback, 2000); // 2초마다 투구
function callback(){
  for(i=1; i<=10; i++){
    console.log(`제${[i]}구 투수 와인드업`)
    
    setTimeout(function(){
      clearInterval(throwBall);
    }, 30000) // 30초 뒤 종료
    }
  }
  
  // 1~10구를 한 번에 던져버리는 콘솔 출력 문제 발생
