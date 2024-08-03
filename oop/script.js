// const car = {
//     brand : "toyota",
//     color : "red",
//     drive : () => {
//         console.log("mobil jalan")
//     }




// }


// car.drive()



// function Car(brand, color,maxSpeed){
//     this.brand = brand
//     this.color = color
//     this.maxSpeed = maxSpeed
// }





// Car.prototype.drive = () => {

//     console.log("mobil jalan")
// }



// const namaMobil = new Car("toyota", "merah", "900cc")
// console.log(namaMobil.drive())

// class Car {
//     constructor(brand,color){
//         this.brand = brand
//         this.color = color
//     }


//     drive(){
//         console.log("mobil berjalan")
//     }
// }



// const namaMobil2 = new Car("yamaha", "biru")
// namaMobil2.drive()

// console.log(namaMobil2)


class Animal {

    constructor(name,age,isMammal){
        this.name = name
        this.age = age
        this.isMammal = isMammal
    }

}


class Rabbit extends Animal {


    constructor(name,age){
      super(name, age, true)
    }

    eat() {
        console.log(`${this.name} sedang makan!`)
    }


    drink(){
        console.log(`${this.name} sedang minum!`)
    }




}


const nama = "muhamad azmi"

class Eagle extends Animal {


    constructor(name,age){
        super(name, age, false)
    }
    fly() {
        console.log(`${this.name} sedang terbang!`)
    }

    eat(){
        console.log(`${this.name} sedang makan!`)
    }
}

const myRabbit = new Rabbit("labi", 2)
const myEagle = new Eagle("Elo", 4)


