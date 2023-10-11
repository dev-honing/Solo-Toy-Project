const throwBall = setInterval(callback, 2*1000); // 2초마다 투구

// 제어를 위한 초기화
count = 0; 
function callback(){
  count++;
  console.log(`제${[count]}구: 투수 와인드업`);
  }
setTimeout(function(){
  clearInterval(throwBall);
}, 30*1000) // 30초 뒤 종료