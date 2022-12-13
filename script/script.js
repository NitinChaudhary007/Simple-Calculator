

// =========================================================================
// =========================== K E Y P A D =================================
// =========================================================================

var screen = "";
function catchKey(event) {

    if(this.textContent == "RESET") {
        screen = "";
        document.querySelector(".display").textContent="";
    } 
    
    else if (this.textContent == "DEL") {
        screen = screen.toString().slice(0, -1);
        document.querySelector(".display").textContent=screen;
    } 
    
    else if(this.textContent == "=") {
        screen = eval(screen);
        console.log(screen);
        document.querySelector(".display").textContent=screen;
    }
    
    else {
        screen = screen + this.textContent;
        document.querySelector(".display").textContent=screen;
               
    }
}


function handleKey(event) {
    if(!isNaN(event.key) || 
    event.key == "+" || 
    event.key == "-" || 
    event.key == "*" || 
    event.key == "/" || 
    event.key == "." 
    ) {
        console.log(event.key);
        screen = screen + event.key;
        document.querySelector(".display").textContent=screen;
    } else if(event.key == "Enter") {
        screen = eval(screen);
        document.querySelector(".display").textContent=screen;
        
    } else if(event.key == "Backspace") {
        screen = screen.toString().slice(0, -1);
        document.querySelector(".display").textContent=screen;

}
}

let keys = document.querySelectorAll(".key");

for(let i = 0; i<keys.length; i++) {
    keys[i].addEventListener("click", catchKey);
}


document.addEventListener("keydown", handleKey);



// =======================================================================
// =========================== T H E M E =================================
// =======================================================================



var checkBox = document.querySelector("#checkTheme");
document.querySelector("#checkTheme").addEventListener("click", () => {
    document.querySelector("body").classList.toggle("lightBody");
    document.querySelector(".keypad").classList.toggle("lightKeypad");
    document.querySelector(".display").classList.toggle("lightDisplay");
    document.querySelector(".del").classList.toggle("lightDel");
    document.querySelector(".reset").classList.toggle("lightReset");
    document.querySelector(".equals").classList.toggle("lightEquals");
    document.querySelector(".slider").classList.toggle("lightSlider");
    // document.querySelector(".slider").style.backgroundColor = "hsl(0, 5%, 81%)";

});







