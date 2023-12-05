// o que eu preciso fazer?
// verificar se ele fez todos os trabalhos (são 4)
// receber quantos ele fez
// receber a nota de cada um individualmente
// fazer a média
// verificar se ele passou ou não
// passou >= 7
// não passou < 7

function pegarDados(){
    let feito = prompt("Você fez todos os trabalhos? ")
    if (feito == "sim" || feito == "Sim"){
        let todosFeitos : boolean = true
        return todosFeitos
    }else{
        let todosFeitos : boolean = false
        return todosFeitos
    }
}

function mediaNotas (todosFeitos: boolean){
    if (todosFeitos == true){
        let nota1 : number = Number(prompt("Primeira nota: "))
        let nota2 : number = Number(prompt("Segunda nota: "))
        let nota3 : number = Number(prompt("Terceira nota: "))
        let nota4 : number = Number(prompt("Quarta nota: "))
        let soma  : number = (nota1+nota2+nota3+nota4)/4
        if (soma >= 7){
            let passou : string = "Sua nota é: "+soma+"\n e você passou!"
            return passou
        }else{
            let passou : string = "Sua nota é: "+soma+"\n e você não passou!"
            return passou
        }
    }else{
        let feitos : number = Number(prompt("Quantos você fez? (de 1 a 4) "))
        let soma : number = 0
        switch(feitos){
            case 1 :{
                let nota1 : number = Number(prompt("Sua nota: "))
                soma = nota1/4
            }
            case 2 :{
                let nota1 : number = Number(prompt("Sua primeira nota: "))
                let nota2 : number = Number(prompt("Sua segunda nota: "))
                soma = (nota1+nota2)/4
            }
            case 3 :{
                let nota1 : number = Number(prompt("Sua primeira nota: "))
                let nota2 : number = Number(prompt("Sua segunda nota: "))
                let nota3 : number = Number(prompt("Sua terceira nota: "))
                soma = (nota1+nota2+nota3)/4
            }
        }

        if(soma >= 7){
            let passou : string = "Sua nota é: "+soma+"\n e você passou!"
            return passou
        }else{
            let passou : string = "Sua nota é: "+soma+"\n e você não passou!"
            return passou
        }
    }
}
console.log(mediaNotas(pegarDados()))