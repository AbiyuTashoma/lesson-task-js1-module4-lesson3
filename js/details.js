const idContainer = document.querySelector(".id");
const detailsContainer = document.querySelector(".details");

const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const listId = param.get("id");

idContainer.innerHTML = `${listId}`;

const url = "https://breakingbadapi.com/api/characters/";

const APIUrl = url + listId;

async function getCharacter (){

    detailsContainer.innerHTML = "";

    try {
        const response = await fetch(APIUrl);
    
        const result = await response.json();

        // console.log(result[0]);

        const character = result[0];

        detailsContainer.innerHTML = `<div">
                                        <h1>${character.name}</h1>
                                        <p>${character.occupation}</p>
                                        </div>`;

    }

    catch (error) {
        console.log("An error has ocurred");
        detailsContainer.innerHTML = "An error has ocurred";
    }
}

getCharacter();