import navbar from "./components/navbar.js";
let navbarDiv = document.getElementById("navbar_div");
navbarDiv.innerHTML = navbar();

let createBlogButton = document.getElementById("create-blog-button");
createBlogButton.addEventListener("click", async function (){
    try {
        // get all the input value;
        let blogData = {
            title: document.getElementById("title").value,
            body: document.getElementById("body").value,
            author: document.getElementById("author").value,
        };
        // make a post request
        let res = await fetch (`http://localhost:3004/blogs`,{
            method: "post",
            body: JSON.stringify(blogData),
            headers: {
            "content-Type": "application/json",
            },
        });
        // move back to homepage (main.html)
        location.href = "main.html";
    } catch (error) {
        console.log(error);
    }
        
    });
