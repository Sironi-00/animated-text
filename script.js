// Get input > mk Arry > map letter to Alphabet div > Draw divs as Letters
// Get .alphabet segments > Draw raw (A-Z) > in random positions

// Animate .alphabet borders with moving progressive lights
// Rain animation

let string = document.getElementById("input");

let Alphabets = {
    'A':"Ace", 'B':"Banana", 'C':"Chocolate", 'D':"Delete", 'E':"Elite", 'F':"FOSS", 'G':"Gain", 
    'H':"Hope", 'I':"Intuition", 'J':"Jade", 'K':"Kage", 'L':"Limbo",'M':"Moon", 'N':"Noted", 
    'O':"Obligation", 'P':"Pleasure", 'Q':"Quick", 'R':"Resolve", 'S':"Rigid", 'T':"Tatsu", 
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
