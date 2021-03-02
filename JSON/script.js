var bird = {
    x: 100,
    y: 200,
    color: "blue",
    eggs: ["one", "two" , "three"] ,

    fly: function(){
        console.log("Bird is Flying" , this.x , this.y)
    }
}

for(let i = 0; i< bird.eggs.length; i++){
    console.log(bird.eggs[i])
}

//For Each Loop
bird.eggs.forEach(function(val,idx){
    console.log(idx , val)
})
