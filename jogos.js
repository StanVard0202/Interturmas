const main = document.querySelector("#main_div")
const requestURL = "https://raw.githubusercontent.com/StanVard0202/Interturmas/master/database.json"

const request = new Request(requestURL)

var d = new Date().getTime()

window.addEventListener("load", function(){
    fetch(request).then((response) => response.json()).then((data) => BIG(data));
})

atuais = []
futuros = []
passados = []
function BIG(jogos){
    
    for(var i=0; i < jogos.length; i++){
        console.log(d)
        console.log(date_proccessing(jogos[i][3].hora))
        console.log(date_proccessing(jogos[i][3].hora) > d)

        if(jogos[i][4].decorrer == true){
            atuais += `<tr><td>${jogos[i][0].equipa1}</td><td>${jogos[i][2].resultado}</td><td>${jogos[i][1].equipa2}</td>`

        }else if(date_proccessing(jogos[i][3].hora) > d){
            futuros += `<tr><td>${jogos[i][0].equipa1}</td><td>${jogos[i][1].equipa2}</td><td>${jogos[i][3].hora}</td>` //FIXME jogos futuros

        }else{
            passados += `<tr><td>${jogos[i][0].equipa1}</td><td>${jogos[i][2].resultado}</td><td>${jogos[i][1].equipa2}</td><td>${jogos[i][3].hora}</td>`
        }
    }

    var html = ""
    html += "<h2>Jogos A Decorrer</h2>"
    html += "<table><thead><tr><td>Equipa 1</td><td>Resultado</td><td>Equipa 2</td></tr></thead>"
    for(var i = 0 ; i < atuais.length; i++){
        html += atuais[i]
    }
    html += "</table>"
    html += "<h2>Jogos Passados</h2>"
    html += "<table><thead><tr><td>Equipa 1</td><td>Resultado</td><td>Equipa 2</td><td>Hora</td></tr></thead>"
    for(var i = 0 ; i < passados.length; i++){
        html += passados[i]
    }
    html += "</table>"
    html += "<h2>Jogos Futuros</h2>"
    html += "<table><thead><tr><td>Equipa 1</td><td>Equipa 2</td><td>Hora</td></tr></thead>"
    for(var i = 0 ; i < futuros.length; i++){
        html += futuros[i]
    }
    html += "</table>"
    //console.log(html)
    main.innerHTML = html
}


function date_proccessing(date="XX:XX XX/XX/XXXX"){
    dt = date.split(" ")
    hours = dt[0].split(":")[0]
    minutes = dt[0].split(":")[1] 
    day = dt[1].split("/")[0]
    month = dt[1].split("/")[1] - 1
    year = dt[1].split("/")[2]
    const new_date = new Date(year, month, day, hours, minutes).getTime()
    return new_date
}

