const saveDataToLocalStorage = (key, value) =>{
    localStorage.setItem(key, JSON.stringify(value));
}

const displayData = (blogs, parentNode) => {
    parentNode.innerHTML = "";
    blogs.forEach(blog => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = blog.id;
        let td2 = document.createElement("td");
        td2.textContent = blog.created_date;
        let td3 = document.createElement("td");
        td3.textContent = blog.title;
        let td4 = document.createElement("td");
        td4.textContent = blog.author;
        let td5 = document.createElement("td");
        td5.textContent = blog.category;
        let td6 = document.createElement("td");
        td6.textContent = blog.tags;

        let td7 = document.createElement("td");
        let viewBtn = document.createElement("button");
        viewBtn.textContent="VIEW";
        viewBtn.onclick = function () {
            saveDataToLocalStorage("blogId",blog.id);
            location.href = "./view.html";
        }
        td7.append(viewBtn);

        let td8 = document.createElement("td");
        let editBtn = document.createElement("button");
        editBtn.textContent="EDIT";
        editBtn.onclick = function () {
            saveDataToLocalStorage("blogId",blog.id);
            location.href = "./edit.html";
        }
        td8.append(editBtn);


        let td9 = document.createElement("td");
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent="DELETE";
        deleteBtn.onclick = async function () {
            let res = await fetch(`http://localhost:3004/blogs/${blog.id}`,{
                method: "DELETE"
            });
            window.location.reload();
        };
        td9.append(deleteBtn);
        
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
        parentNode.append(tr)
    });
}

export {displayData};