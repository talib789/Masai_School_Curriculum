function navbar() {
    return `<div id="logo">
    <a href="./index.html">
        <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" alt="githubLogo" id="github-logo">
    </a>
</div>
<div id="search">
    <input type="text" id="search-input" placeholder="Scearch User..">
</div>
<div id="options">
    <ul id="list">
        <li>Pull Request</li>
        <li>Issues</li>
        <li>Market Place</li>
        <li>
            <a href="explore.html">Explore</a>
        </li>
    </ul>
</div>
<div id="profile">
    <img src="https://image.shutterstock.com/image-vector/default-placeholder-avatar-profile-on-260nw-490458517.jpg" alt="" id="profile-img">
</div>`
}

export default navbar;