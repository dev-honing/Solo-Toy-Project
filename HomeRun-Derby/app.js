// 2초마다 투구
const throwBall = setInterval(callback, 2000);
function callback(){
  for(i=1; i<16; i++){
    console.log(`제${[i]}구 투구`);
  }
  
}