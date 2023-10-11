// const throwBall = setInterval(callback, 2000); // 2초마다 투구
// function callback(){
//   for(i=1; i<=15; i++){
//     console.log(`제${[i]}구 투수 와인드업`)
//   }
// }

// setTimeout(function(){
//   clearInterval(throwBall);
// }, 10000) // 30초 뒤 종료


const interval = setInterval(callback, 2000);
function callback(){
  console.log("hello");
}
// 2초마다 콘솔찍는 것은 잘되고 있다.
// 앞에 연번을 붙일 수 있는지 확인