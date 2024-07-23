const container = document.querySelector(".Demo")








function calculate(){
    for (i=1; i<257; i++){
        const grid = document.createElement("div")
        grid.style.border = "solid 1px red"
        container.appendChild(grid);
    }

    const Rahmen = document.querySelectorAll(".Demo > div")
        Rahmen.forEach((div) => {
            const width = container.offsetWidth;
            const height = container.offsetHeight;
            const widthDiv = width / 16 -2 + "px";
            const heightDiv = height /16 -2 + "px";
            console.log(heightDiv)
            div.style.width = widthDiv;
            div.style.height = heightDiv;
             
        });
        
    }
    
calculate()