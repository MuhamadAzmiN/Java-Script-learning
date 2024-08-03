function doSeacrh(){
    const ajax = new XMLHttpRequest()   
    const param = new URLSearchParams()

    param.append("seacrh", document.getElementById("seacrh").value)
    param.append("filter", document.getElementById("seacrh").value)





    ajax.open("GET", "https://eoinprb08zqj0q7.m.pipedream.net")
    ajax.onload = function(){
        const response = document.getElementById('response')
        response.innerText = ajax.responseText
    }

    ajax.send()


}

document.getElementById('Buttonseacrh').onclick = doSeacrh;
