notes = ['do', 'la' , 'ta' , 'mi' , 'fa', 'so', 'ga']


//slice  (non- destructive): No change will occur in original array
console.log(notes.slice(4))
console.log(notes.slice(3,6))
console.log(notes)

//splice : Manipulates original array
let omit = notes.splice(2,3)  // splice(start , length)
console.log(omit)
console.log(notes)

//splice part-2
notes.splice(2,4, 'ma' , 'na' , 'ta' , 'sa' , 'aa')  // Replace
console.log(notes)

//Concat (Non-Destructive)
console.log(notes.concat('pa', 're'))
console.log(notes.concat(['da','ni','sa'])) // you can pass array in array
console.log(notes)
