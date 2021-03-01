let arr = ["Apple", "Mango","Guava"]
console.log(arr)

for(let i=0; i<5; i++){
    console.log(arr[i])
}

arr.push("Banana")  // Insert at back
console.log(arr)
arr.pop()   // Remove from back
console.log(arr)
arr.shift(); // Remove from front
console.log(arr)
arr.unshift("Kiwi");  // Insert at front
console.log(arr)
arr.indexOf("Mango")  // finds you the index


if(arr[0] == "Apple"){
    console.log("Apple")
}else{
    console.log("No it is " , arr[0])
}