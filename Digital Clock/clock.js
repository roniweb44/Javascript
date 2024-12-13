function digiClock() {

    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");

    const date = new Date();

    hour.innerHTML = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    minute.innerHTML = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    second.innerHTML = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  
    hour = hour % 12 ;

    if( hour === 0) {
        hour = 12;
    }
    
}

setInterval(() => {
    digiClock();
},1000)
