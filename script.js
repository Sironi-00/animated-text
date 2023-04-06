// Get input > mk Arry > map letter to Alphabet div > Draw divs as Letters
// Get .alphabet segments > Draw raw (A-Z) > in random positions

// Animate .alphabet borders with moving progressive lights
// Rain animation

let string = document.getElementById("input");

let Alphabets = {
    'A':`<div class="alphabet A"></div>`, 'B':`<div class="alphabet B"></div>`, 'C':`<div class="alphabet C"></div>`, 'D':`<div class="alphabet D"></div>`,
     'E':`<div class="alphabet E"></div>`, 'F':`<div class="alphabet F"></div>`, 'G':`<div class="alphabet G"></div>`, 'H':`<div class="alphabet H"></div>`, 
     'I':`<div class="alphabet I"></div>`, 'J':`<div class="alphabet J"></div>`, 'K':`<div class="alphabet K"></div>`, 'L':`<div class="alphabet L"></div>`, 
     'M':`<div class="alphabet M"></div>`, 'N':`<div class="alphabet N"></div>`, 'O':`<div class="alphabet O"></div>`, 'P':`<div class="alphabet P"></div>`, 
     'Q':`<div class="alphabet Q"></div>`, 'R':`<div class="alphabet R"></div>`, 'S':`<div class="alphabet S"></div>`, 'T':`<div class="alphabet S"></div>`,  
     'U':`<div class="alphabet U"></div>`, 'V':`<div class="alphabet V"></div>`, 'W':`<div class="alphabet W"></div>`, 'X':`<div class="alphabet X"></div>`,  
     'Y':`<div class="alphabet Y"></div>`, 'Z':`<div class="alphabet Z"></div>`, ' ':`<div class="alphabet white-space"></div>`, '#':`<div class="alphabet hashTag"></div>`
}

let makeString = (letter) => {
    // Gets and convert letters to divs, where posible  
    return Alphabets[letter.toUpperCase()]?Alphabets[letter.toUpperCase()]:letter
}

let drawString = () => {
    let stringArray = [...string.value];
    let data = ""
    stringArray.forEach(letter=>{
        data += makeString(letter)
    })
    document.querySelector(".container").innerHTML = data
    //console.log(stringArray);
}

string.addEventListener("input", ()=> drawString());

//////////////////////////////////////////////
// Code Acad snipp
function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeColor(){
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    let alpha = document.querySelectorAll(".alphabet")
        alpha.forEach(div=> {
            //div.style.backgroundColor = getRandomColor
            //document.documentElement.style.setProperty("--color1", getRandomColor())
        })
}
