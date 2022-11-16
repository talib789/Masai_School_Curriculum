import navbar from "./components/navbar.js"
import { getData } from "./scripts/getData.js"

let header = document.getElementById("header");
header.innerHTML = navbar();

let searchInputElement = document.getElementById("search-input");
searchInputElement.addEventListener("keypress", fetchUserDataAndUpdate);

let containerDiv = document.getElementById("container");

function displayRepos(usersData, parentNode){
    usersData.forEach((user) => {
        let userCard = document.createElement("div");

        let idElement = document.createElement("p");
        idElement.textContent = user.id;

        let nameElement = document.createElement("p");
        nameElement.textContent = user.login;

        let htmlUrlElement = document.createElement("a");
        htmlUrlElement.textContent="HTML URL";
        htmlUrlElement.href = user.html_url;

        userCard.append(idElement,nameElement,htmlUrlElement);
        parentNode.append(userCard);
    });
}

async function fetchUserDataAndUpdate(e) {
    try {
        if(e.key ==="Enter"){
            let searchParamValue = searchInputElement.value;
            console.log(searchParamValue);
            let usersData = await getData(`https://api.github.com/search/users?&q=${searchParamValue}`);

            console.log(usersData);
            displayRepos(usersData.items,containerDiv);
        }
    } catch (error) {
        console.log(error);
    }
}