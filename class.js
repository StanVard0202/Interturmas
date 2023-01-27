export default class jogo{
    constructor(equipa1, equipa2, resultado, hora){
        this.equipa1 = equipa1
        this.equipa2 = equipa2
        this.resultado = resultado
        this.hora = hora
    }
    html(){
        html = `<tr><td>${this.equipa1}</td><td>${this.resultado}</td><td>${this.equipa2}</td><td>${this.hora}</td>`
        return html
    }
}