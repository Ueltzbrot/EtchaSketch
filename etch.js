const container = document.querySelector(".Demo")

function Size(x){
    const width = container.getBoundingClientRect().width;
    const height = container.getBoundingClientRect().height;
    const widthDiv = width / x + "px";

    return widthDiv;
}

function Size1(x){
    const width = container.getBoundingClientRect().width;
    const height = container.getBoundingClientRect().height;
    const heightDiv = height / x + "px";

    return heightDiv;
}

calculate()

function calculate(x){
    console.log(x)
if (x === undefined) { for (i=1; i<257; i++){
        const grid = document.createElement("div")
        grid.style.border = "solid 0.2px white"
        container.appendChild(grid);
        const width = container.getBoundingClientRect().width;
        const height = container.getBoundingClientRect().height;
        const widthDiv = width / 16 + "px";
        const heightDiv = height / 16 + "px";
        grid.style.width = widthDiv;
        grid.style.height = heightDiv;
        grid.style.boxSizing = "border-box";
        container.appendChild(grid);
    
    }} 
    else if (x !== "undefined") {
        const width1 = Size(x)
        const height1 = Size1(x)
    for (i=1; i<x*x+1; i++){
        const grid = document.createElement("div")
        grid.style.border = "solid 0.2px white"
        grid.style.width = width1;
        grid.style.height = height1;
        grid.style.boxSizing = "border-box";
        container.appendChild(grid);
        
    }}
} 

const hover = document.querySelectorAll(".Demo > div")
const clear = document.querySelectorAll(".Delete")

clear.forEach((button) => {
    button.addEventListener("click", (e) =>{
    const target = e.target;
        console.log(target.id)

    switch(target.id){
        case 'Clear' :
            hover.forEach((div) => {
            div.style.backgroundColor = "black";
            })
            break;

        case 'Eraser':
            hover.forEach((div) => {
                div.addEventListener("mouseover", (e) => {
                    div.style.backgroundColor = "black";


                })
            })
            break;

        case 'Black':
            hover.forEach((div) => {
                div.addEventListener("mouseover", () => {
                    div.style.backgroundColor = "blue"
                })
            })
            break;
        
        case 'GridSize':
            do{
                var selection = parseInt(window.prompt("Please enter a number from 1 to 100", ""), 10);
            }while(isNaN(selection) || selection > 100 || selection < 1);
            
            container.textContent = ""
            calculate(selection);     
            break;



        case 'Rainbow':
            hover.forEach((div) => {
                div.addEventListener("mouseover", () => {
                div.style.backgroundColor = color()
            })
        })
        break;
    }
})


})

function color(){

const minCeiled = Math.ceil(0);
const maxFloored= Math.floor(257);
r = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
b = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
g = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
return `rgb(${r}, ${g}, ${b})`

}
