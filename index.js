const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3050;

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var DB = {
    games:[
        {
            id:1,
            title:"call of duty",
            year:2019,
            price:60
        },
        {
            id:2,
            title:"call of duty",
            year:2019,
            price:60
        },
        {
            id:3,
            title:"call of duty",
            year:2019,
            price:60
        },
        {
            id:4,
            title:"call of duty",
            year:2019,
            price:60
        },
        {
            id:5,
            title:"call of duty",
            year:2019,
            price:60
        },
        {
            id:6,
            title:"call of duty",
            year:2019,
            price:60
        },
        {
            id:7,
            title:"call of duty",
            year:2019,
            price:60
        },
        {
            id:8,
            title:"call of duty",
            year:2019,
            price:60
        },
        {
            id:9,
            title:"call of duty",
            year:2019,
            price:60
        },
        {
            id:10,
            title:"call of duty",
            year:2019,
            price:60
        },
        {
            id:11,
            title:"call of duty",
            year:2019,
            price:60
        },
        {
            id:12,
            title:"call of duty",
            year:2019,
            price:60
        },
        {
            id:13,
            title:"call of duty",
            year:2019,
            price:60
        },
        {
            id:14,
            title:"call of duty",
            year:2019,
            price:60
        },
        {
            id:15,
            title:"call of duty",
            year:2019,
            price:60
        },
        {
            id:16,
            title:"call of duty",
            year:2019,
            price:60
        },
    ]
}

app.get("/game",(req,res)=>{
    res.statusCode = 200;
    res.json(DB.games);
});

app.get("/game/:id",(req,res)=>{
    // res.statusCode =200;
    
    if(isNaN(req.params.id)){
        res.sendStatus(400);//res.send("Isso não é um número");
    }else{

        var id = parseInt(req.params.id);
        var games = DB.games.find(g => g.id == id);

        if(games != undefined){
            res.statusCode = 200;
            res.json(games);
        }else{
            res.sendStatus(404);
        }

    }
});

app.post("/game",(req,res)=>{

    // var title = req.body.title;
    // var price = req.body.price;
    // var year = req.body.year;

    var {title,price,year} = req.body;

    DB.games.push({
        id:DB.games.length + 1,
        title,
        price,
        year
    });
    res.sendStatus(200);
});

app.delete("/game/:id",(req,res)=>{

    if(isNaN(req.params.id)){
        res.sendStatus(400);//res.send("Isso não é um número");
    }else{
        
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id);

        if(index == -1){
            res.sendStatus(400);
        }else{
            DB.games.splice(index,1);
            res.sendStatus(200);
        }

    }

});

app.put("/game/:id",(req,res)=>{
    var id  = parseInt(req.params.id);
    var game = DB.games.find(g=>g.id==id);

    if(game != undefined){

        var {title,price,year} = req.body;

        if (title != undefined) {
            game.title = title;
        }
        if (price != undefined) {
            game.price = price;
        }
        if (year != undefined) {
            game.year = year;
        }

        res.sendStatus(200);

    }else{
        res.sendStatus(404);
    }
});


app.listen(PORT,()=>{
    console.log("API rodando na porta: " + PORT);
});