const nama = "muhamad azmi naziyulloh"
const umur = 16
const pekerjaan = "Web Programming"


// function coba(strings, ...values){

//     let result = ''


//     strings.forEach((str, i ) => {
        
//         result += `${str}${values[i] || ''}`

        
//     })

//     return result



// }




// const str = coba  `Halo nama saya adalah ${nama} umur saya ${umur}`

// console.log(str)
//  function coba(strings, ...values) {
//     let result = ""
//     strings.forEach((str,i) => {

//         result += `${str} ${values[i] || ""}`
        
//     });

//     return result
//  }


//  const azmi = coba `nama saya ${nama} dan umur saya adalah ${umur}`


//  console.log(azmi)




function coba(strings, ...values){

    return strings.reduce((result, str, i) => `${result} ${str} ${values[i] || ''}` , '')
}


const azmi = coba `nama saya adalah ${nama} umur saya ${umur} ${pekerjaan}`

console.log(azmi)


