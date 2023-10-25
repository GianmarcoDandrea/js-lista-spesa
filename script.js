//CONSTANTI
const userInputElem = document.getElementById("input-elem-list");
const insertBtn = document.getElementById("sendButton");
const shoppingList = [];
let listItem = "";

// BOTTONE PER INSERIRE I VALORI DI INPUT NELL'ARRAY
insertBtn.addEventListener("click", function () {

    const listItem = userInputElem.value;
    console.log(listItem);

    shoppingList.push(listItem);
    console.log(shoppingList);
    userInputElem.value = "";
    
    // INSERIRE GLI ELEMENTI DELL'ARRAI DENTRO UL 
    let i = 0;
    let itemList = "";
    
    while(i < shoppingList.length ) {
        itemList += `
                    <li>${shoppingList[i]}</li>`;
    
        console.log(itemList);
        
        i++;
    }
    
    document.getElementById("list").innerHTML = itemList;
});



