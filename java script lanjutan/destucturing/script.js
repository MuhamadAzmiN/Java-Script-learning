// destacturing variable

// destacturing array


// const perkenalan = ["Halo", "nama", "saya", "Muhamad Azmi naziyulloh"]


// // const [salam, satu,dua,nama] = perkenalan


// // skipping items
// const [salam, , ,nama] = perkenalan


// console.log(salam)



// swap items

// let a = 1
// let b = 2

// console.log(a)
// console.log(b);

// [a, b] = [b , a]

// console.log(a)
// console.log(b)



// let buah = "anggur"
// let sayuran = "kangkung"

// console.log(buah)
// console.log(sayuran);
// [buah, sayuran] = [sayuran,buah]
// console.log(buah)
// console.log(sayuran)


// return pada value pada funtion 

// function coba(){

//     return [1,2]
// }

// const [a,b] = coba()

// console.log(a)


// reset parameter 


// const [a,...values] = [1,2,3]
// console.log(a)
// console.log(values[0])



// object






// desctacturing object 


// const mhs = {
//     nama : "Muhamad Azmi Naziyulloh",
//     umur : 16

// }

// const {nama , umur } = mhs

// console.log(nama)
// console.log(umur)

// assignment


// ({nama,umur} = {
//     nama : "Muhamad Azmi Naziyulloh",
//     umur : 16

// })
// console.log(nama)


// assign ke variable baru

// const mhs = {
//     nama : "Muhamad Azmi Naziyulloh",
//     umur : 16

// }

// const { nama : n , umur , u } = mhs

// console.log(n)



// default value



// const mhs = {
//     nama : "Muhamad Azmi Naziyulloh",
//     umur : 16

// }

// const {nama , umur, email = "azmi89017@gmail.com" } = mhs

// console.log(nama)


// memberi nilai default + assign ke variable baru


// const mhs = {
//     nama : "Muhamad Azmi Naziyulloh",
//     umur : 16

// }

// const {nama : n , umur : u, email : e = "email@gmail.com" } = mhs

// console.log(e)



// rest parameter

// const mhs = {
//     nama : "Muhamad Azmi Naziyulloh",
//     umur : 16,
//     email : "azmi89107@gmail.com"

// }

// const {nama , ...values} = mhs

// console.log(values)




// mengambil field pada object yangkita kirim ke parameter function


const mhs = {
    id : 1,
    nama : "Muhamad Azmi Naziyulloh",
    umur : 16,
    email : "azmi890172gmail.com"
}



function getIdmhs({id}){
    return id
}


const nama = getIdmhs(mhs)
console.log(nama)



