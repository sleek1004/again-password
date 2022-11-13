let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let show1EL = document.getElementById("show1-el")
let show2EL = document.getElementById("show2-el")
let genBtn = document.getElementById("gen-btn")


getRandomCharacters(){
    const characterArrays = characters 
}

genBtn.addEventListener("click", function (){
    //characters.push(show1EL.value)
    let randomIndexOne = Math.floor(Math.random() * charactersArrays.length)
    let randomIndexTwo = Math.floor(Math.random() * charactersArrays.length)

    show1EL.textContent = charactersArrays[randomIndexOne]
    show2EL.textContent = charactersArrays[randomIndexTwo]
})




