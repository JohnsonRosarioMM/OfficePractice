// Creating prototye for Reduce method

let arr = [3,4];

 const newdata = arr.reduce((acc,value) => {
    return acc *= value; 
 });
 console.log(newdata);

 Array.prototype.simple = function(fn,n){
    for(let i = 0; i < this.length;i++){
        if(n != undefined){
            n = fn(n,this[i],i,this)
        } else{
            n = this[i];
        }
    }
    return n;
 };

 const newd = arr.simple((acc,value) => {
    return acc *= value; 
 });
 console.log(newd);