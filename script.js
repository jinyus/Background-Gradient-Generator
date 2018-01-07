var input1 = document.getElementsByName('color1')[0];
var input2 = document.getElementsByName('color2')[0];
var cssInfo = document.getElementsByTagName('h3')[0];
var body = document.getElementById("body");

//linear-gradient(to right, red , blue);
function setColor (){
   body.style.background = "linear-gradient(to right, "+ input1.value +"," + input2.value +")" ;
    
    cssInfo.textContent = "background: " + body.style.background;
}


input1.addEventListener("input", setColor);

input2.addEventListener("input", setColor);