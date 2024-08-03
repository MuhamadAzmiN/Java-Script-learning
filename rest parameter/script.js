// function myFunc(a,b, ...myArgs){
//     // return `a = ${a}, b = ${b} , myArgs = ${myArgs}`

//     // return myArgs

//     return [...arguments]
// }



// console.log(myFunc(1,2,3,4,5,6))




// function jumlahKan(...angka){

//     // let total = 0
//     // for(const arr of angka){
//     //     total += arr
//     // }

//     // return total

   
//     return angka.reduce((a,b) => a += b)
    


// }


// console.log(jumlahKan(1,2,3,4,5))



// array destacturing



// const kelompok = ["azmi", "dody", "erik", "fajar"]
// const [ketua,wakil,...anggota] = kelompok
// console.log(wakil)


// object destacuring


// const team = {
//     pm : "azmi", 
//     frontend : "doddy",
//     backend : "asep"
// }


// const {pm ,...myteam} = team

// console.log(myteam)


function filterBy(type, ...values){
    
return values.filter(v => typeof v === type)

}

console.log(filterBy('number', 1,2, 'azmi'))









