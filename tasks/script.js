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


// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

console.log(Object.keys(myPerson))

console.log("---------------------")

console.log(Object.keys(wife))

console.log("---------------------")

console.log(Object.keys(house))

console.log("---------------------")

console.log(Object.keys(cars))

console.log("---------------------")

console.log(Object.keys(hobbies))

console.log("---------------------")

console.log(Object.keys(mercedes))

console.log("---------------------")

console.log(Object.keys(honda))

console.log("---------------------")

console.log(Object.keys(mazda))

console.log("---------------------")

console.log(Object.keys(toyota))


// Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.(Значаения полей могу быть выдуманными)


let objCars = [{
        "model": "mercedes",
        "year": 2012,
        "power": 250,
        "color": "black"
    },
    {
        "model": "BMW",
        "year": 2003,
        "power": 50,
        "color": "red"
    },
    {
        "model": "fiat",
        "year": 2010,
        "power": 120,
        "color": "white"
    },
    {
        "model": "pontiac",
        "year": 1998,
        "power": 210,
        "color": "red"
    },
    {
        "model": "ferrari",
        "year": 2016,
        "power": 350,
        "color": "red"
    },
    {
        "model": "ford",
        "year": 2016,
        "power": 170,
        "color": "brown"
    },
    {
        "model": "Lada",
        "year": 2004,
        "power": 110,
        "color": "silver"
    },
    {
        "model": "toyota",
        "year": 2014,
        "power": 200,
        "color": "black"
    },
    {
        "model": "honda",
        "year": 2010,
        "power": 210,
        "color": "silver"
    },
    {
        "model": "mazda",
        "year": 2018,
        "power": 220,
        "color": "red"
    },
]
console.log(objCars[5])

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

let objCities = [{
        "name": "Kharkiv",
        "population": 1600000,
        "country": "Ukraine",
        "region": "Kharkiv"
    },
    {
        "name": "New-York City",
        "population": 8400000,
        "country": "USA",
        "region": "New-york"
    },
    {
        "name": "Mexico",
        "population": 9100000,
        "country": "Mexico",
        "region": "Mexico"
    },
    {
        "name": "Barcelona",
        "population": 1700000,
        "country": "Spain",
        "region": "La Barceloneta"
    },
    {
        "name": "Rome",
        "population": 2900000,
        "country": "Italia",
        "region": "Roma"
    }

]


// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let arrayObjCars = [{
        "model": "toyota",
        "year": 2014,
        "power": 210,
        "color": "silver",
        "driver": {
            "name": "Kolya",
            "age": 32,
            "sex": "male",
            "experince": 5
        }
    },
    {
        "model": "mercedes",
        "year": 2012,
        "power": 210,
        "color": "red",
        "driver": {
            "name": "Oleksiy",
            "age": 26,
            "sex": "male",
            "experince": 8
        }
    },
    {
        "model": "jeep",
        "year": 2016,
        "power": 310,
        "color": "black",
        "driver": {
            "name": "Olexandr",
            "age": 35,
            "sex": "male",
            "experince": 10
        }
    },
    {
        "model": "cadillac",
        "year": 2018,
        "power": 210,
        "color": "red",
        "driver": {
            "name": "Maxim",
            "age": 24,
            "sex": "male",
            "experince": 3
        }
    },
    {
        "model": "lexus",
        "year": 2015,
        "power": 230,
        "color": "brown",
        "driver": {
            "name": "Mariia",
            "age": 24,
            "sex": "female",
            "experince": 4
        }
    }
]


// - проитерировать каждый массив из задания 5,6,7 при помощи while.

console.log("-------Task 5 while------")

let iterCar = 0;

while (iterCar < objCars.length) {
    console.log(objCars[iterCar]);
    iterCar++;
}

console.log("-------Task 6 while------")

let iterCities = 0;

while (iterCities < objCities.length) {
    console.log(objCities[iterCities]);
    iterCities++;
}

console.log("-------Task 7 while------")

let iterCarWithDrivers = 0;

while (iterCarWithDrivers < arrayObjCars.length) {
    console.log(arrayObjCars[iterCarWithDrivers]);
    iterCarWithDrivers++;
}


