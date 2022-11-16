import {getData} from "../scripts/getDataUtil.js"
import {displayData} from "../scripts/displayDataTable.js"
import navbar from "../components/navbar.js";
let navbarDiv = document.getElementById("navbar_div");
navbarDiv.innerHTML = navbar();

let tableBody = document.getElementById("table-body");

document.getElementById("search_blog_btn").addEventListener("click", fetchAndUpdateResult);

async function fetchAndUpdateResult(){
    try {
        let searchParam = document.getElementById("search_param").value;

        let data = await getData(`http://localhost:3004/blogs?q=${searchParam}`);

        displayData(data,tableBody);
    } catch (error) {
        console.log(error);
    }
}