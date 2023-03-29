let Cars = ['BMW', 'Benz', 'Audi', 'lexus'];

let car = Cars.find(c => c == 'Benz');
console.log(car);

let index = Cars.indexOf('Audi');
console.log(index);


let idx = Cars.findIndex(c => c== 'Benz');
console.log(idx);

let Prices = [200,320,250, 210];

console.log(Prices.findIndex(p=>p>300));

console.log(Prices.filter(p => p > 250));

Prices.filter(function(item,index){
    if(item >= 250){
        console.log(`${Cars[index]} 's price is ${item}, price  > 250`);

    }
});

let result = Prices.filter(function(item,index){
    if(item >= 250){
        console.log(`${Cars[index]} 's price is ${item}, price  > 250`);
        return true;
    }
});

console.log(result);
// 分隔線
console.log('-'.repeat(80));

let result_a = [];
Prices.forEach((priec,index) => {
    if(priec >= 250){
        console.log(`${Cars[index]} 's price is ${priec}, price  > 250`);
        result_a.push(priec);
    }
});
console.log(result_a);
