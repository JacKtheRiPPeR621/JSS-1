// One way of making objects
var apple = {
    taste: "sweet",
    color: "red"
}

//Another way of making objects
function fruit(taste , color){
    this.taste = taste
    this.color = color
}

let orange = new fruit("sour", "orange")
let banana = new fruit("sweet", "yellow")

// Using Class Keyword (ECMAScript 2015)

// Class Declaration (Hoisted)
class FruitClass {
    constructor(taste,color){
        this.taste = taste
        this.color = color
    }
}

let kiwi = new FruitClass("sour" , "green")

// Class Expression (Not Hoisted)
let FruitClass2 = class{
    constructor(taste,color){
        this.taste = taste
        this.color = color
    }
}

let kiwi2 = new FruitClass2("sour", "green")