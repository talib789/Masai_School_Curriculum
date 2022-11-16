import navbar from "./components/navbar.js"
import { getData } from "./scripts/getData.js"

let header = document.getElementById("header");
header.innerHTML = navbar();

let searchInputElement = document.getElementById("search-input");
searchInputElement.addEventListener("keypress", fetchUserDataAndUpdate);

let containerDiv = document.getElementById("container");

function displayRepos(repos, parentNode){
    repos.forEach((repo) => {
        let repoCard = document.createElement("div");

        let idElement = document.createElement("p");
        idElement.textContent = repo.id;

        let nameElement = document.createElement("p");
        nameElement.textContent = repo.name;

        let htmlUrlElement = document.createElement("a");
        htmlUrlElement.textContent="HTML URL";
        htmlUrlElement.href = repo.html_url;

        repoCard.append(idElement,nameElement,htmlUrlElement);
        parentNode.append(repoCard);
    });
}

async function fetchUserDataAndUpdate(e) {
    try {
        if(e.key ==="Enter"){
            let searchParamValue = searchInputElement.value;

            let userData = await getData(`https://api.github.com/users/${searchParamValue}`);

            let profileImageELement = document.getElementById("profile-img");
            profileImageELement.src = userData.avatar_url;

            let reposData = await getData(userData.repos_url);
            console.log(reposData);
            displayRepos(reposData,containerDiv);
        }
    } catch (error) {
        console.log(error);
    }
}