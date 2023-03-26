// Get input > mk Arry > map letter to Alphabet div > Draw divs as Letters
// Get .alphabet segments > Draw raw (A-Z) > in random positions

// Animate .alphabet borders with moving progressive lights
// Rain animation

let string = document.getElementById("input");

let Alphabets = {
    'A':`<div class="alphabet A"></div>`, 'B':`<div class="alphabet B"></div>`, 'C':`<div class="alphabet C"></div>`, 'D':`<div class="alphabet D"></div>`,
     'E':`<div class="alphabet E"></div>`, 'F':`<div class="alphabet F"></div>`, 'G':`<div class="alphabet G"></div>`, 'H':`<div class="alphabet H"></div>`, 
     'I':`<div class="alphabet I"></div>`, 'J':`<div class="alphabet J"></div>`, 'K':`<div class="alphabet K"></div>`, 'L':`<div class="alphabet D"></div>`, 
     'M':"Moon", 'N':"Noted", 'O':"Obligation", 'P':"Pleasure", 'Q':"Quick", 'R':"Resolve", 'S':"Rigid", 'T':"Tatsu",  
     'U':"Umbra", 'V':"Vauban", 'W':"Water", 'X':"Xitsonga",'Y':"Yew", 'Z':"Zen", " ":"|_|", ".":"\<\>",
    '0':`<div class=\"zero\">This would be a div</div>`, '#':`<div class="alphabet hashTag"></div>`
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
