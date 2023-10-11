const throwBall = setInterval(callback, 2000); // 2초마다 투구
function callback(){
  console.log(`제${console.count()}구`)
  console.log("투수 와인드업");
  setTimeout(function(){
    clearInterval(throwBall);
  }, 30000) // 30초 뒤 종료
  }
  // 콘솔 출력 원하는 방향 : "제n구" + "투수 와인드업"