// - проитерировать каждый массив из задания 5,6,7 при помощи for .


console.log("-------Task 5 for------")

for (let iterCarFor = 0; iterCarFor < objCars.length; iterCarFor++) {
    console.log(objCars[iterCarFor])
}


console.log("-------Task 6 for------")

for (let iterCitiesFor = 0; iterCitiesFor < objCities.length; iterCitiesFor++) {
    console.log(objCities[iterCitiesFor])
}


console.log("-------Task 7 for------")

for (let iterCarWithDriversFor = 0; iterCarWithDriversFor < arrayObjCars.length; iterCarWithDriversFor++) {
    console.log(arrayObjCars[iterCarWithDriversFor])
}

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.


console.log("-------Task 5 for of------")

for (let carForOf of objCars) {
    console.log(carForOf)
}

console.log("-------Task 5 for of------")

for (let citiesForOf of objCities) {
    console.log(citiesForOf)
}

console.log("-------Task 5 for of------")


for (let carForOfDrivers of arrayObjCars) {
    console.log(carForOfDrivers)
}

console.log("----------------------------------------")
// - взять объекты из задания 1 и превратить каждый в json.


let meJson = JSON.stringify(myPerson);
console.log(meJson)
let wifeJson = JSON.stringify(wife);
console.log(wifeJson)
let houseJson = JSON.stringify(house);
console.log(houseJson)
let carsJson = JSON.stringify(cars);
console.log(carsJson)
let hobbiesJson = JSON.stringify(hobbies);
console.log(hobbiesJson)


// - взять json из задания 11 и превратить их обратно в объекты.
console.log("----------------------------------------")

let myPersonX = JSON.parse(meJson)
console.log(myPersonX)
let wifeX = JSON.parse(wifeJson)
console.log(wifeX)
let houseX = JSON.parse(houseJson)
console.log(houseX)
let carsX = JSON.parse(carsJson)
console.log(carsX)
let hobbiesX = JSON.parse(hobbiesJson)
console.log(hobbiesX)

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
console.log("----------------------------------------")


for (let i = 0; i < objCars.length; i++) {
    let objCarsJson = JSON.stringify(objCars[i])
    console.log(objCarsJson)
}

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
console.log("----------------------------------------")

for (let i = 0; i < objCities.length; i++) {
    let objCitiesJson = JSON.stringify(objCities[i])
    console.log(objCitiesJson)
}

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
console.log("----------------------------------------")


for (let i = 0; i < arrayObjCars.length; i++) {
    let arrayObjCarsJson = JSON.stringify(arrayObjCars[i])
    console.log(arrayObjCarsJson)
    let newArrayObjCars = JSON.parse(arrayObjCarsJson)
    console.log(newArrayObjCars)
}


// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
console.log("----------------------------------------")

let users = [{
        "name": "Viktor",
        "age": 26,
        "skills": ["JS", "Node.JS", "Angular"]
    },
    {
        "name": "Denis",
        "age": 32,
        "skills": ["HTML", "Bootstrap", "Angular"]
    },
    {
        "name": "Kostya",
        "age": 22,
        "skills": ["JS", "React", "Wordpress"]
    },
    {
        "name": "Liza",
        "age": 28,
        "skills": ["C++", "Java", "Python"]
    }
]

for (let item = 0; item < users.length; item++) {
    console.log(users[item])
    for (let skill of users[item].skills) {
        console.log(skill)
    }
}


// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
console.log("----------------------------------------")

let usersSkills = [];

for (let itemUser = 0; itemUser < users.length; itemUser++) {
    console.log(users[itemUser])
    for (let skill of users[itemUser].skills) {
        console.log(skill)
        usersSkills.push(skill);
    }
}
console.log(usersSkills)


// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

console.log("----------------------------------------")


let users2 = [{
    name: 'vasya',
    age: 31,
    status: false,
    skills: ['java', 'js']
}, {
    name: 'petya',
    age: 30,
    status: true,
    skills: ['java', 'js', 'html']
}, {
    name: 'kolya',
    age: 29,
    status: true,
    skills: ['mysql', ',mongo']
}, {
    name: 'olya',
    age: 28,
    status: false,
    skills: ['java', 'js']
}, {
    name: 'max',
    age: 30,
    status: true,
    skills: ['mysql', ',mongo']
}];

