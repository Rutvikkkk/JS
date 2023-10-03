const name = "Rutvik"
const repoCount = 5

// console.log(name + repoCount + " value");    //Not a god syntax

console.log(`my name is ${name} my repoCount is ${repoCount}`);

const gameName = new String('Rutvik')

console.log(gameName[5]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));


const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-5, 3)
console.log(anotherString);


const newStringone = '      rutvik      '
console.log(newStringone);
console.log(newStringone.trim());       // there also trim start & trim end


const url = "https://rutvik.com/rutvik@bhil"
console.log(url.replace('@', '-'));
console.log(url.includes('bhil'));              // don't forget quotation mark
console.log(url.includes('abc'));




const myName = String("rutvik-bhil-19")
console.log(myName.split('-'));










