let Amar = {
    name : "Amar",
    skill : "singing",
    live  : "Goa",

    talent: function(order){
        console.log(`Give Your Skill of ${order} to ${this.name} `)
    },
};

let Akbar = {
    name : "Akbar",
    skill : "Chef",
    live : "Mumbai",
}

let Anthony = {
name : "Anthony",
skill : "Magician",
live : "Kashmir",
}

Amar.talent.call(Akbar, "singing")
Amar.talent.call(Anthony, "chef")
Amar.talent.call(Amar, "Magician")
