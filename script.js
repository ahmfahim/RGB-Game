var numSquare = 6;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var massageDisplay = document.querySelector("#massage");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquare = 3
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor; 
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none"
        }
    }
    
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquare = 6;
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor; 
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    massageDisplay.textContent = "";
    // generate all new colors
    colors = generateRandomColors(numSquare);
    // pic a new random colors
    pickedColor = pickColor();
    // change color dispalay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Game"
    // change a colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.backgroundImage = "url('bodybg.jpg')";
    h1.style.backgroundSize = "cover";
    h1.style.backgroundRepeat = "no-repeat";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // add initial color to squares
    squares[i].style.background = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color fo click square
        var clickedColor = this.style.background;
        // compare color to pickedColor
        if(clickedColor === pickedColor){
            massageDisplay.textContent = "WIN";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.background = clickedColor;

        }else{
            this.style.background ="#232323";
            massageDisplay.textContent = "Try Again!"
        }

    });
}

function changeColors(color){
    //loop through all the squares
    for(var i = 0; i < squares.length; i++){
    // change each to mactch given color
        squares[i].style.background = color;

    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = [];

    // add num random colors to array
    for(var i = 0; i < num; i++){
        // get random color and into arr
        arr.push(randomColor())
         
    }

    // return the array
    return arr;
}

function randomColor(){
    // pick a "red" from  0-255
    var r = Math.floor(Math.random() * 256);

    // pick a "green" from  0-255
    var g = Math.floor(Math.random() * 256);

    // pick a "blue" from  0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g +", " + b + ")";
}