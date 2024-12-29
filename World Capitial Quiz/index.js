import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const port = 3000;

const db = new pg.Client({
    user : process.env.user,
    host: process.env.host,
    database : process.env.database,
    password : process.env.password,
    port : process.env.port,
});

db.connect();

let quiz =  [
    {country: "France", capital: "Paris"},
    {country: "United Kingdom", capital : "London"},
    {country : "United States of America", capital : "New York"},
];

db.query("SELECT * FROM capitals", (err,res)=>{
    if(err){
        console.error("Error Executing query", err.stack);
    }else{
        quiz = res.rows;
    }

    db.end();
})


let totalCorrect = 0;

// MiddleWare
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page 
app.get("/", async(req,res)=>{
    totalCorrect = 0;
    await nextQuestion();
    res.render("index.ejs", { question : currentQuestion});
});

// POST a new post 
app.post("/submit", (req,res)=>{
    let answer = req.body.answer.trim();
    let isCorrect = false;
    if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()){
        totalCorrect ++;
        console.log(totalCorrect);
        isCorrect = true;
    }

    nextQuestion();
    res.render("index.ejs", {
        question: currentQuestion,
        wasCorrect : isCorrect,
        totalScore : totalCorrect
    });
});


async function nextQuestion(){
    const randomCountry = quiz[Math.floor(Math.random()* quiz.length)];

    currentQuestion = randomCountry;
}


app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})







