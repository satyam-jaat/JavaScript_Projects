let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    let deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    deletebtn.classList.add("delete");

    item.innerText = input.value;
    ul.appendChild(item);
    item.appendChild(deletebtn);
    input.value = "";
});


//not applicable for the newly created elemnets only applicable for the existing one 
// let delBtns = document.querySelectorAll(".delete");
// for(delbtn of delBtns) {
//     delbtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         console.log(par.innerText);
//         par.remove();
//     });
// }

//to resolve the error we use event deligation

ul.addEventListener("click", function(event) {
    // console.log(event.target);  //tell us which event is targeted or clicked   
    // console.log(event.target.nodeName);  //tells which triger it

    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }
});