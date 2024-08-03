function doLogin(){
    const ajax = new XMLHttpRequest()
    ajax.open("POST", "https://eoinprb08zqj0q7.m.pipedream.net")
    ajax.onload = function(){
        const response = document.getElementById('response')
        response.innerText = ajax.responseText
    }


    ajax.setRequestHeader("Content-type", "application/json")
    const json = {
        username : document.getElementById('username').value,
        password : document.getElementById('password').value

    }
    ajax.send(JSON.stringify(json))


}

document.getElementById('login').onclick = doLogin;
