//1 uzd
let amzius = 40;
if (amzius >= 40){
    console.log('Tu gali buti prezidentu.')
}

//2uzd

let skaicius = 13;
if (Math.trunc(skaicius) % 2 || Math.trunc(skaicius) % 5 || Math.trunc(skaicius) % 10){
    console.log('Skaicius yra nelyginis')
} else {
    console.log('Skaicius yra lyginis')
}
//3uzd
let saskaita = 300;
if (saskaita >= 400){
    console.log('Uzteks pinigu saskaitai apmoketi')
} else {
    console.log('Neuzteks pinigu saskaitai apmoketi')
}
//4uzd
let pazVidurkis = 8;
let lankomumas = "blogas";
if (pazVidurkis >= 8 && lankomumas === "geras") {
    console.log(`Jusu vidurkis ${pazVidurkis} ir lankomumas geras, stipendija gausite!`)
} else {
    console.log('Deja stipendija nepriklauso')
}
//5udz
let x = 17;
let y = 25;
let z = 30;
if (x > y && x > z){
    console.log(`Skaicius ${x} yra didesnis uz skaiciu ${y} ir skaiciu ${z}`)
} else if (x < y && x < z) {
    console.log(`Skaicius ${x} yra mazesnis uz ${y} ir ${z}`)
} else if (y > x && y > z ){
    console.log(`Skaicius ${y} yra didesnis uz skaiciu ${x} ir skaiciu ${y}`)
} else if (y < x && y < z){
    console.log(`Skaicius ${y} yra mazesnis uz ${x} ir ${z}`)
} else if (z < x && z < y){
    console.log(`Skaicius ${z} yra didesnis uz skaiciu ${x} ir skaiciu ${y}`)
} else if (z > x && z > y){
    console.log(`Skaicius yra ${z} mazesnis uz ${x} ir ${y}`) 
} else {
    console.log('Skaiciai yra lygus')
}

//6uzd
let name = 'Jonas';
let salary = 1500;
let isMarried = true;
if (isMarried = false && salary >= 950){
    console.log("Sveikiname, jus gavote paskola!")
} else if (isMarried = true && salary >= 1500){
    console.log("Paskola bus suteikta")
} else {
    console.log("Kai uzdirbs daugiau, ateik, pakalbesim")
}


