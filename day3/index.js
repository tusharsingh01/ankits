let express = require('express')
let app =express()
let port = 5000;
///// give routes //////
// app.use(express.json());
app.get("/users", function(req, res) {
    // res.json(req.params.city)
    res.send({
        "user":"shashank",
        "age": 21,
        "city": "madhavgarh"
    })
})
app.listen (5000, function(){
    console.log(`server is running on port 5000`)
})

// let express = require('express');
// let app = express()
// let port = 5000;

// app.get("/users", function(req, res){
//     res.send({
//         "name":"saurabh",
//         "city":"satna"
//     })
// })
// app.listen(5000, function(){
//     console.log(`server is running on port 5000`)
// })

