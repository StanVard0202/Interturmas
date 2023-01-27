import "./class"
const main = document.querySelector("#main_div")

window.addEventListener("load", update_main_div())

function update_main_div(new_html){
    temp_html = main.innerHTML
    if(new_html == undefined){
        main.innerHTML == main.innerHTML
    }else{
        main.innerHTML = new_html + temp_html
    }
}

function date_proccessing(date="XX:XX XX/XX/XXXX"){
    d = date.split(" ")
    hours = d[0].split(":")[0]
    minutes = d[0].split(":")[1]
    day = d[1].split("/")[0]
    month = d[1].split("/")[1]
    year = d[1].split("/")[2]
    const new_date = new Date(year, month, day, hours, minutes)
    return new_date
}
