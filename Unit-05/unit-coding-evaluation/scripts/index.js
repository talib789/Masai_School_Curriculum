/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

let submit = document.getElementById("submit").addEventListener("click", storeUserData);

let userData = JSON.parse(localStorage.getItem('user')) || [];

function storeUserData(){
    event.preventDefault();
    let profile_pic = document.getElementById("user_pic").value;
    let name = document.getElementById("user_name").value;
    let email = document.getElementById("user_email").value;
    let country = document.getElementById("user_country").value;

    console.log(profile_pic,name,email,country);

    let dataExist = userData.length &&
                    JSON.parse(localStorage.getItem('user')).some(data =>
                        data.name.toLowerCase() == name.toLowerCase() &&
                        data.email == email &&
                        data.country == country);

    if (!dataExist) {
        userData.push({name,profile_pic,email,country});
        localStorage.setItem('user', JSON.stringify(userData));
        document.querySelector('form').reset();
        document.getElementById('user_name').focus();
        alert('Your account has been created');
    }else{
        alert('!!! You have already account !!!')
    }
}

























































// document.querySelector('#submit').addEventListener('click',createUserFn)

// function createUserFn(){
//     event.preventDefault()
//     let user_profile_url = document.getElementById('user_pic').value;
//     let user_profile_name = document.getElementById('user_name').value;
//     let user_profile_email = document.getElementById('user_email').value;
//     let user_profile_country = document.getElementById('user_country').value;
//     let user={
//         "image":user_profile_url,
//         "name":user_profile_name,
//         "email":user_profile_email,
//         "country":user_profile_country
//     };
//     localStorage.setItem("user", JSON.stringify(user));
//     window.location.href="worldNews.html"
// }