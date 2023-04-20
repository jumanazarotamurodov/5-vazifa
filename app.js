const input = document.querySelector("input")
const btn = document.querySelector("button")
let text = document.querySelector("li")
let arr = [jumanazar,]
text.textContent = arr

function myFunction(){
    
    btn.addEventListener("click", () =>{
        let inText = input.value
        text.textContent = inText
    })
}
myFunction()

