let str1 = "this is vivek's string"
let str2 = 'this is vivek\'s string'
let p = 'vivek'
let str3 = `this is ${p}\'s string`

let longStr = "this is \
a very \n \
long string"

// Searching
let s = "this is a easy job"
console.log(s.indexOf('is'))
console.log(s.indexOf('is', 4))
console.log(s.indexOf('is', 8))
console.log(s.lastIndexOf('is'))
console.log(s.lastIndexOf('is', 6))

// String Extraction
let mainStr = "this-is-main-string"
let smallerStr = mainStr.slice(3,4)   //slice(start,end)
let smallerStr2 = mainStr.slice(-6,-3)  //negative allowed
let smallerStr3 = mainStr.substring(4,6)  //substring(start,end)
let smallerStr4 = mainStr.substring(-4,-2)  //negative NOT Allowed
let smallerStr5 = mainStr.substr(3,5)  //substr(start,length)
let smallerStr6 = mainStr.substr(-6,3)  //negative allowed
console.log(smallerStr)
console.log(smallerStr2)
console.log(smallerStr3)
console.log(smallerStr4)
console.log(smallerStr5)
console.log(smallerStr6)




