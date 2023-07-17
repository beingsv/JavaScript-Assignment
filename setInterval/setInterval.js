//countung on webpage using setInterval
function updating() {
    let cCount = parseInt(document.getElementById("counter").textContent);
    cCount++;
    document.getElementById("counter").textContent = cCount;
}

const intervalTime = 1000;
const interval = setInterval(updating, intervalTime);
  
setTimeout(() => {
    clearInterval(interval);
    console.log("Interval cleared after 10 seconds.");
}, 10000);



//printing date using setInterval
function intervalFunc() {
    console.log("Interval function : ", new Date());
}

const intervalTime1 = 2000;
const interval1 = setInterval(intervalFunc, intervalTime1);
  
setTimeout(() => {
    clearInterval(interval1);
    console.log("Stop after 10 seconds.");
}, 10000);

