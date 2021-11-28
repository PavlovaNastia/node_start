const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)

    res.write('<h1>For cats!</h1>')
    res.write('<h2>God bless the cat!</h2>')
    res.end(`
        <div style="background: green; width; 300px; height: 300px;">
            <img src="webserver/kotik.jpg" width="150" height="120">
            <hr>
            <h3>Cats will save the world!</h3>
        </div>
    `)
})

server.listen(3002, () => {
    console.log('Котик крадется...')
})
