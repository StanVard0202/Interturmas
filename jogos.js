const main = document.querySelector("#main_div")
//const requestURL = "https://raw.githubusercontent.com/StanVard0202/Interturmas/master/database.json"
const requestURL = "/database.json"

const request = new Request(requestURL)

window.addEventListener("load", h)

const d = new Date();

setInterval(h, 1000)

function h(){
    fetch(request).then((response) => response.json()).then((data) => BIG(data));
}

handler = 0


function BIG(jogos){
    atuais = []
    futuros = []
    passados = []
    for(var i=0; i < jogos.length; i++){
        if(jogos[i][4].decorrer == true){
            var min = ((d.getHours() * 60) + d.getMinutes()) - ((date_proccessing(jogos[i][3].hora).getHours() * 60) + (date_proccessing(jogos[i][3].hora).getMinutes()))
            if(min>90){
                min = `90 + ${min-90}` 
            }
            //TODO saber se o intervalo fica sempre aos 45 min
            switch(jogos[i][5].d){
                case "m":
                    atuais += `<tr><td>${jogos[i][0].equipa1}</td><td>${jogos[i][2].resultado}</td><td>${jogos[i][1].equipa2}</td><td>${min}</td>`
                    break;
                
                case "minutos":
                    atuais += `<tr><td>${jogos[i][0].equipa1}</td><td>${jogos[i][2].resultado}</td><td>${jogos[i][1].equipa2}</td><td>${min}</td>`
                    break;
                case "i":
                    atuais += `<tr><td>${jogos[i][0].equipa1}</td><td>${jogos[i][2].resultado}</td><td>${jogos[i][1].equipa2}</td><td>${"INTERVALO"}</td>`
                    break;
                
                case "intervalo":
                    atuais += `<tr><td>${jogos[i][0].equipa1}</td><td>${jogos[i][2].resultado}</td><td>${jogos[i][1].equipa2}</td><td>${"INTERVALO"}</td>`
                    break;
                default:
                    atuais += `<tr><td>${jogos[i][0].equipa1}</td><td>${jogos[i][2].resultado}</td><td>${jogos[i][1].equipa2}</td><td>${"Unknown"}</td>`
                    break;
            }
            

        }else if(date_proccessing(jogos[i][3].hora).getTime() > d.getTime()){
            futuros += `<tr><td>${jogos[i][0].equipa1}</td><td>${jogos[i][1].equipa2}</td><td>${jogos[i][3].hora}</td>`
        }else{
            passados += `<tr><td>${jogos[i][0].equipa1}</td><td>${jogos[i][2].resultado}</td><td>${jogos[i][1].equipa2}</td><td>${jogos[i][3].hora}</td>`
        }
    }

    var html = ""
    html += "<h2 class='decorrer'>Jogos A Decorrer</h2><button onclick='back()' class='redirect'>Retornar</button>"
    html += "<table><thead><tr><td>Equipa 1</td><td>Resultado</td><td>Equipa 2</td><td>Minuto</td></tr></thead>"
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
    main.innerHTML = html
}


function date_proccessing(date="XX:XX XX/XX/XXXX"){
    dt = date.split(" ")
    hours = dt[0].split(":")[0]
    minutes = dt[0].split(":")[1] 
    day = dt[1].split("/")[0]
    month = dt[1].split("/")[1] - 1
    year = dt[1].split("/")[2]
    const new_date = new Date(year, month, day, hours, minutes)
    return new_date
}

function back(){
    window.location.href = "/"
}

