// Tạo một lớp Động vật. Lớp sẽ có các thuộc tính tên, tuổi, màu sắc, chân và tạo các phương thức khác nhau
class Animal {
    constructor(name, age, color, legs) {
        console.log(this)
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getColor() {
        return this.color
    }

    getLegs() {
        return this.legs
    }
}

// const cat = new Animal('BimBim', 2, 'Grey', 4)

// console.log(cat.getName())
// console.log(cat.getAge())
// console.log(cat.getColor())
// console.log(cat.getLegs())

// Tạo một lớp con Chó và Mèo từ Lớp Động vật.

class Dog extends Animal {
    constructor(name, age, color, breed) {
        super(name, age, color, 4);
        this.breed = breed;
      }
}

class Cat extends Animal {
        constructor(name, age, color, breed) {
            super(name, age, color, 4);
            this.breed = breed;
        }
    }
    
    const dog = new Dog ('LuLu', 3, 'Gold', 'Golden')
    const cat = new Cat ('BimBim', 2, 'Grey', 'Meo Anh Long Dai')
    
    // console.log(dog.getName())
    // console.log(dog.getAge())
    // console.log(dog.getColor())
    // console.log(dog.getLegs())
    // console.log(dog.breed)
    

    // console.log(cat.getName())
    // console.log(cat.getAge())
    // console.log(cat.getColor())
    // console.log(cat.getLegs())
    // console.log(cat.breed)
