// const mhs = ['azmi', 'erik', 'doddy']





// menggabungkan 2 array
// const dosen  = ["ade", "hendara", "udin"]
// const orang = mhs.concat(dosen)
// const orang1 = [...mhs, ...dosen]
// console.log(orang1)



// meng copy array

// const mhs = ['azmi', 'erik', 'doddy']
// // const mhs1 = mhs;
// // mhs1[0] = "fajar"


// const mhs1 =  [...mhs];

// mhs1[0] = "fajar"
// console.log(mhs1)

// console.log(mhs)



// const li = document.querySelectorAll('li')


// // const mhs = [];


// // for(let i = 0 ; i < li.length;i++){
// //     mhs.push(li[i].textContent)
    
// // }

// const mhs = [...li].map(m => m.textContent)


// console.log(mhs)



const nama = document.querySelector('.nama')

const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('')

console.log(huruf)


nama.innerHTML = huruf







