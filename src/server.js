const proffys = [
    {   name:"Rodrigo Aguiar", 
        avatar :"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp:"662337766", 
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject:"Instalação de Impressoras", 
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
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject:" Acesso Remoto - Instalação de Programas", 
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