// const addElement = () => {
//     const header = document.createElement('h1') 
//     header.textContent = "Programmer Zaman Now"
//     document.body.appendChild(header)
// }


// setTimeout(addElement, 5000)

// setinterval

const setTime = () => {
    const header = document.getElementById('header')
    header.textContent = new Date().toString()
    document.body.appendChild(header)
}



setInterval(setTime, 1000)