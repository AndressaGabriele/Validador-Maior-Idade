let inputUsuario=require("readline-sync")

let mensagemUsuarioAno=inputUsuario.question("Coloque aqui o seu ano de nascimento ")
let mensagemUsuarioMes=inputUsuario.question("Coloque aqui seu mes de nascimento ")
let mensagemUsuarioDia=inputUsuario.question("Coloque aqui seu dia de nascimento ")
let anoAtual=2023
let mesAtual=4
let diaAtual=4
let conversorDeAno= Number(mensagemUsuarioAno)
let conversorDeMes= Number(mensagemUsuarioMes)
let conversorDeDia= Number(mensagemUsuarioDia)

if(anoAtual-conversorDeAno>=19){
    console.log("Autorizado")
}else if (anoAtual-conversorDeAno<18){
    console.log("Não autorizado")
}else if (anoAtual-conversorDeAno>=18&&anoAtual-conversorDeAno<19){
    if(conversorDeMes<=mesAtual){
        if(conversorDeDia<=diaAtual){
            console.log("Autorizado")
        }else{
            console.log("Não autorizado")
        }
    }else{
        console.log("Não autorizado")
    }
}