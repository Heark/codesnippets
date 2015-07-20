// Simple shuffle function just paste in your code anywhere and start using
// Made for simplifying getting values from array's randomly..

function shuffle(contents){
    this.contents = contents;
   var method = this.contents[Math.floor(Math.random() * this.contents.length)]; 
return method;
    
}

// Example
arr = ["foo", "bar", "tree"];
console.log(shuffle(arr));

