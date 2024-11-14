const turn_up = document.getElementById("turn-up");
const reset_turn = document.getElementById("reset-turn");
const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const nostyle = document.getElementById("nostyle")
const capitalize = document.getElementById("capitalize");
const reset_caps = document.getElementById("reset-caps");
const decapitalize = document.getElementById("decapitalize");
const reset_decaps = document.getElementById("reset-decaps");
const underline = document.getElementById("underline");
const overline = document.getElementById("overline");
const strike = document.getElementById("strike");
const no_line = document.getElementById("no-line");
const left = document.getElementById("left");
const center = document.getElementById("center");
const right = document.getElementById("right");
const center_v = document.getElementById("center-v");
const top_v = document.getElementById("top-v")
const font_plus = document.getElementById("font+1")
const font_minus = document.getElementById("font-1")
const change_font = document.getElementById("fonts")
const color = document.getElementById("color");
const area = document.getElementById("area")
const spacing = document.getElementById("spacing");

turn_up.addEventListener("click", function() {

    area.style.transform = "rotate(180deg)"

})

reset_turn.addEventListener("click", function() {

    area.style.transform = "rotate(0deg)"

});


bold.addEventListener("click", function() {

    area.style.fontWeight = "800" 


})



italic.addEventListener("click", function() {

    area.style.fontStyle = "italic" 


})

nostyle.addEventListener("click", function(){

    area.style.fontStyle = "normal"
    area.style.fontWeight = "normal"

});




capitalize.addEventListener("click", function() {

    area.style.textTransform = "uppercase";

});


decapitalize.addEventListener("click", function() {

    area.style.textTransform = "lowercase";

});

underline.addEventListener("click", function() {

    area.style.textDecoration = "underline"

});


overline.addEventListener("click", function() {

    area.style.textDecoration = "overline"

});

strike.addEventListener("click", function() {

    area.style.textDecoration = "line-through"

});

no_line.addEventListener("click", function() {

    area.style.textDecoration = "none"

});

left.addEventListener("click", function() {

    area.style.textAlign = "left";

});

center.addEventListener("click", function() {

    area.style.textAlign = "center";

});

right.addEventListener("click", function() {

    area.style.textAlign = "right";

});

spacing.addEventListener("change", function () {
    
    area.style.letterSpacing = `${spacing.value}px`
    
})


let font_size = 16;

font_plus.addEventListener("click", function(){
    font_size++

    area.style.fontSize = `${font_size}` + "px"

})

font_minus.addEventListener("click", function() {
    font_size--
    
    area.style.fontSize = `${font_size}` + "px"

})

color.addEventListener("change", function() {
    area.style.color = `${color.value}`
})

function changeFont(font) {
    var sel = window.getSelection(); 
    if (sel.rangeCount) {

      area.style = 'font-family:' + font.value + ';'; 
      area.innerHTML = sel.toString();

    }
  }


center_v.addEventListener("click", function() {

    area.style = "padding: 180px 5px;"

});


top_v.addEventListener("click", function(){
    area.style = "padding: 5px;"
})

