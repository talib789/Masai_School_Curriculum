function myfunc() {
    var element = document.getElementById("div");
    element.classList.toggle("toggleclass");
    for (let i = 1; i <= 3; i++){
        let div1 = document.getElementById("maindiv");
        var x = document.createElement("div");
        div1.appendChild(x);
        x.append("count" + i)
        if (i === 3) {
            x.append(" ")
        }
    }
}