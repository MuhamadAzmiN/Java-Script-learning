function displayResponse(json){
    const header = document.getElementById('response');
    let dataApi = json
    console.log(dataApi)
    
    header.textContent = json.nama; // Set the content to the value of 'response'
    
}



const ajax = new XMLHttpRequest();
ajax.open('GET', 'api/hello.json');

ajax.onreadystatechange = function(){
    console.log(`Ready on state ${ajax.readyState}`)
}


ajax.addEventListener('load', function() {
    if (ajax.status === 200) {
        const json = JSON.parse(ajax.responseText); 
        displayResponse(json); // Access the 'response' property
    } else {
        displayResponse({
            response : `Terjadi kesalahan ${ajax.status}` 
        })

    }
});



ajax.send();
