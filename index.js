let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let show1EL = document.getElementById("show1-el")
let show2EL = document.getElementById("show2-el")
let genBtn = document.getElementById("gen-btn")


  for(let i=0; i<5; i++){
        let character = characters[Math.floor(Math.random()* characters.length )]
     
        show1EL.textContent = characters[character]
        console.log(character)
       
   }
  


genBtn.addEventListener("click", function (){
    //for(let i=0; i<5; i++){
        //let character = characters[Math.floor(Math.random()* characters.length )]
     
        //show1EL.textContent = characters[character]
   // }
    let randomIndexOne = Math.floor(Math.random() * characters.length)
    let randomIndexTwo = Math.floor(Math.random() * characters.length)

    show1EL.textContent = characters[randomIndexOne]
    show2EL.textContent = characters[randomIndexTwo]
    
})



const originalArray=["a","b","c","d","e","f","g","h","i"];


function RandomElements(n){
  const newArray = []

    if (n>originalArray.length) {
        return originalArray;
    }
    else {
      for(let i = 0; i < n; i++){
    newArray.push(originalArray[Math.floor(Math.random() * originalArray.length)])
  }
  return newArray;
    }
    show2EL.textContent = originalArray[newArray]
}

console.log(RandomElements(2))



