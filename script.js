const body = document.querySelector("body");
const container = document.querySelector(".container");
for (let x=0; x<16; x++){
    let row = document.createElement("div");
    row.classList.toggle("row");
    for(let y=0; y<16; y++){
        let t = document.createElement("div");
        t.classList.toggle("element");
        t.setAttribute("style","height:40px; width:40px; border:5px solid black; ");
        row.append(t);
    }
    container.append(row);
}
