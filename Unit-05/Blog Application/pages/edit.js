import navbar from "./components/navbar.js";
import { getData } from "./scripts/getDataUtil.js";
let navbarDiv = document.getElementById("navbar_div");
navbarDiv.innerHTML = navbar();

// get the id from local storage;
let blogId = localStorage.getItem("blogId")
? JSON.parse(localStorage.getItem("blogId")) : "";

//make a nerwork request and prefill all the input boxes with the blog related data;

const initFunc = async (blogId) => {
    try {
        let data = await getData (`http://localhost:3004/blogs/${blogId}`);
        document.getElementById("title").value = data.title;
        document.getElementById("author").value = data.author;
        document.getElementById("body").value = data.body;
    } catch (error) {
        console.log(error);
    }
};
initFunc(blogId);

let editBlogBtn = document.getElementById("edit-blog-button");

editBlogBtn.addEventListener("click", async function(){
    try {
        let blogUpdatedData = {
            title : document.getElementById("title").value,
            body : document.getElementById("body").value,
            author : document.getElementById("author").value,
        };
 let res = await fetch (`http://localhost:3004/blogs/${blogId}`,{
    method:"PATCH",
    body: JSON.stringify(blogUpdatedData),
    headers: {
        "Content-Type": "application/json",
    },
    });

    location.href = "main.html";

    } catch (error) {
      
        console.log(error);
    }
});