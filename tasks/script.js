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

let hobby = {
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