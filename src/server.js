const proffys = [
    {   name:"Rodrigo Aguiar", 
        avatar :"https://avatars2.githubusercontent.com/u/74689679?s=400&u=22a848503374fad225ab32b587b9083ca24c3a86&v=4", 
        whatsapp:"662337766", 
        bio:"10 anos de experiência em infra, atendimento rápido e satisafação garantida", 
        subject:"Ajuda com Impressoras", 
        cost: "25", 
        weekday: [
            0
        ], 
        time_from:[720], 
        time_to : [1220]
    },
    {   name:"Henrique Rodrigues", 
        avatar :"https://avatars1.githubusercontent.com/u/55166332?s=460&u=1fc9f988bb29e81c38322d51fd7f1501e558bd21&v=4", 
        whatsapp:"662337766", 
        bio:"Entusiasta das melhores tecnologias, tenho boas referências atuando como técnico em informática...", 
        subject:"Ajuda com Software", 
        cost: "80", 
        weekday: [
            0
        ], 
        time_from:[720], 
        time_to : [1220]
    }
]

const subjects = [
    "Ajuda com Software",
    "Ajuda com Hardware",
    "Ajuda com Impressoras",
    "Ajuda com Webcam",
    "Formatação",
    "Programação",
    "Educação",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position] 

}

function pageLanding(req,res){
    return res.render("index.html")

}

function pageStudy(req,res){
    const filters = req.query
    return res.render("study.html",{ proffys , filters ,subjects, weekdays})

}



function pageAlteracaodados(req,res){
    const filters = req.query
    return res.render("alteracaodados.html",{ proffys , filters ,subjects, weekdays})

}

function pageGiveClasses(req,res){
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    

    if(isNotEmpty){

        data.subject = getSubject(data.subject)
        proffys.push(data)
        
        return res.redirect("/study")
        
    }

    return res.render("give-classes.html",{subjects, weekdays})

}
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//configurar nunjucks

nunjucks.configure('src/views',{
    express: server,
    noCache: true,
    
})

server
.use(express.static("public"))
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.get("/alteracaodados",pageAlteracaodados)

.listen(5000)