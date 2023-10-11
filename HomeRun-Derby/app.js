const throwBall = setInterval(callback, 2000); // 2초마다 투구

// 제어를 위한 초기화
count = 0; 
function callback(){
  count++;
  console.log(`제${[count]}구: 투수 와인드업`);
  }
setTimeout(function(){
  clearInterval(throwBall);
}, 30100) // 30초 뒤 종료