// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

let myPerson = {
    name: "Vova",
    age: 31,
    status: true
}

let wife = {
    parents: ["mother", "father"],
    children: false,
    travel: {
        turkey: true,
        spain: false,
        southKorea: true
    }
}

let house = {
    square: 50,
    lift: true,
    rooms: {
        bathroom: true,
        livingroom: true,
    }
}

let cars = {
    myCars: ["toyota", "mercedes"],
    wifeCars: ["range rover", "porshe"],
    blackCars: true
}

let hobbies = {
    myHobby: {
        dancing: true,
        swiming: false,
        playGame: true,
        playFootball: true
    },
    wifeHobby: {
        dancing: true,
        painting: false,
        running: true,
    },
    timeHobby: ["2time", "3time"]
}


// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };


let mercedes = {
    class: ["a_class", "c_class", "e_class", "s_class"],
    price: {
        a_class: 900000,
        c_class: 980000,
        e_class: 1200000,
        s_class: 1500000,
    },
    dilers: ["kiev", "lviv", "dnipro"]
}

let honda = {
    models: ["Jazz", "Crosstar", "civic", "hr-v", "cr-v"],
    price: {
        jazz: 730000,
        crosstar: 800000,
        civic: 640000,
        hr_v: 790000,
        cr_v: 1100000,
    },
    dilers: ["Odessa", "Dnipro", "Kiev", "Rivne"]
}

let mazda = {
    models: ["mazda3", "mazda6", "cx-3", "cx-30", "cx-5"],
    price: {
        mazda3: 660000,
        mazda6: 710000,
        cx_3: 660000,
        cx_30: 735000,
        cx_5: 760000
    },
    diler: "Cherkass"
}

let toyota = {
    models: ["Yaris", "Corolla", "Camry", "Rav-4", "Highlander", "Land Cruiser Prado"],
    price: {
        yaris: 525000,
        corolla: 490000,
        camry: 770000,
        rav_4: 670000,
        highlander: 1300000,
        landCruiserPrado: 1130000
    },
    dilers: ["Zaporizhya", "Dnipro", "Kiev"]
}


// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

console.log("----------Task1---------")

for (let me in myPerson) {
    console.log(me)
}

console.log("---------------------")

for (let she in wife) {
    console.log(she)
}

console.log("---------------------")


for (let item in house) {
    console.log(item)
}
console.log("---------------------")

for (let car in cars) {
    console.log(car)
}

console.log("---------------------")

for (let hobby in hobbies) {
    console.log(hobby)
}

console.log("-----------Task2----------")

console.log("-----------Mercedes----------")


for (let char in mercedes) {
    console.log(char)
}

console.log("-----------Honda----------")


for (let char in honda) {
    console.log(char)
}

console.log("-----------Mazda----------")


for (let char in mazda) {
    console.log(char)
}

console.log("-----------Toyota----------")


for (let char in toyota) {
    console.log(char)
}