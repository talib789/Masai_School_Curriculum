import { getData } from "./scripts/getDataUtil.js";
import navbar from "./components/navbar.js";

let navbarDiv = document.getElementById("navbar_div");
navbarDiv.innerHTML = navbar();

let tableBody = document.getElementById("table-body");

  const saveDataToLocalStorage = (key , value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }

const displayData = (blogs, parentNode) => {
    blogs.forEach((blog) => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = blog.id;
        let td2 = document.createElement("td");
        td2.textContent = blog.title;
        let td3 = document.createElement("td");
        td3.textContent = blog.author;

        let td4 = document.createElement("td");
       let viewBtn = document.createElement("button");
       viewBtn.textContent = "VIEW";
       viewBtn.onclick = function () {
        // save blog id to localStorage;
       saveDataToLocalStorage("blogId", blog.id);
        //should get redirected to view page;
        location.href = "view.html";
      
       };
       td4.append(viewBtn);

       let td5 = document.createElement("td");
       let editBtn = document.createElement("button");
       editBtn.textContent = "EDIT";
       editBtn.onclick = function () {
       saveDataToLocalStorage("blogId", blog.id);
       location.href = "edit.html"
       };
       td5.append(editBtn);

       let td6 = document.createElement("td");
       let deleteBtn = document.createElement("button");
       deleteBtn.textContent = "DELETE";
       deleteBtn.onclick = async function () {
       let res = await fetch(`http://localhost:3004/blogs/${blog.id}`,{
        method: "DELETE"
       })
       window.location.reload();
       };
       td6.append(deleteBtn);

       tr.append(td1, td2, td3, td4, td5, td6);
       parentNode.append(tr);
    });
};
   
const initFunc = async () => {
    try {
       let blogData = await getData(`http://localhost:3004/blogs`); 
       displayData(blogData, tableBody);
    } catch (error) {
       console.log(error); 
    }
};

initFunc();