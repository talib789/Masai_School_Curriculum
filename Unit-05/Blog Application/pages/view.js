import { getData } from "./scripts/getDataUtil.js";
import navbar from "./components/navbar.js";

let navbarDiv = document.getElementById("navbar_div");
navbarDiv.innerHTML = navbar();

// get the id from local storage;
let blogId = localStorage.getItem("blogId")
? JSON.parse(localStorage.getItem("blogId")) : "";

// catch hold of that html node wherein you want to display data;
let root = document.getElementById("root");

//make a req to get blog with id ( we get from local storage)
const displayData = (blog, parentNode) => {
    parentNode.innerHTML = "";
    //{ id, author, body, titl}

    let titleElement = document.createElement("p");
    titleElement.textContent = `Title : ${blog.title}`;
    let bodyElement = document.createElement("p");
    bodyElement.textContent = `Content : ${blog.body}`;
    let authorElement = document.createElement("p");
    authorElement.textContent = `By : ${blog.author}`;

    parentNode.append(titleElement, bodyElement, authorElement);

};

 const initFunc = async () => {
    try {
        let blogData = await getData(`http://localhost:3004/blogs/${blogId}`);
       displayData(blogData, root);
    } catch (error) {
        console.log(error);  
    }
 };
 initFunc(blogId);

