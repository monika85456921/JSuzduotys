//1 uzd
let amzius = 50;
if (amzius >= 40){
    console.log('Tu gali buti prezidentu.')
}

//2uzd

let skaicius = 20;
if (Math.trunc(skaicius) % 2 || Math.trunc(skaicius) % 5 || Math.trunc(skaicius) % 10){
    console.log('Skaicius yra nelyginis')
} else {
    console.log('Skaicius yra lyginis')
}
// skaicius%2==0

//3uzd
let saskaita = 600;
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
let y = 5;
let z = 1;
if (x > y && x > z){
    console.log(`Skaicius ${x}xx yra didesnis uz skaiciu ${y} ir skaiciu ${z}`)
} else if (x < y && x < z) {
    console.log(`Skaicius ${x}x yra mazesnis uz ${y} ir ${z}`)
} else if (y > x && y > z ){
    console.log(`Skaicius ${y}y yra didesnis uz skaiciu ${x} ir skaiciu ${z}`)
} else if (y < x && y < z){
    console.log(`Skaicius ${y}y yra mazesnis uz ${x} ir ${z}`)
} else if (z < x && z < y){
    console.log(`Skaicius ${z}z yra mazesnis uz skaiciu ${x} ir skaiciu ${y}`)
} else if (z > x && z > y){
    console.log(`Skaicius yra ${z}z didesnis uz ${x} ir ${y}`) 
} else {
    console.log('Skaiciai yra lygus')
}


//6uzd
let vardas = 'Jonas';
let salary = 2500;
let isMarried = true;

//1pav
// if (isMarried = false && salary >= 950){
//     console.log("Sveikiname, jus gavote paskola!")
// } else if (isMarried = true && salary >= 1500){
//     console.log("Paskola bus suteikta")
// } else {
//     console.log("Kai uzdirbs daugiau, ateik, pakalbesim")
// }

//2pav nested if'as 
if (isMarried){
    if (salary >= 1500){
        console.log("Sveikiname, jus gavote paskola!")
    } else {
        console.log("Kai uzdirbs daugiau, ateik, pakalbesim")
    }
} else {
    if (salary >= 950){
        console.log("Sveikiname jus gavote paskola, " + vardas);
    }
    else{
        console.log(vardas + " kai uzdirbs daugiau, ateik, pakalbesim")
    }
}
//3 pav

switch(true){
    case salary >= 1500 && isMarried:
        console.log("Sveikiname jus gavote paskola, " + vardas);
        break;
    case salary >= 950 && !isMarried:
        console.log("Sveikiname jus gavote paskola, " + vardas);
        break;
    default:
        console.log(vardas + " kai uzdirbsi daugiau, ateik, pakalbesim")
}

// case pvz
let daytime = "morNing";
switch(daytime.toLowerCase()){
    case "morning":
        console.log("labas rytas");
        break
    case "day":
        console.log("laba diena");
        break
    case "evening":
        console.log("labas vakaras");
        break
    default:
        console.log("labanakt");    
}

// uzduotis 1 su switch

let diena = 1;
switch(diena){
    case 1:
        console.log("Pirmadienis");
        break
    case 2:
        console.log("Antradienis");
        break
    case 3:
        console.log("Treciadienis");
        break
    case 4:
        console.log("Ketvirtadienis");
        break
    case 5:
        console.log("Penktadienis");
        break
    case 6:
        console.log("Sestadienis");
        break
    case 7:
        console.log("Sekmadienis");
        break
    default:
        console.log("Neteisingai nurodytas skaicius");
}

//antra udz su switch

let menesis = "vasaris";
switch(menesis.toString()){
    case "sausis":
        console.log("Sausis yra pirmas menesis");
        break
    case "vasaris":
        console.log("Vasaris yra antras menesis");
        break
    case "kovas":
        console.log("Kovas yra trecias menesis");
        break
    case "balandis":
        console.log("Balandis yra ketvirtas menesis");
        break
    case "geguze":
        console.log("Geguze yra penktas menesis");
        break
    case "birzelis":
        console.log("Birzelis yra sestas menesis");
        break
    case "liepa":
        console.log("Liepa yra septintas menesis");
        break
    case "rugpjutis":
        console.log("Rugpjutis yra astuntas menesis");
        break
    case "rugsejis":
        console.log("Rugsejis yra devintas menesis");
        break
    case "spalis":
        console.log("Spalis yra desimtas menesis");
        break
    case "lapkritis":
        console.log("Lapkritis yra vienoliktas menesis");
        break
    case "gruodis":
        console.log("Gruodis yra dvyliktas menesis");
        break
    default:
        console.log("Irasytas ne menesio pavadinimas");
}