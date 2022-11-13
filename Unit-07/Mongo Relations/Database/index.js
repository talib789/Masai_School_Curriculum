const mongoose = require('mongoose');

async function connectDatabase() {
    return new Promise((resolve, reject) => {
        const url = `mongodb://0.0.0.0:27017/mongo`
        mongoose.connect(url, (err) => {
            console.log(err);
            return reject(err)
        })

        console.log("Database Connected");
        return resolve()
    })
}

module.exports = connectDatabase;