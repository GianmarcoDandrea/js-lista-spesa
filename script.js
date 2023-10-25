const shoppingList = ["pane", "pasta", "olio", "sale", "pepe", "zucchero"];


let i = 0;
let listItem = "";
while(i < shoppingList.length) {
    listItem += `
                <li>${shoppingList[i]}</li>`;
    console.log(listItem);
    
    i++;
}

document.getElementById("list").innerHTML = listItem;
