//change background color with some delay
function changingColor() {
    const bodyElement = document.body;
    bodyElement.style.backgroundColor = "#98AFC7";
}

function clickEvent() {
    const changeButton = document.getElementById("changeButton");
    changeButton.addEventListener("click", () => {
        setTimeout(changingColor, 2000);
    });
}

clickEvent();



//printing number with the delay in console
function slow(number) {
    console.log(number);
  }
  
function printDelay() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            slow(i);
        },i * 1000); 
    }
} 
printDelay();



  

