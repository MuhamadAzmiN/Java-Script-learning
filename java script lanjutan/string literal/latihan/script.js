// const mhs = {
//     nama : "azmi"
// }

// const el =  `<h1>Nama saya adalah ${mhs.nama} </h1>`


// 2.looping

// const mhs = [
//   {
//     nama : "Muhamad Azmi Naziyulloh",
//     email : "azmi89017@gmail.com"
//   },

//   {
//     nama : "Muhamad Asep ",
//     email: "asep@gmail.com"
//   },
//   {
//     nama : "Udin",
//     email : "udin@gmail.com"
//   }
// ]



// const el =  `<div class="mhs">

// ${mhs.map(m => `
//     <ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>
//     `
// ).join('')
// }

// </div>`

// munculin data
// const lagu = {
//     judul : "apapun yang terjadi",
//     penyanyi : "baskara",
//     feat : "hindia"
// }



// const el = `<div class = "lagu">
//         <ul>

//             <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})`: ''}</li>
//             <li>${lagu.penyanyi}</li>


//         </ul>

// </div>




// nested


function cetakMataKuliah(mataKuliah){
    return `
    <ol>
    ${mataKuliah.map(mk => `<li>${mk}</li>` ).join('')}
        

    </ol>
    ` 
}


const mhs = {
    nama : "Muhamad azmi naziyulloh",
    semester : 5,
    mataKuliah : [
        "rekayasa web",
        "cyber security",
        "mobile dev",
        "web dev"
    ]
}


const el = `<div class="mhs">

<h2>${mhs.nama}</h2>

<span class="semester">${mhs.semester}</span>
${cetakMataKuliah(mhs.mataKuliah)}



</div>`
document.body.innerHTML = el