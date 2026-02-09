var cars = [
    {
        name: "CRV",
        price: 1000
    },
    {
        name: "Honda",
        price: 2000
    }
];

var result = JSON.stringify(cars); //From Javascript -> JSON
console.log(result);
console.log(JSON.parse(result)); //From JSON -> Javascript