for (let i = 0; i < users2.length; i++) {
    console.log(users2[i])
    for (let a in users2[i]) {
        console.log([a])
    }
}


// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

console.log("----------------------------------------")


let users3 = [{
        name: 'vasya',
        age: 31,
        status: false,
        address: {
            city: 'Lviv',
            country: 'Ukraine',
            street: 'Shevchenko',
            houseNumber: 1
        }
    },
    {
        name: 'petya',
        age: 30,
        status: true,
        address: {
            city: 'New York',
            country: 'USA',
            street: 'East str',
            houseNumber: 21
        }
    },
    {
        name: 'kolya',
        age: 29,
        status: true,
        address: {
            city: 'Budapest',
            country: 'Hungary',
            street: 'Kuraku',
            houseNumber: 78
        }
    },
    {
        name: 'olya',
        age: 28,
        status: false,
        address: {
            city: 'Prague',
            country: 'Czech',
            street: 'Paster',
            houseNumber: 56
        }
    },
    {
        name: 'max',
        age: 30,
        status: true,
        address: {
            city: 'Istanbul',
            country: 'Turkey',
            street: 'Mikar',
            houseNumber: 39
        }
    },
    {
        name: 'anya',
        age: 31,
        status: false,
        address: {
            city: 'Rio',
            country: 'Brasil',
            street: 'Ronaldi',
            houseNumber: 5
        }
    },
    {
        name: 'oleg',
        age: 28,
        status: false,
        address: {
            city: 'Montreal',
            country: 'Canada',
            street: 'Acusto',
            houseNumber: 90
        }
    },
    {
        name: 'andrey',
        age: 29,
        status: true,
        address: {
            city: 'Quebeck',
            country: 'Canada',
            street: 'Binaro',
            houseNumber: 33
        }
    },
    {
        name: 'masha',
        age: 30,
        status: true,
        address: {
            city: 'Moscow',
            country: 'Russia',
            street: 'Gogolia',
            houseNumber: 1
        }
    },
    {
        name: 'olya',
        age: 31,
        status: false,
        address: {
            city: 'Portland',
            country: 'USA',
            street: 'Forest str',
            houseNumber: 4
        }
    },
    {
        name: 'max',
        age: 31,
        status: true,
        address: {
            city: 'Cairo',
            country: 'Egypt',
            street: 'Seashore',
            houseNumber: 45
        }
    }
];

let usersAdress = [];

for (let itemUserAd = 0; itemUserAd < users3.length; itemUserAd++) {
    console.log(users3[itemUserAd])
    for (let userAdr in users3[itemUserAd].address) {
        console.log(users3[itemUserAd].address[userAdr])
        usersAdress.push(users3[itemUserAd].address[userAdr])

    }
}
console.log(usersAdress)


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

console.log("----------------------------------------")


// for (const user of users3) {
//     let userDiv = document.createElement('div')
//     userDiv.innerText = `${user.name} - ${user.age} - ${user.status} - ${user.adress}`
//     document.body.appendChild(userDiv)
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

console.log("----------------------------------------")



// for (const user of users3) {
//     let userDiv = document.createElement('div')
//     document.body.appendChild(userDiv)
//     for (const userDivs in user) {
//         let usersProf = document.createElement('div')
//         usersProf.innerText = `${user[userDivs]}`
//         userDiv.appendChild(usersProf)
//     }
// }




// - За допомоги циклу проітерувати  масив users,
//  записати кожного юзера в сівй блок за допомоги document.createElement
//  , розділивши всі властивості по своїм блокам 
//  , блок з адресою зробити окремим блоком,
//   з блоками для кожної властивості


console.log("----------------------------------------")


for (const users of users3) {
    let userBlock = document.createElement('div')

    for (const property in users) {
        let fieldUser = document.createElement('div')

        if (typeof users[property] === "object") {
            for (const i in users[property]) {
                let someProperty = document.createElement('div')
                fieldUser.appendChild(someProperty)

            }
        }

        userBlock.appendChild(fieldUser)
    }
    document.body.appendChild(userBlock)
}