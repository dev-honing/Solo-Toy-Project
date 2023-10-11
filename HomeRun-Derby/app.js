const throwBall = setInterval(callback, 2000); // 2초마다 투구
function callback(){
  console.log(`제${console.count()}구`)
  console.log("투수 와인드업");
  setTimeout(function(){
    clearInterval(throwBall);
  }, 30000) // 30초 뒤 종료
  }
  // 콘솔 출력 확인
  2
default: 2
app.js:3
제undefined구
app.js:3
투수 와인드업
app.js:4
2
default: 3
app.js:3
제undefined구
app.js:3
투수 와인드업
app.js:4
2
default: 4
app.js:3
제undefined구
app.js:3
투수 와인드업
app.js:4
2
default: 5
app.js:3
제undefined구
app.js:3
투수 와인드업