// class Animal {

//     constructor(color,size,age){
//         this.color = color
//         this.size = size
//         this.age = age
//     }

//     get kucingAngora(){
//         return `hai saya kucing angora berwarna ${this.color} dan berukuran ${this.size}`
//     }

//     eat(){
//         this.age += 1
//         return `kucing berwarna ${this.color} sedang makan ${this.age}`
//     }



    
// }

// class Kucing extends Animal {
//     walk(){
//         console.log(`cat walking to home`)
//     }
// }


// const kucing2 = new Kucing()
// kucing2.walk()

// const kucing1 = new Animal("black", "50cm", 12)
// console.log(kucing1)
// console.log(kucing1.kucingAngora)
// console.log(kucing1.eat())


class dataNegara {
    constructor(){
        this.data = []
    }


    setData(){
        const response = 20
        this.data = response
    }



    get data(){
        return  `ini adalah data negara ${this.data}`
    }
}

const dataIndonesia = new dataNegara()

console.log(dataIndonesia.data)