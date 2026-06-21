const body = document.querySelector("body");
const container = document.querySelector(".container");
const button = document.querySelector("button");
button.addEventListener("click", function(event){
    container.innerHTML="";
    let x= prompt("enter number between 1 and 100","0")
    x=Number(x);
    if (x === 0 || null) {
        alert("enter a number to play");
    }
    else if (x>100) {
        alert("enter number below 100");
    }
    else {
        let  m=1000/x;
        for (let r=0; r<x; r++){
        let row = document.createElement("div");
        row.classList.toggle("row");
        for(let y=0; y<x; y++){
            let t = document.createElement("div");
            t.classList.toggle("element");
            t.setAttribute("style", `height:${m}px; width:${m}px; border:1px solid black; box-sizing: border-box;`);
            t.addEventListener("mouseover", function(event){
                t.style.backgroundColor = "green";
            })
            row.append(t);
            }
        container.append(row);
        }
    }
})

