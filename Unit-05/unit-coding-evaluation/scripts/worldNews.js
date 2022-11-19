import {getData} from "./getData.js";

let userData = JSON.parse(localStorage.getItem('user')) || [];

let profilePic = document.getElementById("user_img");
profilePic.setAttribute("src", userData[0].profile_pic);

let userName = document.getElementById("user_name");
    userName.innerText = userData[0].name;

let userEmail = document.getElementById("user_email");
    userEmail.innerText= userData[0].email;

let userCountry = document.getElementById("user_country");
    userCountry.innerText = userData[0].country;


let newsResult = document.getElementById("news_result");


window.addEventListener('load', getNewsReport);


async function getNewsReport(){
    try {
        let userCountry = userData[0].country;

        let data = await getData(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${userCountry}`);

        console.log(data.articles);
        displayNews(data.articles,newsResult);

    } catch (error) {
        console.log(error);
    }
}


function displayNews(newsReport, parentNode){
    newsReport.forEach((news) => {
        let newsCard = document.createElement("div");
            newsCard.setAttribute("class", "news")

        let imageElement = document.createElement("img");
        imageElement.src= news.urlToImage;

        let titleElement = document.createElement("p");
        titleElement.textContent = news.title;

        let authorElement = document.createElement("p");
        authorElement.textContent = news.author;

        newsCard.append(imageElement,titleElement,authorElement);
        parentNode.append(newsCard);
    });
}




































































// var users = localStorage.getItem("user");
// let user=JSON.parse(users)
// console.log(user)
// showUser(user)

// function showUser(users){

//         let containerDiv = document.getElementById('sidebar')

//         let img = document.createElement('img')
//         img.setAttribute("id","user_img")
//         img.src = users.image;

//         let name = document.createElement('h3')
//         name.setAttribute("id","user_name")
//         name.innerHTML = users.name

//         let email = document.createElement('h3')
//         email.setAttribute("id","user_email")
//         email.innerHTML = users.email

//         let countryname = document.createElement('h3')
//         countryname.setAttribute("id","user_country")
//         if(users.country=="in"){
//             countryname.innerHTML = 'India'
//             countryCode = "in"
//             countryNews()
//         }
//         else if(users.country=="us"){
//             countryname.innerHTML = 'USA'
//             countryCode = "us"
//             countryNews()
//         }
//         else if(users.country=="uk"){
//             countryname.innerHTML = "UK"
//             countryCode = "uk"
//             countryNews()
//         }
//         else if(users.country=="ch"){
//             countryname.innerHTML = 'China'
//             countryCode = "ch"
//             countryNews()
//         }
//         else if(users.country=="nz"){
//             countryname.innerHTML = "Newzeland"
//             countryCode = "nz"
//             countryNews()
//         }
//         else{
//             alert('Enter Valid Country...user not available for selected Country...!')
//             countryname.innerHTML = 'Not Found'
//         }

//         containerDiv.append(img,name,email,countryname)

//         // localStorage.clear()
// }

// async function countryNews(){
//     try {
//         let result = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${countryCode}`);
//         let userdata = await result.json();
//         console.log(userdata);
//         showTable(userdata)
//     } catch (error) {
//         console.log(error);
//     }
// }

// function showTable(userdata){
//     userdata.articles.map(function(element){
//         let containerBox = document.getElementById('news_result');
//         let Newsrow = document.createElement('div')
//         Newsrow.setAttribute("id","news")

//         let div1=document.createElement('div')
//         div1.setAttribute("id","div_img")
//         let newsImg = document.createElement('img')
//         newsImg.setAttribute("id","news_img")
//         newsImg.src = element.urlToImage
//         div1.append(newsImg)

//         let div2=document.createElement('div')
//         div2.setAttribute("id","div_info")
//         let newsTitle = document.createElement('h3')
//         newsTitle.setAttribute("id","news_title")
//         newsTitle.innerHTML = element.title

//         let newsAuthor = document.createElement('h3')
//         newsAuthor.setAttribute("id","news_author")
//         newsAuthor.innerHTML = element.author

//         div2.append(newsTitle,newsAuthor)

//         Newsrow.append(div1,div2)

//         containerBox.append(Newsrow)
//     });
    
// };

// document.querySelector("#searchCountry").addEventListener('click',searchFn)

// function searchFn(){
//     let countryCode;

//     let country = document.querySelector("#search_box").value

//     if(country == 'India' || country == 'india'  || country == 'INDIA'){
//         countryCode = "in"
//         localStorage.setItem('searchCode',countryCode)
//         keysearchFn()
//     }
//     else if(country == 'USA' || country == 'usa'  || country == 'Usa'){
//         countryCode = "us"
//         localStorage.setItem('searchCode',countryCode)
//         keysearchFn()
//     }
//     else if(country == 'China' || country == 'china'  || country == 'CHINA'){
//         countryCode = "ch"
//         localStorage.setItem('searchCode',countryCode)
//         keysearchFn()
//     }
//     else if(country == 'Newzeland' || country == "New Zeland"  || country == "newzeland"){
//         countryCode = "nz"
//         localStorage.setItem('searchCode',countryCode)
//         keysearchFn()
//     }
//     else if(country == 'UK' || country == "uk"){
//         countryCode = "uk"
//         localStorage.setItem('searchCode',countryCode)
//         keysearchFn()
//     }
//     else{
//         alert('Enter Valid Country...user not available for selected Country...!');
//     }
// }
// function keysearchFn(){
//     var countryCode = localStorage.getItem("user");
//     countryCode=JSON.parse(countryCode)
//     console.log(countryCode)
//     countryNews()
//     window.location.reload()
// }