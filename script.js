const h1 = document.querySelector("h1")

document.addEventListener("keypress", e=>{
    if(e.key == "w" && h1.textContent == ''){
        h1.textContent += "Welcome"
    }
    if(e.key == "t" && h1.textContent == 'Welcome'){
        h1.textContent += " to"
    }
    if(e.key == "o" && h1.textContent == 'Welcome to'){
        h1.textContent += " our"
    }
    if(e.key == "w" & h1.textContent == 'Welcome to our'){
        h1.textContent += " website"
    }

})