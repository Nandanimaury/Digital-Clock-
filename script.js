function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
        
    const hourDeg = (hours * 30) + (minutes * 0.5);
    const minDeg = (minutes * 6) + (seconds * 0.1);
    const secDeg = (seconds * 6);
        
    document.querySelector(".hour").style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector(".min").style.transform = `rotate(${minDeg}deg)`;
    document.querySelector(".sec").style.transform = `rotate(${secDeg}deg)`;
  }
  setInterval(updateClock, 1000);
  updateClock();