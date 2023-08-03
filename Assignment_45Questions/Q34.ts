export {}
let animals : string[]  = ["dog","cat","horse"] 
    for(let animal of animals) {

        console.log(animals);
    }
    for( let i = 0; i < animals.length; i++) {
        if(animals[i]=== "dog") {
            console.log("A dog is great for security");
        }else if(animals[i]==="cat") {
            console.log("A cat is petful.");
        }else if (animals[i]=== "horse") {
            console.log("A horse is powerful ");
        }
    
    }
