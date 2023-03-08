

let Computer = ["CPU", "DRAM" , "SSD" , "Mouse"];
// let comp = new Array('CPU', 'DRAM' , 'SSD' , 'GPU');

console.log(Computer instanceof Array);
console.log(Array.isArray(Computer));

AddThead(Computer);

AddThead("Kevin");

function AddThead(titleArray){
    if(!Array.isArray(titleArray)){
        return;
    }
}


let Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
//迭代
for(var i = 0; i < Cars.length; i++){
    console.log(Cars[i]);
}

Cars.forEach(function(item, index){
    //console.log(index, item);
    console.log(`${index} ${item}`); //字串插值
});
//item 及 index 參數名稱也能改成語意較為清晰的 good!
Cars.forEach((car, idx) => {
    console.log(`${idx}. ${car}`);
});


let friends = [];

let person1 = {
    id : 1,
    name : "Mao",
    email : "mao@gmail.com"
};
let person2 = {
    id : 2,
    name : "Ritsu",
    email : "ritsu@gmail.com"
};

friends.push(person1);
friends.push(person2); 
friends.push(person1, person2); 

let person3 = {
    id : 3,
    name : "Leo",
    email : "leo@gmail.com"
};

friends.unshift(person3); // 加在前頭

friends.pop(); // 移除末端一筆


console.log(friends);

