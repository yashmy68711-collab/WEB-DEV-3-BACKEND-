import http from 'http'
import { receiveMessageOnPort } from 'worker_threads'
const server = http.createServer((req,res)=>{    // we write logic here after creating server using this line 

    if(req.url === '/' && req.method == 'GET'){  // here we write logic 
        res.end('<h1>Welcome to Backend</h1>')
    }

    let body = " "

    if(req.url === "/user" && req.method === "POST"){
        req.on("data" , (chunk)=>{
            body = body + chunk
        })



        req.on("end" , ()=>{
            body = JSON.parse(body)
            res.writeHead(200,{"content-type" : "application/json"})

            res.end(JSON.stringify({
            message: "data fetched successfullya...",
            body,
            success: true
}))

        })


        
    }
})

const port = 3000     // Start my server and listen for incoming requests on port we create this for backend 

server.listen(port , ()=>{                // this line start server
    console.log("server has created at port" , port) 

})

