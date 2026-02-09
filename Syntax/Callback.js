Array.prototype.some2 = function(callback){
    for(let index in this){
        if(this.hasOwnProperty(index)){
            const result = callback(this[index], index, this);
            if(result){
                return true;
            }
        }
    }
    return false;
}

Array.prototype.every2 = function(callback){
    for(let index in this){
        if(this.hasOwnProperty(index)){
            const result = callback(this[index], index, this);
            if(!result){
                return false;
            }
        }
    }
    return true;
}

const car = [
    {
        Name: "CRV",
        Price: 1000
    },
    {
        Name: "Elantra",
        Price: 2000
    },
    {
        Name: "Santafe",
        Price: 1000
    },
]

// const filterCar = car.some2(function(value){
//     return value.Price < 1000
// });

const filterCar = car.every2(function(value){
    return value.Price >= 1000
});


console.log(filterCar);