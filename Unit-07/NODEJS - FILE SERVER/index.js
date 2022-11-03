const http = require('http')
const fs = require('fs')
const port  = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('content-Type' , 'text/html')
    if (req.url == '/favicon.ico') {
        res.statusCode = 204
    } 
    else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html');
        let path = "." + req.url
        fs.readdir(path,{ "encoding": "utf8" },(err,data)=>{
            console.log(data)
            if (err) {
                const content = fs.readFileSync(path.toString())
                res.end(content)
            } 
            else{
                let result = ''
                if (data.length == 0) {
                    result += "<h2>page not found</h2>"
                    res.end('<h2>Page not found</h2>')
                }
                data.forEach((el) => {
                    result += (`<button style="font-size : 30px"><a href = ${el + "/"}>${el}</a></button><br/><br/>`)
                })
                res.end(`<h1>Current directory</h1><hr/><br/>`+result)
            }
        })
       
    }
})
server.listen(port , () => {
    console.log('server is running on http://localhost:3000')
})