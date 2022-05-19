const listContainer = document.querySelector(".list");

const selectOptions = document.querySelector("select");

function getValue (){

    const selectedValue = selectOptions.value;

    if (selectedValue) {
        console.log(selectedValue);
        createList (selectedValue);
        // return selectedValue;
    }
   
}

function createList (list){
    let html = [];

    for (let i = 0; i < list; i++){
        html += `<a class="item" href="details.html?id=${i + 1}">${i + 1}</a>`;
    }

    listContainer.innerHTML = html;
}

selectOptions.onchange = getValue;