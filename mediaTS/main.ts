// o que eu preciso fazer?
// verificar se ele fez todos os trabalhos (são 4)
// receber quantos ele fez
// verificar se o numero é valido (entre 1 e 3)
// receber a nota de cada um individualmente
// verificar se o numero é valido (entre 0 e 10)
// fazer a média
// verificar se ele passou ou não
// passou >= 7
// não passou < 7

function pegarDados(){
    let feito = prompt("Você fez todos os trabalhos? ")
    if (feito == "sim" || feito == "Sim"){
        let todosFeitos : boolean = true
        return todosFeitos
    }else if(feito == "nao" || feito == "não" || feito == "Não" || feito == "Nao"){
        let todosFeitos : boolean = false
        return todosFeitos
    }else{
        return null
    }
}

function mediaNotas (todosFeitos: boolean){
    if (todosFeitos == true){
        let nota1 : number = verificarNota(Number(prompt("Primeira nota: ")))
        let nota2 : number = verificarNota(Number(prompt("Segunda nota: ")))
        let nota3 : number = verificarNota(Number(prompt("Terceira nota: ")))
        let nota4 : number = verificarNota(Number(prompt("Quarta nota: ")))
        let soma  : number = (nota1+nota2+nota3+nota4)/4
        if(soma >= 7 && soma <= 10){
            let passou : string = "Sua nota é: "+soma+"\n e você passou!"
            return passou
        }else{
            let passou : string = "Sua nota é: "+soma+"\n e você não passou!"
            return passou
        }
    }else if(todosFeitos == null) {
        return console.log("Errado, Digite Sim ou Não")
    }else{
        let feitos : number = Number(prompt("Quantos você fez? (de 1 a 3) "))
        let soma : number = 0
        switch(feitos){
            case 1 :{
                let nota1 : number = verificarNota(Number(prompt("Sua nota de 0 a 10: ")))
                soma = nota1/4
                break
            }
            case 2 :{
                let nota1 : number = verificarNota(Number(prompt("Sua primeira nota de 0 a 10: ")))
                let nota2 : number = verificarNota(Number(prompt("Segunda nota: ")))
                soma = (nota1+nota2)/4
                break
            }
            case 3 :{
                let nota1 : number = verificarNota(Number(prompt("Primeira nota de 0 a 10: ")))
                let nota2 : number = verificarNota(Number(prompt("Segunda nota: ")))
                let nota3 : number = verificarNota(Number(prompt("Terceira nota: ")))
                soma = (nota1+nota2+nota3)/4
                break
            }
            default:{
                soma = 69                
                break
            }
        }

        if(soma >= 7 && soma <= 10){
            let passou : string = "Sua nota é: "+soma+"\n e você passou!"
            return passou
        }else if(soma < 7 && soma >= 0){
            let passou : string = "Sua nota é: "+soma+"\n e você não passou!"
            return passou
        }else if(soma == 69) {
            console.log("entre 1 e 3 >:(")
        }else{
            return console.log("Digite uma nota válida da próxima")
        }
    }
}

function verificarNota(nota : number){
    if (nota > 10 || nota < 0 || isNaN(nota) === true){
        prompt("Como você digitou uma nota inválida vamos sortear uma nota para você")
        nota = Math.floor(Math.random()*(10-1+1))+1
        return nota
    }else{
        return nota
    }
}

console.log(mediaNotas(pegarDados()))
