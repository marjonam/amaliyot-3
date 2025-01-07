//1-mashq ushbu arraydegi stringni indexini topish

//const myArray = [[false, true], [1, 2], 99, "yaxshi"];

//for orqali qilish

// for (let i = 0; i < myArray.length; i++) {
//   if (typeof myArray[i] == "string");
//   {
//     console.log("String index:", i);
//   }
// }

//forEach orqali

// myArray.forEach((item, i) => {
//   if (typeof item == "string") {
//     console.log(i);
//     console.log("String index:", i);
//   }
// });

//2-mashq array ichidagi faqat arraylarni elementlarini ajratib oling

// const data = [[1, 2, 3], "qizil", [4, 5, 6], true, false];
// const newData = [];

// data.forEach((item) => {
//   const res = Array.isArray(item);
//   if (res) {
//     item.forEach((num) => {
//       newData.push(num);
//     });
//   }
// });

// data.forEach((item) => {
//   Array.isArray(item);
// });
// console.log(newData);

//3-mashq // Array ichidagi
// [null, 0, "", false, undefined, NaN]
//qiymatlarini ajratib oladigan cod yozish

// const checkData = [null, "false", 0, 99, false, undefined, "", NaN, "0"];

// const falsy = [];

// checkData.forEach((item) => {
//   if (!item) {
//     falsy.push(item);
//   }
// });

// console.log(falsy);

//4-mashq
//'samarqand' -> teskari tartibfa chiqarish
//1-usul

//const word = "Samarqand";
// const splitWord = word.split('').reverse()

// let newWord = ''
// for (let i = 0; i < splitWord.length; i++) {
//   newWord += splitWord[i]
// }
// console.log(newWord)

// 2 - usul

// const word = 'samarqand'
// const splitWord = word.split('')
// let newWord = ''

// for (let i = word.length - 1; i >= 0; i--) {
//   newWord += splitWord[i]
// }

// console.log(newWord)

//5-misol
//  “AsSSalamu AlAyKUM YaxShimisiz” so’zi kiritilgan bolsa -> “aSSALOMU aLAYKUM yAXSHIMISIZ” ko’rinishida qaytarish kerek

// const word = prompt("biror gap kiriting:")
// const splitWord = word.split(' ')
// let newWord = ''

// splitWord.forEach((item) => {
//   const boshi = item.charAt().toLowerCase()
//   const davomi = item.slice(1).toUpperCase()

//   newWord += ' ' + boshi + davomi
// })
// console.log(newWord.trimStart())

//misol-6
//arraydagi natural raqamlarni yigindisini topadigan cod yozish kerek

// const numbers = [-1, 87, 4, 3.1, -5.5, Infinity, 0, 1, 2, 0.9]
// let naturalNumber = 0
// numbers.forEach((num) => {
//   if (num >= 0.0 && Math.floor(num) === num && num !== Infinity && num !== 0) {
//     naturalNumber += num
//   }
// })
// console.log(naturalNumber)

//misol-7
//romptdan kiritilgan stringlar ichidagi “a” harfi necha marta ishtirok etganini aniqlaydigan cod yozish kerek

// const words = 'qalesiz yaxshimisiz ? yaxshimi ishlar ?'

// let splitWords = words.split('')
// let counter = 0
// splitWords.forEach((word) => {
//   if (word == 'a' || word == 'A') {
//     counter++
//   }
// })
// console.log(`soraliyotgan harf: ${counter} marta ishtirok etgan`)

//misol-8
// [21.1, "Roziya", "array", ["I am array"], null, true, 214] ->["number", "string", "string", "object", "object", "boolean", "number"]

// const types = [21.1, 'Roziya', 'array', ['I am array'], null, true, 214]

// const newTypes = []

// types.forEach((type) => {
//   newTypes.push(typeof type)
// })
// console.log(newTypes)

//misol-9
//kiritilgan textni nechta elementdan iboratligini aniqlovchi cod yozish kere .length dan fodalanmasdan

// Shoxrux Mahmudov yechimi - WhoIam?
// const word = 'Uzbekistan'
// word.lastIndexOf(word.slice(-1)) + 1

//misol-10
// [1, 2, 3, 4, 5] ->  [1, 3, 5, 7, 9];

// const number = [1, 2, 3, 4, 5]

// let result = []

// number.forEach((num, i) => {
//   result.push(num + i)
// })

// console.log(result)

//misol-11
//berilgan sonning “tarkibidagi” sonlar yigindisini toping

// let counter = 0
// for (let i = 1; i <= 10; i++) {
//   counter += i
// }

// console.log(counter)

//misol-12
//berilgan sonni n ga kopaytirib 1 ni qoshadigan cod yozing. birinchi 10 ta holat qaytarilsn

// let number = 9
// for (let i = 1; i <= 10; i++) {
//   let reusult = number * i + 1
//   console.log(reusult)
// }

//misol13
//function ga array kiritsa u array ichidagi raqamlarni teskari ishorasiga aylanitirib bersin : [1, 2, 3, 4, 5] -> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] -> [-1, 2, -3, 4, -5]

// let numbers = [1, 2, 3, 4, 5]
// let result = []

// const reverseFunc = (arr) => {
//   arr.forEach((num) => {
//     result.push(num * -1)
//   })
// }
// reverseFunc(numbers)
// console.log(result)

//misol-14
// functionga berilgan raqamni 0 dan osha raqamlargarcha bolgan sonlarni 3,5 va 15 ga bolinish holatlarini tekshiring

// agar 3 ga bolinadigan sonlar - 'fizz'
// agar 5 ga bolinadigan sonlar - 'buzz'
// agar 15 ga bolinadigan sonlar - 'fizzbuzz'

// const result = []

// const fizzBuzzFunc = function (number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       result.push('FizzBuzz')
//     } else if (i % 5 == 0) {
//       result.push('Buzz')
//     } else if (i % 3 == 0) {
//       result.push('Fizz')
//     } else {
//       result.push(i)
//     }
//   }
// }
// fizzBuzzFunc(100)
// console.log(result)

//misol-15
//ozingiz haqingizda object yarating va unga haqida methodini qoshing. u methodan ifidalansa objectdagi malumotlardan foidalanib ozingiz haqingizda gapirib beradi.

// const ahrorObj = {
//   name: 'Ahror',
//   lastName: 'Soliev',
//   age: 24,
//   region: 'Fergana',
//   isMerried: false,
//   job: 'Programmer',
//   haqida: function () {
//     return `
//       Assalomu Alaykum, Mening ismim ${this.name}, Familyam ${
//       this.lastName
//     }. Yoshim ${this.age}da. ${this.region}da yashayman. ${
//       this.job
//     } bo'lib faoliyat olib boraman. ${
//       this.isMerried ? 'Uylanganman' : 'Hali uylganmaganman'
//     }
//     `
//   },
// }
// const result = ahrorObj.haqida()
// console.log(result)
