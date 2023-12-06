// o que eu preciso fazer?
// verificar se ele fez todos os trabalhos (são 4)
// receber quantos ele fez
// receber a nota de cada um individualmente
// fazer a média
// verificar se ele passou ou não
// passou >= 7
// não passou < 7

// att 06/12/2023
// limitei para não poder notas maiores de 10 e menores de 0
// limitei para não poder responder diferente de sim ou não
// é o limitas

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
        let nota1 : number = Number(prompt("Primeira nota: "))
        let nota2 : number = Number(prompt("Segunda nota: "))
        let nota3 : number = Number(prompt("Terceira nota: "))
        let nota4 : number = Number(prompt("Quarta nota: "))
        let soma  : number = (nota1+nota2+nota3+nota4)/4
        if(soma >= 7 && soma <= 10){
            let passou : string = "Sua nota é: "+soma+"\n e você passou!"
            return passou
        }else if(soma < 7 && soma >= 0){
            let passou : string = "Sua nota é: "+soma+"\n e você não passou!"
            return passou
        }else{
            return console.log("Digite uma nota válida da próxima")
        }
    }else if(todosFeitos == null) {
        return console.log("Errado, Digite Sim ou Não")
    }else{
        let feitos : number = Number(prompt("Quantos você fez? (de 1 a 3) "))
        let soma : number = 0
        switch(feitos){
            case 1 :{
                let nota1 : number = Number(prompt("Sua nota de 0 a 10: "))
                soma = nota1/4
                break
            }
            case 2 :{
                let nota1 : number = Number(prompt("Sua nota de 0 a 10: "))
                let nota2 : number = Number(prompt("Sua segunda nota: "))
                soma = (nota1+nota2)/4
                break
            }
            case 3 :{
                let nota1 : number = Number(prompt("Sua nota de 0 a 10: "))
                let nota2 : number = Number(prompt("Sua segunda nota: "))
                let nota3 : number = Number(prompt("Sua terceira nota: "))
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
console.log(mediaNotas(pegarDados()))
